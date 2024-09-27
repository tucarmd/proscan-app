export const MANUFACTURE_MAKE_DEFINITION = [
  {
    Manufacturer: 'BMW',
    Make: 'BMW',
  },
  {
    Manufacturer: 'BMW',
    Make: 'Mini',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Alfa Romeo(FCA)',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Chrysler',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Dodge',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Eagle',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Fiat(FCA)',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Jeep',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Plymouth',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'Ram',
  },
  {
    Manufacturer: 'Chrysler',
    Make: 'SRT',
  },
  {
    Manufacturer: 'Ford',
    Make: 'Ford',
  },
  {
    Manufacturer: 'Ford',
    Make: 'Lincoln',
  },
  {
    Manufacturer: 'Ford',
    Make: 'Mercury',
  },
  {
    Manufacturer: 'GM',
    Make: 'Buick',
  },
  {
    Manufacturer: 'GM',
    Make: 'Cadillac',
  },
  {
    Manufacturer: 'GM',
    Make: 'Chevrolet',
  },
  {
    Manufacturer: 'GM',
    Make: 'Geo',
  },
  {
    Manufacturer: 'GM',
    Make: 'GMC',
  },
  {
    Manufacturer: 'GM',
    Make: 'Hummer',
  },
  {
    Manufacturer: 'GM',
    Make: 'Oldsmobile',
  },
  {
    Manufacturer: 'GM',
    Make: 'Pontiac',
  },
  {
    Manufacturer: 'GM',
    Make: 'Saab',
  },
  {
    Manufacturer: 'GM',
    Make: 'Saturn',
  },
  {
    Manufacturer: 'Honda',
    Make: 'Acura',
  },
  {
    Manufacturer: 'Honda',
    Make: 'Honda',
  },
  {
    Manufacturer: 'Honda',
    Make: 'Honda ',
  },
  {
    Manufacturer: 'Hyundai',
    Make: 'Hyundai',
  },
  {
    Manufacturer: 'Hyundai',
    Make: 'Kia',
  },
  {
    Manufacturer: 'Jaguar Land Rover',
    Make: 'Jaguar',
  },
  {
    Manufacturer: 'Jaguar Land Rover',
    Make: 'Land Rover',
  },
  {
    Manufacturer: 'Mazda',
    Make: 'Mazda',
  },
  {
    Manufacturer: 'Mercedes-Benz',
    Make: 'Mercedes-Benz',
  },
  {
    Manufacturer: 'Mercedes-Benz',
    Make: 'Smart',
  },
  {
    Manufacturer: 'Mitsubishi',
    Make: 'Mitsubishi',
  },
  {
    Manufacturer: 'Nissan',
    Make: 'Infiniti',
  },
  {
    Manufacturer: 'Nissan',
    Make: 'Nissan',
  },
  {
    Manufacturer: 'Subaru',
    Make: 'Subaru',
  },
  {
    Manufacturer: 'Toyota',
    Make: 'Lexus',
  },
  {
    Manufacturer: 'Toyota',
    Make: 'Scion',
  },
  {
    Manufacturer: 'Toyota',
    Make: 'Toyota',
  },
  {
    Manufacturer: 'Volkswagen',
    Make: 'Audi',
  },
  {
    Manufacturer: 'Volkswagen',
    Make: 'Volkswagen',
  },
  {
    Manufacturer: 'Volvo',
    Make: 'Volvo',
  },
];

export function getManufactureByMake(make: string) {
  make = (make || '').replace(/[^\w]/gi, '').toUpperCase();
  let manufacturer = MANUFACTURE_MAKE_DEFINITION.find(m => m.Make.replace(/[^\w]/gi, '').toUpperCase() === make);
  return manufacturer ? manufacturer.Manufacturer : '';
}

// https://codebeautify.org/xmltojson

