"use strict";
import _ from 'lodash'
// _.chunk()
exports.__esModule = true;
var EnumNotify;
(function (EnumNotify) {
    EnumNotify["NOTIFY_OBD2_QUERY_INFO"] = "NOTIFY_OBD2_QUERY_INFO";
    EnumNotify["NOTIFY_DEBUG_LOG"] = "NOTIFY DEBUG LOG";
    EnumNotify["NOTIFY_DEBUG_LOG_COM_TX"] = "DEBUG TX";
    EnumNotify["NOTIFY_DEBUG_LOG_COM_RX"] = "DEBUG RX";
    EnumNotify["NOTIFY_VCI_DATA_RESPONSE"] = "VCI DATA RESPONSE";
})(EnumNotify = exports.EnumNotify || (exports.EnumNotify = {}));
;
;
exports.enumDataFrameType = {
    unknowFrame: 0,
    RespFrameACK: 1,
    ReqFrameACK: 2,
    NotifyFrame: 3,
    DataFrame: 4,
    BusyFrame: 5,
    StreamFrame: 6
};
exports.ENUM_NOTIFY_EVENTS = {
    UNKNOW: 0,
    IGNITION_ON_OFF: 1,
    BATTERY_WARNING: 2,
    FUEL_ECONOMY: 4,
    ACCELERATION: 8,
    COOLING_WATER_TEMPERATURE_HIGH: 0x10,
    DISTANCE_SINCE_START: 0x20,
    FUEL_LEVEL_LOW: 0x40,
    AVERAGE_SPEED: 0x80
};
exports.ENUM_EVENTIDTYPES = {
    Engine_status: 0x04,
    Battery_warning: 0x05,
    Fuel_Economy: 0x06,
    Acceleration: 0x07,
    Cooling_water_temperature_high: 0x08,
    Distance_Since_start: 0x09,
    Fuel_Level_Low: 0x0a,
    Average_Speed: 0x0b,
    Fuel_Economy__Other_0c: 0x0c,
    Fuel_Economy__Other_0d: 0x0d,
    Fuel_Economy__Other_0e: 0x0e,
    Fuel_Economy__Other_0f: 0x0f,
    NetworkScan_Data: 0x11,
    Battery_Health: 0x20,
    OEMPidNotify: 0xfe
};
exports.ENUM_EVENTTYPEDATA = {
    Ignition: 'Ignition',
    Battery_Warning: 'Battery Warning',
    Current_Fuel_Consumption: 'Current Fuel Consumption',
    Avarage_Fuel_Consumption: 'Avarage Fuel Consumption',
    Time_Elapse: 'Time Elapse',
    Average_Speed: 'Average Speed',
    Distance: 'Distance',
    Fuel_Usage: 'Fuel Usage',
    Fuel_Trip: 'Fuel Trip',
    Fuel_Rate: 'Fuel Rate',
    Distance_to_Empty: 'Distance to Empty',
    Acceleration: 'Acceleration',
    Cooling_Water_Temperature_High: 'Cooling Water Temperature High',
    Distance_Since_Start: 'Distance Since Start',
    Fuel_Level_Low: 'Fuel Level Low',
    // Average_Speed: 'Average Speed',
    Current_Fuel_Consumption_Status: 'Current Fuel Consumption Status',
    Average_Fuel_Consumption_Status: 'Average  Fuel Consumption Status',
    Fuel_Tank_Size: 'Fuel Tank Size',
    Fuel_Volume_Remaining: 'Fuel Volume Remaining',
    NetworkScan_Data: 'Network Scan Data',
    Battery_Health: 'Battery Health',
    OemPidData: 'Oem Pid Data',
    Event_Unknow: 'Event Unknow'
};
