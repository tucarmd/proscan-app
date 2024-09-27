import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { Events } from 'src/app/services/events.service';
import { InnovaDeviceHelper } from "./innova-device-helper";
import {
    ToolSetting,
    BLEEnum,
    BLEDevice,
    BLEResponse,
    VinData, InnovaDeviceEvent, VCICommandRequestConsts, JsonData
} from './innova-device-models';
import { InnovaHelper } from "./innova-helper";
import { HelperService } from '../helper.service';
import { AppLogger, AppLoggerService } from '../logger';

@Injectable()
export class InnovaDeviceProvider {
    logger: AppLogger;
    _readingTimer: any;
    protected connectedDevice: BLEDevice;
    public ToolLinked = null;
    public VIN = null;

    constructor(public ble: BLE, protected loggerService: AppLoggerService,
        protected events: Events, public helper: HelperService) {
            this.logger = loggerService.getLogger('InnovaDeviceProvider');
    }

    //region PUBLIC METHOD
    public getFreezeFrameValidData(freezeFrameLength: number, buffer: Uint8Array): Uint8Array {
        var size = 0;
        const sizeNum = 2;
        for (var i = 0; i < freezeFrameLength; i++) {
            var subData = buffer.slice(size, size + sizeNum);
            var num = InnovaHelper.convertBytesToInt(subData[0], subData[1]);
            size += (num + sizeNum);
            if (i == freezeFrameLength - 1) {
                this.logger.debug('Freeze Frame Buffer Before:', InnovaHelper.convertByteArrayToHexString(buffer));
                var desData = buffer.slice(0, size);
                this.logger.debug('Freeze Frame Buffer After:', InnovaHelper.convertByteArrayToHexString(desData));
                return desData;
            }
        }
        return null;
    }

    public getFreezeFrameUnitsValidData(freezeFrameLength: number, buffer: Uint8Array): Uint8Array {
        var size = 0;
        const sizeNum = 1;
        for (var i = 0; i < freezeFrameLength; i++) {
            var num = buffer[size];
            size += (num + sizeNum);
            if (i == freezeFrameLength - 1) {
                this.logger.debug('Freeze Frame Buffer Before:', InnovaHelper.convertByteArrayToHexString(buffer));
                var desData = buffer.slice(0, size);
                this.logger.debug('Freeze Frame Buffer After:', InnovaHelper.convertByteArrayToHexString(desData));
                return desData;
            }
        }
        return null;
    }

    private packageIndex = 0;
    public getFreezeFrame = (): Promise<any> => {
        let ctx = this;
        let freezeFrameLength = 0;
        let freezeFrameBuffer = new Uint8Array(0);
        let process = new Promise<any>((resolve, reject) => {
            return ctx.doCheckFreezeFrameSupport()
                .then(isOk => {
                    ctx.logger.debug("OBD2->Read_FreezeFrame - Check: OK");
                    return ctx.doGetReportFreezeFrame();
                })
                .then(isOk => {
                    ctx.logger.debug("OBD2->Read_FreezeFrame - Get Report: OK");
                    ctx.isFirstRequest = true;
                    return ctx.doGetFreezeFrameHeader();
                })
                .then(ffHeader => {
                    var headerBuffer = new Uint8Array(2);
                    headerBuffer[0] = ffHeader.buffer[5];
                    headerBuffer[1] = ffHeader.buffer[6];
                    freezeFrameLength = InnovaHelper.convertBytesToInt(headerBuffer[0], headerBuffer[1]);
                    ctx.logger.debug("Freeze Frame Header Data:", InnovaHelper.convertByteArrayToHexString(headerBuffer));
                    freezeFrameBuffer = InnovaHelper.concatTypedArray(freezeFrameBuffer, headerBuffer);
                    ctx.isFirstRequest = true;
                    return ctx.doGetFreezeFrameDtc();
                })
                .then(ffDtc => {
                    var dtcBuffer = new Uint8Array(6);
                    dtcBuffer[0] = ffDtc.buffer[0];
                    dtcBuffer[1] = ffDtc.buffer[1];
                    dtcBuffer[2] = ffDtc.buffer[2];
                    dtcBuffer[3] = ffDtc.buffer[3];
                    dtcBuffer[4] = ffDtc.buffer[4];
                    dtcBuffer[5] = ffDtc.buffer[5];
                    ctx.logger.debug("Freeze Frame DTCs Data:", InnovaHelper.convertByteArrayToHexString(dtcBuffer));
                    freezeFrameBuffer = InnovaHelper.concatTypedArray(freezeFrameBuffer, dtcBuffer);
                    ctx.packageIndex = 0;
                    ctx.isFirstRequest = true;
                    return ctx.doGetFreezeFrameNames();
                })
                .then(ffNames => {
                    var validData = ctx.getFreezeFrameValidData(freezeFrameLength, ffNames);
                    if (validData) {
                        freezeFrameBuffer = InnovaHelper.concatTypedArray(freezeFrameBuffer, validData);
                        ctx.logger.debug("Freeze Frame Names Data:", InnovaHelper.convertByteArrayToHexString(validData));
                    } else {
                        ctx.logger.debug("Freeze Frame Names Data: (null)");
                    }

                    ctx.packageIndex = 0;
                    ctx.isFirstRequest = true;
                    return ctx.doGetFreezeFrameUnits();
                })
                .then(ffUnits => {
                    var validData = ctx.getFreezeFrameUnitsValidData(freezeFrameLength, ffUnits);
                    if (validData) {
                        freezeFrameBuffer = InnovaHelper.concatTypedArray(freezeFrameBuffer, validData);
                        ctx.logger.debug("Freeze Frame Units Data:", InnovaHelper.convertByteArrayToHexString(validData));
                    } else {
                        ctx.logger.debug("Freeze Frame Units Data: (null)");
                    }
                    ctx.packageIndex = 0;
                    ctx.isFirstRequest = true;
                    return ctx.doGetFreezeFrameValues();
                })
                .then(ffValues => {
                    var validData = ctx.getFreezeFrameUnitsValidData(freezeFrameLength, ffValues);
                    if (validData) {
                        freezeFrameBuffer = InnovaHelper.concatTypedArray(freezeFrameBuffer, validData);
                        ctx.logger.debug("Freeze Frame Values Data:", InnovaHelper.convertByteArrayToHexString(validData));
                    } else {
                        ctx.logger.debug("Freeze Frame Values Data: (null)");
                    }
                    ctx.packageIndex = 0;
                    var base64 = InnovaHelper.convertByteArrayToBase64String(freezeFrameBuffer);
                    resolve(base64);
                })
                .catch(error => {
                    ctx.logger.debug("Cannot Get Freeze Frame Data:", error);
                    reject("Cannot Get Freeze Frame Data");
                });
        });
        return process;
    };

