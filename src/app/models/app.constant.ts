/* eslint-disable @typescript-eslint/naming-convention */
export const AppConstants = {
  appBundleId: 'com.carmd.proscan2',
  loggerLocalStorageKey: 'com.carmd.proscan2.logs',
  contactUsUrl: 'https://carmd.com/support#contact-form',
  databaseFileName: 'proscan2.db',
} as const;

export const StorageKeys = {
  LAST_LOGIN_TIME: 'last_login_time',
  FIRST_RUN: 'first_run',
  ACCESS_KEY: 'accessKey',
  USER_INFO: 'userInfo',
  USER_ID: 'userId',
  USER_NAME: 'userName',
  USER_SETTINGS: 'userSettings',
  USER_INCOMPLETE_REPORTS_PREFIX_KEY: 'incompleteReports_',
  FIRMWARE_VERSION: 'firmware_version',
  REPORT_SESSION: 'report_session',
  DEVICE_LIST: 'devices',
  REPORT_DETAILS: 'Report_',
  CURRENT_APP_VERSION: 'app_version'
} as const;

export const OptionDescription = {
  Toyota: [
    {
      option: 'RADAR CRUISE',
      description:
        'This type of cruise control uses radar sensing behind the front emblem plus a multi-function camera mounted near the rear-view mirror.<br/>This allows for optimum speed and distance between vehicles. <br/><br/>This system is easily identified by looking at the front emblem. If it’s shiny and smooth plastic, this is a radar system.',
      image: null,
    },
    {
      option: 'w/ Smart Key',
      description:
        'A smart key uses a key fob for electronic authorization to access the vehicle. <br/><br/>This system is easily identified by a Push Button Start type ignition.',
      image: 'assets/img/vehicle_selection/p1.jpg',
    },
    {
      option: 'w/o Smart Key',
      description:
        'The key and key fob may be integrated or separated, but this system requires the key to manually start the engine.<br/><br/>This system is easily identified by a physical key used for the ignition.',
      image: 'assets/img/vehicle_selection/p2.jpg',
    },
    {
      option: 'LASER CRUISE',
      description:
        'This type of cruise control uses laser sensing in the lower area of the front bumper with a visible lens exposed. This allows for optimum speed, distance, and stop/go between vehicles.<br/><br/>This system is easily identified by looking at the front emblem. If it’s raised standard emblem and a lens is protruding from the lower bumper area, this is a laser system.',
      image: null,
    },
    {
      option: 'TMMK Product',
      description:
        '(TMMK) is an automobile manufacturing factory in Georgetown, Kentucky, United States. It is part of Toyota Motor North America, owned by Toyota Motor Corporation of Japan.<br/><br/>This information is easily found in the VIN Placard on the door jamb as MFD. BY: TOYOTA MOTOR MANUFACTURING, KENTUCKY, INC.',
      image: 'assets/img/vehicle_selection/p3.jpg',
    },
    {
      option: 'w/o VSC',
      description:
        'Vehicle Stability Control reduces the loss of vehicle control by monitoring steering and vehicle direction while driving.<br/><br/>This system is easily identified by a VSC button found on the dash or center console when turned off the light "VSC OFF"  illuminates on the instrument cluster.',
      image: 'assets/img/vehicle_selection/p4.jpg',
    },
    {
      option: 'w/ VSC',
      description:
        'Vehicle Stability Control reduces the loss of vehicle control by monitoring steering and vehicle direction while driving.<br/><br/>This system is easily identified by a VSC button found on the dash or center console when turned off the light "VSC OFF"  illuminates on the instrument cluster.',
      image: 'assets/img/vehicle_selection/p4.jpg',
    },
    {
      option: 'Automatic Transmission',
      description:
        'Automatic Transmission is a multi-speed transmission used in internal combustion engine-based motor vehicles that does not require any driver input to change forward gears under normal driving conditions.',
      image: 'assets/img/vehicle_selection/p5.jpg',
    },
    {
      option: 'Manual Transmission',
      description:
        'Manual Transmission car a vehicle that uses a stick shift and a clutch pedal to change gears',
      image: 'assets/img/vehicle_selection/p6.jpg',
    },
    {
      option: 'w/ KDSS',
      description:
        'KDSS stands for Kinetic Dynamic Suspension System and adjusts front and rear stabilizers based on a set of interconnected hydraulic cylinders.<br/><br/>This system can easily be identified when turning the ignition to the ON position a "KDSS" light will illuminate. If still unsure, check under the driver’s side of the vehicle for the accumulator assembly and piping. In addition, the front sway bar will have a canister with a boot attached on one side.',
      image: 'assets/img/vehicle_selection/p7.jpg',
    },
    {
      option: 'w/o KDSS',
      description:
        'KDSS stands for Kinetic Dynamic Suspension System and adjusts front and rear stabilizers based on a set of interconnected hydraulic cylinders.<br/><br/>This system can easily be identified when turning the ignition to the ON position a "KDSS" light will illuminate. If still unsure, check under the driver’s side of the vehicle for the accumulator assembly and piping. In addition, the front sway bar will have a canister with a boot attached on one side.',
      image: 'assets/img/vehicle_selection/p7.jpg',
    },
    {
      option: 'w/ EPB',
      description:
        'Electronic Parking Brake (EPB) is an electronically controlled parking brake, whereby the driver activates the holding mechanism with a button and the brake pads are electrically applied to the rear wheels.<br/><br/>This is easily identified by a lever assembly with "P" either on the dash or center console.',
      image: 'assets/img/vehicle_selection/p8.jpg',
    },
    {
      option: 'w/o EPB',
      description:
        'Electronic Parking Brake (EPB) is an electronically controlled parking brake, whereby the driver activates the holding mechanism with a button and the brake pads are electrically applied to the rear wheels.<br/><br/>This is easily identified by a lever assembly with "P" either on the dash or center console.',
      image: 'assets/img/vehicle_selection/p8.jpg',
    },
  ],
} as const;
