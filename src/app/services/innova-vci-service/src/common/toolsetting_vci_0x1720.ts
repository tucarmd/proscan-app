// 'name': feature name
// 'enable':firmware and vci api supported if true, otherwise false
// 'Manufacturer': if Generic dont care Manufacturer, otherwise depending on Manufacturers in list

export const toolsetting_vci_0x1720=[
  {
    //Features belongs to OBD2 SID1,2,37,5,6,7,8,9
    'name':'OBD2',
    'enable':true,
    'Manufacturer':[
      'Generic',
    ]
  },
  {
    //Read / Erase DTC and Livedata for ABS system
    'name':'ABS',
    'enable':true,
    'Manufacturer':[
      'GM',
      'Ford',
      'Chrysler',
      'Honda',
      'Toyota',
      'Nissan',
      'Hyundai',
      'Kia',
      'BMW',
      'Volkswagen',
      'Audi',
      'Mercedes-Benz',
      'Volvo',
      'Mazda',
      'Subaru',
      'Jaguar Land Rover'
    ]
  },
  {
    //Read / Erase DTC and Livedata for SRS system
    'name':'SRS',
    'enable':true,
    'Manufacturer':[
      'GM',
      'Ford',
      'Chrysler',
      'Honda',
      'Toyota',
      'Nissan',
      'Hyundai',
      'Kia',
      'BMW',
      'Volkswagen',
      'Audi',
      'Mercedes-Benz',
      'Volvo',
      'Mazda',
      'Subaru',
      'Jaguar Land Rover'
    ]
  },
  {
    //Read / Erase DTC for ECM and TCM system
    'name':'Enhance',
    'enable':true,
    'Manufacturer':[
      'GM',
      'Ford',
      'Chrysler',
      'Honda',
      'Toyota',
      'Nissan',
      'Hyundai',
      'Kia',
      'BMW',
      'Volkswagen',
      'Audi',
      'Mercedes-Benz',
      'Volvo',
      'Mazda',
      'Subaru',
      'Jaguar Land Rover'
    ]
  },

  {
    //Battery Reset
    'name':'Battery Reset',
    'enable':true,
    'Manufacturer':[
      'BMW',
      'Chrysler',
      'Ford',
      'GM',
      'Honda',
      'Hyundai',
      'Mazda',
      'Kia',
      'Mercedes-Benz',
      'Nissan',
      'Toyota',
      'Volkswagen',
      'Volvo',
      'Audi'
    ]
  },

  {
    //Battery Reset
    'name':'Oil Reset',
    'enable':true,
    'Manufacturer':[
      'BMW',
      'Chrysler',
      'Ford',
      'GM',
      'Honda',
      'Hyundai',
      'Mazda',
      'Kia',
      'Mercedes-Benz',
      'Nissan',
      'Toyota',
      'Volkswagen',
      'Volvo',
      'Audi'
    ]
  },

  {
    //Reset the counter for battery change or Init information from the new battery
    'name':'Battery Initialization Function',
    'enable':true,
    'Manufacturer':[
      'Ford', 'BMW', 'Volvo', 'Volkswagen', 'Audi'
    ]
  },

  {
    //it support Open / Close for the brake pad and other functions
    'name':'Electric Pad Brake',
    'enable':true,
    'Manufacturer':[
      'GM', 'Ford', 'Chrysler', 'Toyota', 'Nissan', 'Hyundai', 'Kia', 'BMW', 'Volkswagen', 'Volvo'
    ]
  },

  {
    //it support reset steering angle
    'name':'Steering Angle Reset',
    'enable':true,
    'Manufacturer':[
      'BMW', 'Chrysler', 'Ford', 'GM', 'Honda', 'Hyundai', 'Kia', 'Nissan', 'Toyota', 'Volkswagen', 'Volvo', 'Audi'
    ]
  },

  {
    //It performs the air bleeding procedure step by step for ABS system.
    'name':'ABS Bleeding',
    'enable':true,
    'Manufacturer':[
      'BMW', 'Chrysler', 'GM', 'Hyundai', 'Kia', 'Toyota', 'Jaguar Land Rover', 'Volkswagen', 'Audi'
    ]
  },

  {
    //It performs diesel Particular Filtering Reset
    'name':'Diesl Particular Filtering Reset',
    'enable':false,
    'Manufacturer':[
      'GM', 'Chrysler', 'Hyundai', 'Mitsubishi', 'Volkswagen'
    ]
  },

  {
    //It performs Odometer
    'name':'Odometer',
    'enable':true,
    'Manufacturer':[
      'Generic',
    ]
  },
  {
    //It performs Service Check PIDs
    'name':'Sevice Check',
    'enable':true,
    'Manufacturer':[
      'Generic',
    ]
  },

  {
    //It performs Warning Light PID
    'name':'Warning Light',
    'enable':true,
    'Manufacturer':[
      'Generic',
    ]
  },

  {
    //It performs TPMS PID
    'name':'TPMS',
    'enable':true,
    'Manufacturer':[
      'Generic',
    ]
  },

  {
    'name':'Symptom Diagnostic',
    'enable':false,
    'Manufacturer':[
      'Generic',
    ]
  },

  {
    'name':'System Diagnostic',
    'enable':false,
    'Manufacturer':[
      'Generic',
    ]
  },

  {
    //Active the component / actuator in the powertrain system
    'name':'Actuator Test',
    'enable':true,
    'Manufacturer':[
      'GM', 'Ford', 'Chrysler', 'Toyota', 'Nissan', 'Hyundai', 'Kia', 'BMW',
      'Mercedes-Benz', 'Volkswagen', 'Audi','Mitsubishi', 'Volvo'
    ]
  },

  {
    //Reset / Calibration / Test the system / component in the powertrain system
    'name':'Special Test',
    'enable':true,
    'Manufacturer':[
      'GM', 'Ford', 'Chrysler', 'Toyota', 'Nissan', 'Honda', 'Hyundai', 'BMW',
      'Mercedes-Benz', 'Volkswagen', 'Audi', 'Subaru', 'Volvo'
    ]
  },

  {
    //Support read / erase Dtcs all systems
    'name':'Network Scan',
    'enable':true,
    'Manufacturer':[
      'GM', 'Ford', 'Chrysler', 'Toyota', 'Nissan', 'Honda', 'Hyundai', 'Kia', 'Mazda',
      'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Mitsubishi', 'Subaru', 'Mazda', 'Volvo',
      'Jaguar Land Rover'
    ]
  },

  {
    //Hybrid / EV battery health check (Reads Hybrid Battery Cells Voltage)
    'name':'Hybrid and Battery Health Check',
    'enable':true,
    'Manufacturer':[
      'Generic'
    ]
  },



]