    public getMonitor = async (): Promise<any> => {
        let ctx = this;
        ctx.logger.debug("Checking monitor icon support");
        await ctx.doCheckMonitorIconSupport();
        ctx.logger.debug("Checked monitor icon support");
        return ctx.doGetMonitorPart1();
    };

    public getECMDTCs = (): Promise<any> => {
        let ctx = this;

        let process = new Promise<any>((resolve, reject) => {
            return ctx.doGetDTCsSupport()
                .then(isOk => {
                    ctx.logger.debug("OBD2->Read_Dtc - Check: OK");
                    return ctx.doGetReportDTCs;
                })
                .then(isOk => {
                    ctx.logger.debug("OBD2->Get Report - DTCs: OK");
                    return ctx.doGetECMDTCs;
                })
                .then(ecmDtcs => {
                    ctx.logger.debug("OBD2->Read_Dtc - ECM DTCs Data:", ecmDtcs);
                    resolve(ecmDtcs);
                })
                .catch(error => {
                    ctx.logger.debug("Cannot Get ECM DTCs:", error);
                    reject("Cannot Get ECM DTCs");
                });
        });
        return process;
    };

    public setVIN = (vin): Promise<any> => {
        let ctx = this;

        let process = new Promise<any>((resolve, reject) => {
            return ctx.doSetVIN(vin)
                .then(isOk => {
                    ctx.logger.debug("OBD2->SetVIN: OK");
                    return ctx.doGetVinProfile(vin);
                })
                .then(vinResult => {
                    resolve(vinResult);
                })
                .catch(error => {
                    ctx.logger.debug("Cannot Set VIN:", error);
                    reject("Cannot Set VIN");
                });
        });
        return process;
    };

    //endregion

    //region PROTECTED METHOD

    public getToolData = (commandId: number, subCommandId: number = null, requestBuffer: ArrayBufferLike = null): Promise<BLEResponse> => {
        let ctx = this;

        let _process = new Promise<BLEResponse>((resolve, reject) => {
            if (!requestBuffer) {
                requestBuffer = InnovaDeviceHelper.buildRequest4BytesData(commandId, 0x00);
            }
            
            ctx.doStartDataListener(commandId, subCommandId)
            .then(data => {
                if (!data) {
                    ctx.logger.debug("Received Data Was Invalid");
                    reject("Received Data Was Invalid");
                } else {                        
                    resolve(data);
                }
            })
            .catch(error => reject(error));

            ctx.sendData(requestBuffer, commandId)
                .then(() => {
                    ctx.logger.debug("Wrote Data Successful");
                })
                .catch(error => {
                    ctx.logger.debug("Write Data Failed:", error);
                    reject(error);
                });

        });

        return _process;
    };

    //endregion

    //region SCAN - CONNECT

    public doConnect(deviceId: string): Promise<BLEDevice> {
        let ctx = this;
        let process = new Promise<any>(function (resolve, reject) {
            ctx.logger.debug("Connecting to device:", deviceId);
            let connection = ctx.ble.connect(deviceId);
            connection.subscribe(
                connected => {
                    ctx.logger.debug("Device connected successfully!");
                    ctx.connectedDevice = connected;                    
                    resolve(connected);
                },
                error => {
                    ctx.logger.debug("Connect Error:", error);
                    reject(error);
                }
            );
        });
        return process;
    }

    public doDisconnect(deviceId: string = null): Promise<boolean> {
        let ctx = this;
        if (!deviceId && ctx.connectedDevice && ctx.connectedDevice.id) {
            deviceId = ctx.connectedDevice.id;
        }

        let process = new Promise<any>(function (resolve, reject) {
            ctx.logger.debug('Disconnected to device');
            ctx.ble.disconnect(deviceId)
                .then(
                    () => {
                        ctx.connectedDevice = null;
                        resolve(true);
                    },
                    error => {
                        reject(error);
                    }
                );

        });
        return process;
    }

    //endregion

    //region CHECKING

