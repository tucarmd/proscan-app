import * as _ from 'lodash'
import * as DataUtils from './../utilities/dataParser'
import { ENUM_EVENTIDTYPES, ENUM_EVENTTYPEDATA } from './../standard/enums';

export function parserNotifyEvents(eventId, data) {
  try {
    const dataRet = []
    const parseEventData = (bytedatas, isUnsigned = true) => {
      try {
        return DataUtils.arrayToNumber(bytedatas, 4, false, isUnsigned) / 100
      } catch (errorexception) {
        return 0.0
      }
    }
    // let eventData = { data: undefined, unit: undefined, name: undefined, value: undefined }
    if (eventId === ENUM_EVENTIDTYPES.Engine_status) {
      dataRet.push(
        {
          eventId,
          value: data[0],
          name: ENUM_EVENTTYPEDATA.Ignition,
          data: `'${data[0] ? 'ON' : 'OFF'}`
        })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Battery_warning) {
      dataRet.push(
        {
          eventId,
          value: data[0],
          name: ENUM_EVENTTYPEDATA.Battery_Warning,
          data: `{${data[0] ? 'Low' : 'Normal'}}`
        })
      return dataRet

    }
    else if (eventId === ENUM_EVENTIDTYPES.Fuel_Economy) {
      let a = _.slice(data, 0, 4)
      a = parseEventData(a)

      dataRet.push(
        {
          eventId,
          value: a,
          name: ENUM_EVENTTYPEDATA.Current_Fuel_Consumption,
          data: `${a.toFixed(2)}`,
          unit: 'L/100Km',
        })
      a = _.slice(data, 4, 8)
      a = parseEventData(a)
      dataRet.push(
        {
          eventId,
          value: a,
          name: ENUM_EVENTTYPEDATA.Avarage_Fuel_Consumption,
          data: `${a.toFixed(2)}`,
          unit: 'L/100Km'
        })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Fuel_Economy__Other_0c) {
      //hh:mm:ss
      /*
      000024
      84030000
      00000000
      */
      const timeElapse = _.slice(data, 0, 3)//3
      const everageSpeed = _.slice(data, 3, 7)//4
      const distance = _.slice(data, 7, 11)//4

      // let listdata = _.chunk(timeElapse, 1)

      // listdata = listdata.map(t => {
      //   return DataUtils.arrayToNumber(t, 2, false)
      // })

      dataRet.push(
        {
          eventId,
          value: timeElapse,
          data: `${timeElapse[0].toString(16)}:${timeElapse[1].toString(16)}:${timeElapse[2].toString(16)}`,
          name: ENUM_EVENTTYPEDATA.Time_Elapse
        })

      dataRet.push(
        {
          eventId,
          value: everageSpeed,
          data: `${parseEventData(everageSpeed).toFixed(2)}`,
          name: ENUM_EVENTTYPEDATA.Average_Speed,
          unit: 'Km/h'
        })

      dataRet.push(
        {
          eventId,
          value: distance,
          data: `${parseEventData(distance).toFixed(2)}`,
          name: ENUM_EVENTTYPEDATA.Distance,
          unit: 'Km'
        })
      return dataRet;
    }
    else if (eventId === ENUM_EVENTIDTYPES.Fuel_Economy__Other_0d) {
      let a = _.slice(data, 0, 4)
      a = parseEventData(a)
      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Fuel_Usage,
        data: `${a.toFixed(2)}`,
        unit: 'L'
      })

      a = _.slice(data, 4, 8)
      a = parseEventData(a)
      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Fuel_Trip,
        data: `${a.toFixed(2)}`,
        unit: 'L/100Km',
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Fuel_Economy__Other_0e) {
      let a = _.slice(data, 0, 4)
      a = parseEventData(a)
      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Fuel_Rate,
        data: `${a.toFixed(2)}`,
        unit: 'L/h'
      })

      a = _.slice(data, 4, 8)
      a = parseEventData(a)
      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Distance_to_Empty,
        data: `${a.toFixed(2)}`,
        unit: 'Km',
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Fuel_Economy__Other_0f) {

      const fuelStatusParser = (xxx) => {

        if (xxx === 1) {
          return 'ECO';
        }

        if (xxx === 0) {
          return 'NON-ECO';
        }

        return 'Not Supported'
      }
      dataRet.push({
        eventId,
        value: data[0],
        name: ENUM_EVENTTYPEDATA.Current_Fuel_Consumption_Status,
        data: `${fuelStatusParser(data[0])}`
      })
      dataRet.push({
        eventId,
        value: data[1],
        name: ENUM_EVENTTYPEDATA.Average_Fuel_Consumption_Status,
        data: `${fuelStatusParser(data[1])}`
      })

      let a = _.slice(data, 2, 6)
      a = parseEventData(a)
      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Fuel_Tank_Size,
        data: `${a.toFixed(2)}`,
        unit: 'L'
      })

      a = _.slice(data, 6, 10)
      a = parseEventData(a)
      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Fuel_Volume_Remaining,
        data: `${a.toFixed(2)}`,
        unit: 'L',
      })
      return dataRet
    }

    else if (eventId === ENUM_EVENTIDTYPES.Acceleration) {
      let a = _.slice(data, 0, 4)
      a = parseEventData(a, false)

      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Acceleration,
        data: `${a.toFixed(2)}`,
        unit: 'm/s2'
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Cooling_water_temperature_high) {

      dataRet.push({
        eventId,
        value: data[0],
        name: ENUM_EVENTTYPEDATA.Cooling_Water_Temperature_High,
        data: `${data[0] ? 'High' : 'Normal'}`
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Battery_Health) {
      const getBatteryHealthStatus = (a) => {
        if (a === 0) { return 'GOOD' }
        if (a === 1) { return 'NORMAL' }
        if (a === 2) { return 'WARNING' }
        if (a === 3) { return 'BAD' }
        if (a === 4) { return 'NOT DETECT' }
        if (a === 4) { return 'LOW VOLTAGE' }
        return 'Unknow'

      }
      dataRet.push({
        eventId,
        value: data[0],
        name: ENUM_EVENTTYPEDATA.Battery_Health,
        data: getBatteryHealthStatus(data[0])
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Distance_Since_start) {
      // eventData.name :  'Distance Since Start'
      let a = _.slice(data, 0, 4)
      a = parseEventData(a)
      dataRet.push({
        eventId,
        value: a,
        data: `${a.toFixed(2)}`,
        unit: 'km',
        name: ENUM_EVENTTYPEDATA.Distance_Since_Start
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.OEMPidNotify) {

      const numberPid = data.shift()
      const listPids = _.chunk(data, 10)
      // const retPidVal = { data: null, raw: [{ pid: activePid, buff: null }] }
      const pidRetVal = []
      listPids.forEach(oemPiddata => {
        pidRetVal.push({
          pid: (oemPiddata[0] + (oemPiddata[1] << 8)),
          buff: oemPiddata.slice(2)
        })
      })
      dataRet.push({
        eventId,
        value: data,
        data: {
          data: null, raw: pidRetVal,
          unit: '',
          name: ENUM_EVENTTYPEDATA.OemPidData
        }
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Fuel_Level_Low) {
      dataRet.push({
        eventId,
        value: data[0],
        name: ENUM_EVENTTYPEDATA.Fuel_Level_Low,
        data: `${data[0] ? 'Low' : 'Normal'}`
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.Average_Speed) {
      // 1.1.toFixed(1)
      let a = _.slice(data, 0, 4)
      a = parseEventData(a)


      dataRet.push({
        eventId,
        value: a,
        name: ENUM_EVENTTYPEDATA.Average_Speed,
        data: `${a.toFixed(2)}`,
        unit: 'km/h'
      })
      return dataRet
    }
    else if (eventId === ENUM_EVENTIDTYPES.NetworkScan_Data) {
      data.pop()
      dataRet.push({
        eventId,
        value: data,
        name: ENUM_EVENTTYPEDATA.NetworkScan_Data
      })
      return dataRet
    }

    return [{
      eventId,
      value: data,
      name: ENUM_EVENTTYPEDATA.Event_Unknow,
      data: DataUtils.bytesToString(data)
    }]
  } catch (err) {
    console.log('parserNotifyEvents ERROR', err)
    return undefined
  }
}