export const MONITOR_DEFINITION = [
  // [shortName, enName, spName, frName ....]
  [
    'mis',
    'Misfire Monitor',
    'El monitor de fallo de encendido',
    'La sonde des ratés',
  ],
  [
    'fue',
    'Fuel System Monitor',
    'El monitor del sistema de combustible',
    'La sonde du système de carburation',
  ],
  [
    'ccm',
    'Comprehensive Component Monitor (CCM)',
    'El monitor general de componentes (CCM)',
    'La sonde globale des composants (SGC)',
  ],
  [
    'cat',
    'Catalyst Monitor',
    'Monitor del convertidor catalítico',
    'La sonde du convertisseur catalytique',
  ],
  [
    'hca',
    'Heated Catalyst Monitor',
    'Monitor del sistema EGR',
    "Sonde de catalyseur d'hydrocarbures non méthaniques",
  ],
  [
    'eva',
    'EVAP System Monitor',
    'Monitor del sistema EVAP',
    "La sonde du système d'évaporation (EVAP)",
  ],
  [
    'air',
    'Secondary Air System Monitor',
    'Monitor del sistema secundario de aire',
    "La sonde du système d'air secondaire",
  ],
  [
    'o2s',
    'Oxygen Sensor Monitor',
    'Monitor del sensor de oxígeno',
    "La sonde du détecteur d'oxygène",
  ],
  [
    'htr',
    'Oxygen Sensor Heater Monitor',
    'Monitor del calefactor del sensor de oxígeno',
  ],
  [
    'nox',
    'NOx Adsorber Monitor',
    'Monitor de adsorción NOx',
    "Sonde d'absorption de NOx",
  ],
  [
    'egs',
    'Exhaust Gas Sensor Monitor',
    'Monitor de sensor de gases de escape',
    "Sonde du capteur de gaz d'échappement",
  ],
  [
    'hcc',
    'NMHC Monitor',
    'Monitor NMHC',
    'La sonde du convertisseur catalytique chauffé',
  ],
  [
    'egr',
    'EGR System Monitor',
    'Monitor del sistema EGR',
    'La sonde du système de recirculation des gaz du carter («EGR»)',
  ],
  [
    'dpf',
    'PM Filter Monitor',
    'Monitor de filtro PM',
    'Sonde de filtre à particules',
  ],
  ['ect', 'Engine Coolant Temperature', 'Monitor de ECT', 'Sonde de ECT'],
  [
    'bps',
    'Boost Pressure System Monitor',
    'Monitor del sistema de presión de refuerzo',
    'Sonde du système de pression de suralimentation',
  ],
].map((item) => item.join('/').toUpperCase().split('/')); // UPPERCASE ALL

export const BRAKE_LIFE_DEFINITION_2021 = [
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'CHEVROLET',
    _PIDs: 'Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Low|OFF',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'BMW',
    _PIDs: 'Rear Brake Pad Check',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '50',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'BMW',
    _PIDs: 'Front Brake Pad Check',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '50',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'FORD',
    _PIDs: 'Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Low|OFF',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'AUDI',
    _PIDs: 'Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Inactive|Wear indicat.',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'LINCOLN',
    _PIDs: 'Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Low|OFF',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'MERCURY',
    _PIDs: 'Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Low|OFF',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'MERCEDES-BENZ',
    _PIDs: 'Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Off|Not OK|Not Present',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'MERCEDES-BENZ',
    _PIDs: 'Rear Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Off|Not OK|Not Present',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'MERCEDES-BENZ',
    _PIDs: 'Front Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Off|Not OK|Not Present',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Make: 'VOLKSWAGEN',
    _PIDs: 'Brake Pad Check',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Inactive|Wear indicat.',
    _ValueType: 'string',
  },
];

// Update since https://iectech.atlassian.net/browse/TABD-224
export const OIL_LIFE_DEFINITION_2021 = [
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'CHEVROLET',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '20',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'BMW',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '20',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'FORD',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '15',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'OTHERS',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '20',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'GM',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '20',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'LINCOLN',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '15',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'MAZDA',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '15',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'MERCEDES-BENZ',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '2',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'HONDA',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '15',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: '{0:00}%',
      },
      {
        applocation: 'Passed',
        appmessage: '{0:00}%',
      },
    ],
    _Make: 'ACURA',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: '15',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Poor',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good',
      },
    ],
    _Make: 'VOLKSWAGEN',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Poor|Poor oil quality',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Poor',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good',
      },
    ],
    _Make: 'AUDI',
    _PIDs: 'Oil Life Remaining',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Poor|Poor oil quality',
    _ValueType: 'string',
  },
];

// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
export const OIL_LEVEL_DEFINITION = [
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'XX %',
      },
      {
        applocation: 'Passed',
        appmessage: 'XX %',
      },
    ],
    _Manufacture: 'VOLVO',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: 'x<25 || x>57,,x>=35 && x<=57',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'OTHERS',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: '??,,OK|OFF|Not present|Not activate|Not Actived|Brake lining 1|Brake Pads Not Worn',
    _ValueType: 'int',
  }
];

// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
export const BRAKE_LIFE_DEFINITION = [
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'XX %',
      },
      {
        applocation: 'Passed',
        appmessage: 'XX %',
      },
    ],
    _Manufacture: 'BMW',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: 'x<50,,x>51',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'OTHERS',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Others,,OK|OFF|Not Set|Not present|Not activate|Not Actived|Not Activated|Brake lining 1|Brake Pads Not Worn',
    _ValueType: 'int',
  }
];

// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
export const OIL_LIFE_DEFINITION = [
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'XX %',
      },
      {
        applocation: 'Passed',
        appmessage: 'XX %',
      },
    ],
    _Manufacture: 'FORD|HONDA',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: 'x<15,,x>16',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'XX %',
      },
      {
        applocation: 'Passed',
        appmessage: 'XX %',
      },
    ],
    _Manufacture: 'BMW|GM|CHRYSLER|SUBARU',
    _Group: 'Group 1',
    _Operation: 'Comparison',
    _Condition: 'x<20,,x>21',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Poor',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good',
      },
    ],
    _Manufacture: 'FORD',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Low Oil,,OK',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Poor',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good',
      },
    ],
    _Manufacture: 'VOLKSWAGEN',
    _Group: 'Group 2',
    _Operation: 'Equality',
    _Condition: 'Poor|Poor oil quality,,Good|Good oil quality',
    _ValueType: 'string',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Poor',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good',
      },
    ],
    _Manufacture: 'VOLKSWAGEN',
    _Group: 'Group 3',
    _Operation: 'Comparison',
    _Condition: 'x<>1,,x==1',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Poor',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good',
      },
    ],
    _Manufacture: 'MERCEDES-BENZ',
    _Group: 'Group 3',
    _Operation: 'Comparison',
    _Condition: 'x<1 || x>4,,x>1 && x<4',
    _ValueType: 'int',
  },
];

// Defined by 'TelematicsDongle_PIDs_Specification (Jul292021).xlsx'
export const TRANSMISSION_FLUID_TEMPERATURE_DEFINITION = [
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'TOYOTA|SUBARU',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=212,,176<=x && x<=194',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'BMW|HONDA|ACURA',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=230,,x<230',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'GM',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>240,,x<240',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'FORD|LINCOLN|VOLKSWAGEN|AUDI',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=221,,176<=x && x<=203',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'HYUNDAI',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=221,,176<=x && x<=221',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'MERCURY',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=221,,176<=x && x<=194',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'MERCEDES-BENZ',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=248,,x<248',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'MAZDA',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=266,,x<266',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'VOLVO',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=194,,176<=x && x<=194',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'CHRYSLER',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=200,,x<=200',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'JAGUAR LAND ROVER',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=275,,176<=x && x<=221',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'NISSAN',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>=293,,x<293',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'MITSUBISHI',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>176,,58<=x && x<=176',
    _ValueType: 'int',
  },
  {
    ouput: [
      {
        applocation: 'Needs Attention',
        appmessage: 'Inspect',
      },
      {
        applocation: 'Passed',
        appmessage: 'Good Condition',
      },
    ],
    _Manufacture: 'MITSUBISHI',
    _PIDs: 'Transmission Fluid Temperature',
    _Group: 'Group 2',
    _Operation: 'Comparison',
    _Condition: 'x>161,,143<=x && x<=161',
    _Unit: 'COUNT',
    _ValueType: 'int',
  },
];

export const TIRE_PRESSURES_DEFINITION = [
  {
    _Pid: '1',
    _Name: 'left front tire pressure',
    _ThresholdName: 'left front tire pressure threshold',
    _StandardName: 'left front tire pressure standard',
    _StatusName: 'left front tire pressure status',
    _OtherName: 'tire 1 pressure',
    _OtherThresholdName: 'tire 1 pressure threshold',
    _OtherStandardName: 'tire 1 pressure standard',
    _OtherStatusName: 'tire 1 pressure status',
  },
  {
    _Pid: '2',
    _Name: 'left rear tire pressure',
    _ThresholdName: 'left rear tire pressure threshold',
    _StandardName: 'left rear tire pressure standard',
    _StatusName: 'left rear tire pressure status',
    _OtherName: 'tire 2 pressure',
    _OtherThresholdName: 'tire 2 pressure threshold',
    _OtherStandardName: 'tire 2 pressure standard',
    _OtherStatusName: 'tire 2 pressure status',
  },
  {
    _Pid: '3',
    _Name: 'right front tire pressure',
    _ThresholdName: 'right front tire pressure threshold',
    _StandardName: 'right front tire pressure standard',
    _StatusName: 'right front tire pressure status',
    _OtherName: 'tire 3 pressure',
    _OtherThresholdName: 'tire 3 pressure threshold',
    _OtherStandardName: 'tire 3 pressure standard',
    _OtherStatusName: 'tire 3 pressure status',
  },
  {
    _Pid: '4',
    _Name: 'right rear tire pressure',
    _ThresholdName: 'right rear tire pressure threshold',
    _StandardName: 'right rear tire pressure standard',
    _StatusName: 'right rear tire pressure status',
    _OtherName: 'tire 4 pressure',
    _OtherThresholdName: 'tire 4 pressure threshold',
    _OtherStandardName: 'tire 4 pressure standard',
    _OtherStatusName: 'tire 4 pressure status',
  },
  {
    _Pid: '5',
    _Name: 'spare tire pressure',
    _ThresholdName: 'spare tire pressure threshold',
    _StandardName: 'spare tire pressure standard',
    _StatusName: 'spare tire pressure status',
    _OtherName: 'tire 5 pressure',
    _OtherThresholdName: 'tire 5 pressure threshold',
    _OtherStandardName: 'tire 5 pressure standard',
    _OtherStatusName: 'tire 5 pressure status',
  },
];