    public isConnected(deviceId: string = null): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            let ctx = this;
            if (!ctx.connectedDevice || (deviceId != null && ctx.connectedDevice.id !== deviceId)) {
                resolve(false);
            }
            if (!deviceId) {
                deviceId = ctx.connectedDevice.id;
            }
            ctx.ble.isConnected(deviceId).then(() => resolve(true)
            ).catch(
                () => resolve(false)
            );
        });
    }

    public isEnabled = (): Promise<boolean> => {
        let ctx = this;
        return new Promise<boolean>(resolve => {
            ctx.ble.isEnabled()
                .then(
                    () => resolve(true)
                )
                .catch(
                    () => {
                        this.logger.debug("Bluetooth is *not* enabled");
                        resolve(false);
                    }
                );
        });
    };

    //endregion

    //region PRIVATE COMMAND

    public doGetToolSetting = (): Promise<ToolSetting> => {
        let ctx = this;
        ctx.logger.debug("Get Tool Setting:");

        let process = new Promise<ToolSetting>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GettingToolSetting);

            ctx.getToolData(BLEEnum.CommandId.GetToolSetting).then(
                receivedData => {
                    let toolSetting: ToolSetting;
                    if (receivedData) {
                        toolSetting = new ToolSetting(receivedData.buffer);
                    }
                    ctx.events.publish(InnovaDeviceEvent.GotToolSetting, toolSetting);
                    resolve(toolSetting);
                }
            ).catch(
                () => reject("Cannot Get Tool Setting")
            );
        });
        return process;
    };

    public doGetVin = (): Promise<string> => {
        let ctx = this;
        ctx.logger.debug("OBD2->ReadVin:");

        let vin = null;
        let process = new Promise<string>((resolve, reject) => {
            let requestBuffer = InnovaDeviceHelper.buildVCIBufferCommand([0x03, 0x03]);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetVinProfile, requestBuffer).then(
                receivedData => {
                    if (vin) {
                        resolve(vin);
                    }
                    if (receivedData) {
                        try {
                            var vinData = new VinData(receivedData.buffer);
                            if (vinData && vinData.vin) {
                                ctx.logger.debug("OBD2->ReadVin:", vinData.vin);
                                vin = vinData.vin;
                                resolve(vin);
                            }
                        } catch (error) {
                            ctx.logger.debug("OBD2->ReadVin:", error);
                            resolve("");
                        }
                    } else {
                        resolve("");
                    }
                }
            ).catch(
                () => reject("Cannot Get Vin")
            );
        });
        return process;
    };

    private doCheckMonitorIconSupport = async (): Promise<any> => {
        let ctx = this;
        ctx.logger.debug("OBD2->MonitorIcon - Check Support:");

        var data = [], dataLength = 0;
        data[dataLength++] = 0x04;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x65;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x03;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x02;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        let requestBuffer =
            InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.CheckMonitorIconSupportBufferLength, data);
        return ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.CheckMonitorIconSupport, requestBuffer);
    };

    public doGetMonitorPart1 = (): Promise<BLEResponse> => {
        let ctx = this;
        ctx.logger.debug("OBD2->MonitorIcon:");

        ctx.events.publish(InnovaDeviceEvent.GettingMonitorPart1);
        var data = [], dataLength = 0;
        data[dataLength++] = 0x04;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x64;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;

        data[dataLength++] = 0x0b;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        let requestBuffer =
            InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetMonitorBufferLength, data);
        return ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetMonitorPart1, requestBuffer);
    }

    public doCheckFreezeFrameSupport = (): Promise<boolean> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_FreezeFrame - Check Support:");

        let process = new Promise<boolean>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.CheckFreezeFrameSupport);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x03;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x05;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.CheckFreezeFrameSupportBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.CheckFreezeFrameSupport, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.CheckedFreezeFrameSupport);
                    resolve(true);
                }
            ).catch(
                () => reject("Unable to Check Freeze Frame Support")
            );
        });
        return process;
    };

    public doGetReportFreezeFrame = ():
        Promise<boolean> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Get report - Freeze Frame:");

        let process = new Promise<boolean>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GettingReportFreezeFrame);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x05;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x05;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetFreezeFrameDtcLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetReportFreezeFrame, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.GotReportFreezeFrame);
                    resolve(true);
                }
            ).catch(
                () => reject("Unable to get report Freeze Frame")
            );
        });
        return process;
    };

    public doGetFreezeFrameHeader = ():
        Promise<BLEResponse> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_FreezeFrame - Header - Part 1:");
        let process = new Promise<BLEResponse>((resolve, reject) => {
            var requestBuffer = new Uint8Array([0xAD, 0x80, 0x14, 0, 0, 0, 0, 0x64, 0, 0, 0, 0, 0x0c, 0, 0x02, 0, 0, 0, 0x04, 0]);
            return ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetFFHeader, requestBuffer.buffer).then(
                (receivedData) => {
                    resolve(receivedData);
                }
            ).catch(
                () => reject("Unable to Get Freeze Frame Header Part 1")
            );
        });
        return process;
    };

    public doGetFreezeFrameDtc = ():
        Promise<BLEResponse> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_FreezeFrame - DTCs - Part 1");
        let process = new Promise<BLEResponse>((resolve, reject) => {
            let requestBuffer =
                new Uint8Array([0xAD, 0x80, 0x16, 0, 0, 0, 0, 0x64, 0, 0, 0, 0, 0x0c, 0, 0x01, 0, 0, 0, 0x06, 0]);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetFFDtc, requestBuffer.buffer).then(
                (receivedData) => {
                    resolve(receivedData);
                }
            ).catch(
                () => reject("Unable to Get Freeze Frame DTC")
            );
        });
        return process;
    };

    public getStatus(buffer: Uint8Array): number {
        if (!buffer || buffer.byteLength < 1) {
            return 0;
        }
        //this.logger.debug("Status:", buffer[buffer.length - 2]);
        if (buffer[buffer.length - 2] == 0xbb) {
            return 1;
        }
        if (buffer[buffer.length - 2] == 0xaa) {
            return 2;
        }
        return 0;
    }

    public doGetFreezeFrameNames = ():
        Promise<Uint8Array> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_FreezeFrame - Names - Part 1:");
        var freezeFrameNamesBuffer = new Uint8Array(0);
        let process = new Promise<Uint8Array>((resolve, reject) => {
            let requestBuffer = new Uint8Array([0xAD, 0x80, 0x16, 0, 0, 0, 0, 0x64, 0, 0, 0, 0, 0x0c, 0, 0x03, ctx.packageIndex, 0, 0, 0, 0]);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetFFNames, requestBuffer.buffer).then(
                (receivedData) => {
                    if (receivedData.buffer) {
                        var status = ctx.getStatus(receivedData.buffer);
                        if (status == 1) {
                            // Transferring
                            ctx.packageIndex++;
                            //ctx.logger.debug("OBD2->Get Freeze Frame Names Part 1 - Transferring:", receivedData.buffer);
                            freezeFrameNamesBuffer = InnovaHelper.concatTypedArray(freezeFrameNamesBuffer, receivedData.buffer.subarray(0, receivedData.buffer.byteLength - 2));
                            //ctx.logger.debug("OBD2->Get Freeze Frame Names Part 1 - Transferring added:", freezeFrameNamesBuffer);
                            return ctx.doGetFreezeFrameNames();
                        } else if (status == 2) {
                            // Completed
                            //ctx.logger.debug("OBD2->Get Freeze Frame Names Part 1 - Completed:", receivedData.buffer);
                            freezeFrameNamesBuffer = InnovaHelper.concatTypedArray(freezeFrameNamesBuffer, receivedData.buffer.subarray(0, receivedData.buffer.byteLength - 2));
                            //ctx.logger.debug("OBD2->Get Freeze Frame Names Part 1 - Completed added:", freezeFrameNamesBuffer);
                            resolve(freezeFrameNamesBuffer);
                        }
                        else {
                            ctx.packageIndex = 0;
                            //ctx.logger.debug("OBD2->Get Freeze Frame Names Part 1 - Failed", receivedData.buffer);
                            resolve(null);
                        }
                    }
                }
            ).catch(
                () => reject("Unable to Get Freeze Frame Names Part 1")
            );
        });
        return process;
    };

    public doGetFreezeFrameUnits = ():
        Promise<Uint8Array> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Get Freeze Frame Units Part 1");


        var freezeFrameUnitsBuffer = new Uint8Array(0);
        let process = new Promise<Uint8Array>((resolve, reject) => {
            let requestBuffer = new Uint8Array([0xAD, 0x80, 0x16, 0, 0, 0, 0, 0x64, 0, 0, 0, 0, 0x0c, 0, 0x04, ctx.packageIndex, 0, 0, 0, 0]);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetFFUnits, requestBuffer.buffer).then(
                (receivedData) => {
                    if (receivedData.buffer) {
                        var status = ctx.getStatus(receivedData.buffer);
                        if (status == 1) {
                            // Transferring
                            ctx.packageIndex++;
                            ctx.logger.debug("OBD2->Get Freeze Frame Units Part 1 - Transferring:", receivedData.buffer);
                            freezeFrameUnitsBuffer = InnovaHelper.concatTypedArray(freezeFrameUnitsBuffer, receivedData.buffer.subarray(0, receivedData.buffer.byteLength - 2));
                            ctx.logger.debug("OBD2->Get Freeze Frame Units Part 1 - Transferring added:", freezeFrameUnitsBuffer);
                            return ctx.doGetFreezeFrameUnits();
                        } else if (status == 2) {
                            // Completed
                            ctx.logger.debug("OBD2->Get Freeze Frame Units Part 1 - Completed:", receivedData.buffer);
                            freezeFrameUnitsBuffer = InnovaHelper.concatTypedArray(freezeFrameUnitsBuffer, receivedData.buffer.subarray(0, receivedData.buffer.byteLength - 2));
                            ctx.logger.debug("OBD2->Get Freeze Frame Units Part 1 - Completed added:", freezeFrameUnitsBuffer);
                            resolve(freezeFrameUnitsBuffer);
                        }
                        else {
                            ctx.packageIndex = 0;
                            ctx.logger.debug("OBD2->Get Freeze Frame Units Part 1 - Failed", receivedData.buffer);
                            resolve(null);
                        }
                    }
                }
            ).catch(
                () => reject("Unable to Get Freeze Frame Units Part 1")
            );
        });
        return process;
    };

    public doGetFreezeFrameValues = ():
        Promise<Uint8Array> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Get Freeze Frame Values Part 1");


        var freezeFrameValuesBuffer = new Uint8Array(0);
        let process = new Promise<Uint8Array>((resolve, reject) => {
            let requestBuffer = new Uint8Array([0xAD, 0x80, 0x16, 0, 0, 0, 0, 0x64, 0, 0, 0, 0, 0x0c, 0, 0x05, ctx.packageIndex, 0, 0, 0, 0]);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetFFValues, requestBuffer.buffer).then(
                (receivedData) => {
                    if (receivedData.buffer) {
                        var status = ctx.getStatus(receivedData.buffer);
                        if (status == 1) {
                            // Transferring
                            ctx.packageIndex++;
                            ctx.logger.debug("OBD2->Get Freeze Frame Values Part 1 - Transferring:", receivedData.buffer);
                            freezeFrameValuesBuffer = InnovaHelper.concatTypedArray(freezeFrameValuesBuffer, receivedData.buffer.subarray(0, receivedData.buffer.byteLength - 2));
                            ctx.logger.debug("OBD2->Get Freeze Frame Values Part 1 - Transferring added:", freezeFrameValuesBuffer);
                            return ctx.doGetFreezeFrameValues();
                        } else if (status == 2) {
                            // Completed
                            ctx.logger.debug("OBD2->Get Freeze Frame Values Part 1 - Completed:", receivedData.buffer);
                            freezeFrameValuesBuffer = InnovaHelper.concatTypedArray(freezeFrameValuesBuffer, receivedData.buffer.subarray(0, receivedData.buffer.byteLength - 2));
                            ctx.logger.debug("OBD2->Get Freeze Frame Values Part 1 - Completed added:", freezeFrameValuesBuffer);
                            resolve(freezeFrameValuesBuffer);
                        }
                        else {
                            ctx.packageIndex = 0;
                            ctx.logger.debug("OBD2->Get Freeze Frame Values Part 1 - Failed", receivedData.buffer);
                            resolve(null);
                        }
                    }
                }
            ).catch(
                () => reject("Unable to Get Freeze Frame Values Part 1")
            );
        });
        return process;
    };

    public doSetJsonMode = (turnOnJson: boolean = false, ):
        Promise<boolean> => {
        let ctx = this;
        ctx.logger.debug("SET JSON MODE");



        let process = new Promise<boolean>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.SettingJsonMode);
            let isStreamingFlag = turnOnJson ? [0x01] : [0x00];
            ctx.logger.debug(turnOnJson ? "Turn on JSON mode" : "Turn off JSON mode");
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.SetJsonMode, 1, isStreamingFlag);
            ctx.getToolData(BLEEnum.CommandId.SetJsonMode, null, requestBuffer).then(
                () => {
                    ctx.events.publish(InnovaDeviceEvent.SetJsonMode);
                    resolve(true);
                }
            ).catch(
                () => reject("Cannot Set JSON Mode")
            );
        });
        return process;
    };

    public isToolLinked = (): Promise<BLEResponse> => {
        let ctx = this;
        ctx.logger.debug("Checking linked vehicle");
        var data = [], dataLength = 0;
        data[dataLength++] = 0x04;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x65;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        data[dataLength++] = 0x03;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x01;

        data[dataLength++] = 0x00;
        data[dataLength++] = 0x00;
        let requestBuffer =
            InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.CheckProtocolBufferLength, data);
        return ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.CheckProtocol, requestBuffer);
    };

    public doCheckProtocol = (protocol2bytes, ):
        Promise<boolean> => {
        let ctx = this;
        if (protocol2bytes)
            ctx.logger.debug("Checking Protocol:", InnovaHelper.convertByteArrayToHexString(protocol2bytes));

        let process = new Promise<boolean>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.CheckProtocol);
            if (!protocol2bytes || protocol2bytes.length === 0) {
                protocol2bytes = new Uint8Array([0x00, 0x00]);
            }
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x03;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x01;

            data[dataLength++] = protocol2bytes[0];
            data[dataLength++] = protocol2bytes[1];
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.CheckProtocolBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.CheckProtocol, requestBuffer).then(
                (receivedData) => {
                    if (receivedData && receivedData.statusCode === 1) {
                        ctx.events.publish(InnovaDeviceEvent.CheckedProtocol);
                        ctx.logger.debug("Protocol Checked:", InnovaHelper.convertByteArrayToHexString(protocol2bytes));
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }
            ).catch(
                () => reject("Unable to check protocol")
            );
        });
        return process;
    };

    public doStartQuery = ():
        Promise<Uint8Array> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Start_Query:");



        let process = new Promise<Uint8Array>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.StartQuery);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x03;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.StartQueryBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.StartQuery, requestBuffer).then(
                (receivedData) => {
                    if (receivedData && receivedData.isPositiveResponse) {
                        ctx.logger.debug("OBD2->Start_Query: Protocols: " + InnovaHelper.convertByteArrayToHexString(receivedData.buffer));
                        ctx.events.publish(InnovaDeviceEvent.StartedQuery);
                        resolve(receivedData.buffer);
                    } else {
                        resolve(null);
                    }
                }
            ).catch(
                () => reject("Unable to check protocol")
            );
        });
        return process;
    };

    public doLinkToProtocol = async (protocols):
        Promise<Uint8Array> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Link_To_Prot_N:");
        var _doLinkToProtocol = async function () {
            for (var protocolIndex = 0; protocolIndex < protocols.length; protocolIndex += 2) {
                var protocol = protocols.slice(protocolIndex, protocolIndex + 2);
                try {
                    var isValid = await ctx.doCheckProtocol(protocol);
                    if (isValid) {
                        ctx.logger.debug("OBD2->Link_To_Prot_N: " + InnovaHelper.convertByteArrayToHexString(protocol) + " - Successful");
                        ctx.events.publish(InnovaDeviceEvent.LinkedToProtocol);
                        return protocol;
                    } else {
                        if (protocolIndex + 2 > protocols.length) {
                            ctx.logger.debug("OBD2->Link_To_Prot_N: " + InnovaHelper.convertByteArrayToHexString(protocol) + " - Unable to link to protocols");
                            return null;
                        } else {
                            ctx.logger.debug("OBD2->Link_To_Prot_N: " + InnovaHelper.convertByteArrayToHexString(protocol) + " - Failed - Move to next protocol");
                        }
                    }
                } catch (doCheckProtocolError) {
                    ctx.logger.debug("OBD2->Link_To_Prot_N: " + InnovaHelper.convertByteArrayToHexString(protocol) + " - Failed - Move to next protocol");
                }
            }
        }
        let protocol = await _doLinkToProtocol();
        return Promise.resolve(protocol);
    };

    public doEnableJsonSupport = (enabled = true, ):
        Promise<boolean> => {
        let ctx = this;
        ctx.logger.debug("Enable JSON Support");



        let process = new Promise<boolean>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.EnableJsonSupport);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            if (enabled) {
                data[dataLength++] = 0x07; // Enable
            } else {
                data[dataLength++] = 0x08; // Disable
            }
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x03;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.EnableJsonSupportBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.EnableJsonSupport, requestBuffer).then(
                () => {
                    ctx.logger.debug("Readable format: JSON " + (enabled ? "Enabled" : "Disabled"));
                    ctx.events.publish(InnovaDeviceEvent.EnabledJsonSupport);
                    resolve(true);
                }
            ).catch(
                () => reject("Unable to enable JSON support")
            );
        });
        return process;
    };

    private doGetDTCsSupport = ():
        Promise<boolean> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_Dtc - Check Support:");

        let process = new Promise<boolean>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GetDTCsSupport);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x03;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetDTCsSupportBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetDTCsSupport, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.GotDTCsSupport);
                    resolve(true);
                }
            ).catch(
                () => resolve(false)
            );
        });
        return process;
    };

    public doGetReportDTCs = ():
        Promise<boolean> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_Dtc - Report:");



        let process = new Promise<boolean>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GetReportDTCs);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x05;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetDTCsSupportBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetDTCs, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.GotReportDTCs);
                    resolve(true);
                }
            ).catch(
                () => resolve(false)
            );
        });
        return process;
    };

    public doGetECMDTCs = ():
        Promise<string> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_Dtc - ECM:");



        let process = new Promise<string>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GetECMDTCs);
            let requestBuffer =
                InnovaDeviceHelper.buildGetWholeBufferCommand([0x0d, 0x00], VCICommandRequestConsts.GetECMDTCsBufferLength, 0xAE, null);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetEcmDTCs, requestBuffer).then(
                (receivedData) => {
                    if (receivedData && receivedData.buffer) {
                        ctx.events.publish(InnovaDeviceEvent.GotECMDTCs);
                        resolve(receivedData.base64);
                    } else {
                        resolve("");
                    }
                }
            ).catch(
                () => reject("Unable to get ECM DTCs")
            );
        });
        return process;
    };

    public doGetTCMDTCs = ():
        Promise<any> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Read_Dtc - TCM:");

        let process = new Promise<any>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GetTCMDTCs);
            let requestBuffer =
                InnovaDeviceHelper.buildGetWholeBufferCommand([0x0d, 0x01], VCICommandRequestConsts.GetECMDTCsBufferLength, 0xAF, null);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetTcmDTCs, requestBuffer).then(
                (receivedData) => {
                    if (receivedData && receivedData.buffer) {
                        ctx.events.publish(InnovaDeviceEvent.GotTCMDTCs);
                        resolve(receivedData.base64);
                    } else {
                        resolve("");
                    }
                }
            ).catch(
                () => reject("Unable to get TCM DTCs")
            );
        });
        return process;
    };

    public doGetBatteryVoltage = ():
        Promise<any> => {
        let ctx = this;
        ctx.logger.debug("Read Battery Voltage Value");
        let process = new Promise<any>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GetBatteryVoltage);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x02;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.GetBatteryData, VCICommandRequestConsts.GetBatteryVoltageBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.GetBatteryData, null, requestBuffer).then(
                (receivedData) => {
                    if (receivedData && receivedData.buffer.byteLength >= 7) {
                        let voltage = receivedData.buffer[4] + (receivedData.buffer[5] << 8);
                        ctx.logger.debug("Battery Voltage Value:", voltage);
                        ctx.events.publish(InnovaDeviceEvent.GotBatteryVoltage);
                        resolve(voltage);
                    } else {
                        reject("Unable to get Battery voltage");
                    }
                }
            ).catch(
                () => reject("Unable to get Battery voltage")
            );
        });
        return process;
    };

    public doGetBatteryStatus = ():
        Promise<any> => {
        let ctx = this;
        ctx.logger.debug("Read Battery Status Value");
        let process = new Promise<any>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GetBatteryStatus);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x00;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.GetBatteryData, VCICommandRequestConsts.GetBatteryStatusBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.GetBatteryData, null, requestBuffer).then(
                (receivedData) => {
                    if (receivedData && receivedData.buffer.byteLength >= 7) {
                        ctx.logger.debug("Battery Status Value:", receivedData.buffer[4]);
                        ctx.events.publish(InnovaDeviceEvent.GotBatteryStatus);
                        resolve(receivedData.buffer[4]);
                    } else {
                        reject("Unable to get Battery status");
                    }
                }
            ).catch(
                () => reject("Unable to get Battery status")
            );
        });
        return process;
    };

    public doGetVinProfile = (vin, ):
        Promise<string> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Get YMME:");


        let process = new Promise<any>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GettingVINProfile);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x64;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;

            data[dataLength++] = 0x01;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;

            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetVINProfileLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetVinProfile, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.GotVINProfile);
                    resolve(vin);
                }
            ).catch(
                () => reject("Unable to get VIN Profile")
            );
        });
        return process;
    };

    public doGetSupportedOEMModules = ():
        Promise<any> => {
        let ctx = this;
        ctx.logger.debug("NWScan OEM->Get NWScan Support List:");

        let process = new Promise<any>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GettingSupportedOEMModules);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x03;
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetSupportedOEMModuleLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetOEMModule, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.GotSupportedOEMModules);
                    if (receivedData) {
                        let result = ctx.getOEMDTCsValidData(receivedData.buffer);
                        ctx.logger.debug("Supported Modules:", result);
                        resolve(result);
                    }
                    resolve(null);
                }

            ).catch(
                () => reject("Unable to get Supported OEM Modules")
            );
        });
        return process;
    };

    public getOEMDTCsValidData(buffer: Uint8Array): string {
        if (!buffer || buffer.length < 9) {
            return null;
        }

        if (buffer[8] != 0xaa) {
            return null;
        }
        try {
            var lengthBuffer = buffer.slice(2, 4);
            var length = InnovaHelper.convertBytesToInt(lengthBuffer[0], lengthBuffer[1]);
            this.logger.debug("OEM Buffer Length:", length);
            var validBuffer = buffer.slice(9, length + 4);
            this.logger.debug(InnovaHelper.convertByteArrayToHexString(validBuffer));
            var jsonResult = new JsonData(validBuffer).json;
            if (JSON.parse(jsonResult)) {
                return jsonResult;
            }
        } catch (error) {
            this.logger.debug("Error: ", error);
        }
        return null;
    }

    public doGetOEMModuleDtcs = async (system, subSystem):
        Promise<string> => {
        let ctx = this;
        ctx.logger.debug("NWScan->Read DTC Of System:", system, subSystem);

        let process = new Promise<string>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.GettingOEMModuleDTCs);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x05;
            var tmp = InnovaHelper.decToBytes(system);
            data[dataLength++] = tmp[0];
            data[dataLength++] = tmp[1];
            tmp = InnovaHelper.decToBytes(subSystem);
            data[dataLength++] = tmp[0];
            data[dataLength++] = tmp[1];

            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetOEMModuleDTCsLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.GetOEMDTCModule, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.GotOEMModuleDTCs);
                    if (receivedData) {
                        ctx.logger.debug("OEM DTCs Buffer:", InnovaHelper.convertByteArrayToHexString(receivedData.buffer));
                        let result = ctx.getOEMDTCsValidData(receivedData.buffer);
                        ctx.logger.debug("OEM DTCs:", result);
                        resolve(result);
                    }
                    resolve(null);
                }
            ).catch((error) => reject(error)
            );
        });
        return process;
    };

    public doClearOEMModuleDTCs = (system, subSystem, ):
        Promise<any> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Erase_Dtc:", system, subSystem);


        let process = new Promise<any>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.ClearingOEMModuleDTCs);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x06;
            var tmp = InnovaHelper.decToBytes(system);
            data[dataLength++] = tmp[0];
            data[dataLength++] = tmp[1];
            tmp = InnovaHelper.decToBytes(subSystem);
            data[dataLength++] = tmp[0];
            data[dataLength++] = tmp[1];

            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.GetOEMModuleDTCsLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.ClearOEMModuleDTCs, requestBuffer).then(
                (receivedData) => {
                    ctx.events.publish(InnovaDeviceEvent.ClearedOEMModuleDTCs);
                    resolve(true);
                }
            ).catch(
                (error) => resolve(true)
            );
        });
        return process;
    };

    public doSetVIN = (vin: string, ):
        Promise<any> => {
        let ctx = this;
        ctx.logger.debug("OBD2->Set VIN:", vin);

        let process = new Promise<any>((resolve, reject) => {
            ctx.events.publish(InnovaDeviceEvent.WritingVIN);
            var data = [], dataLength = 0;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x65;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x01;
            data[dataLength++] = 0x00;
            data[dataLength++] = 0x04;
            data[dataLength++] = 0x11;
            data[dataLength++] = 0x00;
            for (var i = 0; i < 17; i++) {
                data[dataLength + i] = vin.charCodeAt(i);
            }
            let requestBuffer =
                InnovaDeviceHelper.buildRequestCommandRaw(BLEEnum.CommandId.VCI, VCICommandRequestConsts.SetVINBufferLength, data);
            ctx.getToolData(BLEEnum.CommandId.VCI, BLEEnum.VCICommandId.SetVIN, requestBuffer).then(
                (receivedData) => {
                    ctx.logger.debug(receivedData.buffer);
                    resolve(true);
                }
            ).catch(
                () => resolve(true)
            );
        });
        return process;
    };
    //endregion

    //region public BLE

    public sendData(dataBuffer: ArrayBuffer, commandId: number, delay = 10): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let ctx = this;
            ctx.logger.debug("Write Data:", InnovaHelper.convertByteArrayToHexString(new Uint8Array(dataBuffer)));
            //ctx.logger.debug("Start send data for command", InnovaDeviceHelper.getCommandName(commandId));
            if (!ctx.connectedDevice) {
                reject("Not connected");
            }
            // ctx.logger.debug("Sending data buffer:", InnovaHelper.convertByteArrayToHexString(new Uint8Array(dataBuffer)));
            ctx.ble.write(ctx.connectedDevice.id,
                BLEEnum.ServiceUUID.Write,
                BLEEnum.ServiceUUID.CharacteristicWrite,
                dataBuffer).then(
                    () => resolve(true)
                ).catch(
                    error => {
                        ctx.logger.debug("Cannot write data:", error);
                        resolve(true);
                    }
                );
        });
    };

    private isFirstRequest = true;
    private dataListening = false;
    public doStartDataListener(commandId: number, subCommandId: number = null, retries = 2,
        maxDataLengthCanReceive: number = null): Promise<BLEResponse> {
        let ctx = this;

        return new Promise<BLEResponse>(function (resolve, reject) {
            let responseLength = 0;
            if (!ctx.connectedDevice) {
                reject("Not connected");
            }

            let result: BLEResponse = null;
            ctx.dataListening = true;
            ctx.ble.startNotification(ctx.connectedDevice.id,
                BLEEnum.ServiceUUID.Read,
                BLEEnum.ServiceUUID.CharacteristicRead)
                .subscribe((buffer) => {
                    if (buffer) {
                        let bytesData = new Uint8Array(buffer);
                        if (!result) {
                            ctx.logger.debug("Start Received Data:", InnovaHelper.convertByteArrayToHexString(bytesData));
                            result = InnovaDeviceHelper.parseResponseData(buffer, commandId) as BLEResponse;
                        } else {
                            ctx.logger.debug("Received Data:", InnovaHelper.convertByteArrayToHexString(bytesData));
                            result.buffer = InnovaHelper.concatTypedArray(result.buffer, buffer);
                        }

                        switch (commandId) {
                            case BLEEnum.CommandId.VCI: {
                                switch (subCommandId) {

                                }
                            }
                                break;
                        }

                        if (result.isPositiveResponse) {
                            responseLength = result.length;
                        }

                        if (result.statusCode != BLEEnum.RequestStatus.BusyOrProcessing) {
                            if (result.statusCode == BLEEnum.RequestStatus.Error) {
                                resolve(null);
                            }
                            if (result.isNegativeResponse) {
                                //ctx.logger.debug("Status Code:", result.statusCode);
                                if (result.statusCode == BLEEnum.RequestStatus.WaitingNextRequest) {
                                    if (ctx.isFirstRequest) {
                                        var requestBuffer = new Uint8Array(0);
                                        switch (subCommandId) {
                                            case BLEEnum.VCICommandId.GetFFHeader:
                                                ctx.logger.debug("OBD2->Read_FreezeFrame - Header - Part 2:")
                                                requestBuffer = new Uint8Array([0, 0, 0, 0xb7]);
                                                break;
                                            case BLEEnum.VCICommandId.GetFFDtc:
                                                ctx.logger.debug("OBD2->Read_FreezeFrame - DTCs - Part 2:")
                                                requestBuffer = new Uint8Array([0, 0, 0, 0x01, 0, 0xbb]);
                                                break;
                                            case BLEEnum.VCICommandId.GetFFNames:
                                                ctx.logger.debug("OBD2->Read_FreezeFrame - Names - Part 2:")
                                                requestBuffer = new Uint8Array([0, 0, 0, 0x01, 0, 0xb7 + ctx.packageIndex]);
                                                break;
                                            case BLEEnum.VCICommandId.GetFFUnits:
                                                ctx.logger.debug("OBD2->Read_FreezeFrame - Units - Part 2:")
                                                requestBuffer = new Uint8Array([0, 0, 0, 0x01, 0, 0xb8 + ctx.packageIndex]);
                                                break;
                                            case BLEEnum.VCICommandId.GetFFValues:
                                                ctx.logger.debug("OBD2->Read_FreezeFrame - Values - Part 2:")
                                                requestBuffer = new Uint8Array([0, 0, 0, 0x01, 0, 0xb9 + ctx.packageIndex]);
                                                break;
                                        }
                                        if (subCommandId == BLEEnum.VCICommandId.GetFFHeader ||
                                            subCommandId == BLEEnum.VCICommandId.GetFFDtc ||
                                            subCommandId == BLEEnum.VCICommandId.GetFFNames ||
                                            subCommandId == BLEEnum.VCICommandId.GetFFUnits ||
                                            subCommandId == BLEEnum.VCICommandId.GetFFValues) {
                                            result = null;
                                            ctx.sendData(requestBuffer.buffer, commandId)
                                                .then(() => {
                                                    ctx.isFirstRequest = false;
                                                })
                                                .catch(error => {
                                                    //ctx.logger.debug("Sent Data Fail:", error);
                                                });
                                        }
                                    }
                                } else {
                                    resolve(result);
                                }
                            } else {
                                if (result.isPositiveResponse && bytesData.length < 20) {
                                    if (result.buffer.length != result.length) {
                                        resolve(null);
                                    }
                                }

                                if ((!maxDataLengthCanReceive ||
                                    (maxDataLengthCanReceive && responseLength >= maxDataLengthCanReceive)) &&
                                    InnovaHelper.isLastPackage(result.buffer, responseLength)) {
                                    //ctx.logger.debug("Is Last Package: Yes");
                                    if (commandId == BLEEnum.CommandId.VCI) {
                                        switch (subCommandId) {
                                            case BLEEnum.VCICommandId.GetVinProfile:
                                            case BLEEnum.VCICommandId.StartQuery:
                                                result.buffer = InnovaDeviceHelper.getVCIDataBufferBody(result.buffer);
                                                break;
                                            case BLEEnum.VCICommandId.GetOEMDTCModule:
                                            case BLEEnum.VCICommandId.GetOEMModule:
                                                break;
                                            default:
                                                result.buffer = InnovaDeviceHelper.getDataBufferBody(result.buffer);
                                                break;
                                        }
                                    }
                                    resolve(result);
                                }
                            }
                        } else {
                            ctx.logger.debug("Busy or Processing:", InnovaHelper.convertByteArrayToHexString(bytesData));
                            //reset and waiting for new result
                            result = null;
                        }
                    }
                },
                    error => {
                        ctx.logger.debug("Receive Data Failed:", error);
                        reject(error);
                    });
        });
    };

    public doStopDataListener(commandId: number = null):
        Promise<boolean> {
        let ctx = this;

        let process = new Promise<boolean>(function (resolve) {
            if (!ctx.connectedDevice) resolve(true);
            try {
                ctx.dataListening = false;
                ctx.ble.stopNotification(ctx.connectedDevice.id,
                    BLEEnum.ServiceUUID.Read,
                    BLEEnum.ServiceUUID.CharacteristicRead)
                    .then(
                        () => resolve(true),
                        error => {
                            resolve(true);
                        });
            } catch (error) {
                ctx.dataListening = false;
                resolve(true);
            }
        });

        return process;
    };
}
