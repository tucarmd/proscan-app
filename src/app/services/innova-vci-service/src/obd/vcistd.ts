/**
 * @Author: quocdo-macbook
 * @Date:   2020-12-21T08:20:18+07:00
 * @Last modified by:   quocdo-macbook
 * @Last modified time: 2022-03-01T11:39:56+07:00
 */



export const EnumVCIProcStates = {
  0x11: 'Proc Error',
  0xaa: 'Proc Normal',
  0x22: 'Proc Busy',
  0xbb: 'Proc Not supported',
  0xff: 'Proc General Fail',
};

export const EnumSeverityText = {
  0x00: "Not Severity",
  0x01: "Low",
  0x02: "Medium",
  0x03: "High"
};

export const VCIProg = {
  systemdata: 1 /*related with system data*/,

  tool: 2 /*related tool */,

  obd2: 3 /*start obd2 link*/,

  oem: 4 /*return system , subsystem , group*/,

  read_report: 5,

  ofm: 6,

  enable_jsonfmt: 7 /*ThuyetHN:added for json format*/,
  disable_jsonfmt: 8 /*ThuyetHN:added for json format*/,

  enable_jsonfmt_def: 9/*ThuyetHN:added for json format def*/,
  disable_jsonfmt_def: 10 /*ThuyetHN:added for json format def*/,
  livedata: 11,
  symptom: 100,
  gui: 200,
  ymme: 300,
  unsolicited_msg: 65000,
  keepalive_obd2: 65533,
  keepalive_oem: 65534,
  max: 65535,
};

export const VCICmd_Unsolicited_msg = {
  msg_cancel: 1,
  msg_gui_ack: 2,
  msg_max: 255
};

export const VCICmd_BT_setting = {
  get_bt_name: 0x20,
  set_bt_name: 0x21,
}

export const VCICmd_obd2 = {
  start_Query: 0, //report list protocol query
  Link_To_Prot_N: 1, //Link to Protocol x
  monitoricon: 2,
  ReadVin: 3,
  Read_Dtc: 4,
  freezeframe: 5,
  Erase_Dtc: 6,
  Read_all: 7,

  pid: 8 /*
  arg 1 : 0 , get supported
  arg 1 : 1 , get pid data , arg 2 : pid id
  return size + pid val if successful
  */,
  ReadService9: 9,
  ReadService5: 15,
  ReadService6: 16,
  ReadService8: 18,
  GetLedStatus: 0x20,
  SetSmogCheckState: 0x21,
  GetSmogCheckState: 0x22,
  SetSmogCheckCountry: 0x23,
  GetSmogCheckCountry: 0x24,
  SetFuelType: 0x25,
  GetFuelType: 0x26,
  SetVehType: 0x27,
  GetVehType: 0x28,
  getymmeprofile: 0xfd,
  GetReport: 0xfe,
  Max: 255,
};

export const enumEVAPStatus = {
  eEVAPSTATE_NONE: 0,

  eEVAPSTATE_NO_SUP: 1,
  eEVAPSTATE_SUP_OK: 2,
  eEVAPSTATE_RES_NEG: 3,//Negative Response
  eEVAPSTATE_RES_NO: 4,//No Response

  eEVAPSTATE_MAX: 0xFF
}

export const VCICmd_obd2_reporttype = {
  report_full: 0, //report list protocol query
  report_sid1: 1, //Link to Protocol x
  report_sid2: 2,
  report_sid3: 3,
  report_sid4: 4,
  report_sid5: 5,
  report_sid6: 6,
  report_sid7: 7,

  report_sid8: 8,
  report_sid9: 9,
  report_sid10: 10,
  report_sid37A: 11,
  report_mil_stat: 16,
  report_drivecycle_mon_list: 0x11,
  report_drivecycle_mon_text: 0x12,
  report_sid6_tids: 0x13,
  report_sid6_comp_ids: 0x14,
  report_vehicle_data_ymme_profile: 0x21,
  report_mon_stat: 0x31,
  report_ff_info: 0x32,
  report_ff_ld: 0x33,
  report_dtcs: 0x34,
  report_dtc_def: 0x35,
  report_vin: 0x36,
  report_ymme: 0x37,
  report_vehicle_info: 0x39,
  report_TDC_monitor: 0x41,
  report_RPM_VSS: 0xCD,
  Max: 255,
};

export const VCICmd_nwscan = {
  start: 0, //get system and subsystem
  getsystem: 1,
  getsubsystem: 2,
  listoemprofileid_old: 3 /*[number system 1byte]{<System id><number subsystem><SubSystem>}*/,
  querysystem: 4,
  readdtsystem: 5,
  erasedtcsystem: 6,
  exitsystem: 7,
  getdataofsyste: 8,
  readdtcgroup: 9,
  scan_all: 10,
  quick_readsystem: 105,
  quick_readgroup: 106,
  listoemprofileid: 203,
  report_dtc_system: 205,
  get_dtc_def: 206,
  get_dtc_listinspec: 207,
  max: 0xff,
};

export const VCICmd_system = {
  getversion: 1,
  getymme: 2,
  setymme: 3,
  setvin: 4,
  resettool: 0xfe,
};

export const VCICmd_YMME = {
  init: 1,
  get: 2,
  confirm: 3,
}

export const VCICmd_ofm = {
  getsupport_item: 0,
  read_item: 1,
  stream_cfg: 2,
  max: 0xff,
};

export const VCI_ofm_group = {
  ofm_group_none: 0,
  ofm_group_odo: 1,
  ofm_group_srv_check: 2,
  ofm_group_warninglight: 3,
  ofm_group_tpms: 4,
  ofm_group_max: 255
}

export const VCICmd_livedata = {
  read_itemlist: 0,
  read_itemval: 1,
  read_list_item_val: 2,
  set_system_subsystem: 3,
  start_hybrid_ld: 4,
  read_item_info: 5,
  set_record_dtc_trigger: 8,
  reset_record_dtc_trigger: 9,
  check_getnumpid_group: 0x14,
  get_listiteminfo: 0x15,
  get_listitemval: 0x16,
  get_itemval_v2: 0x17,
  max: 0xff

}

export const VCICmd_symptom = {
  symptom_init: 0,
  symptom_getui: 1,
  symptom_setselection: 2,
  symptom_max: 255
}

export const VCI_symptom_getui = {
  symptom_get_title: 0,
  symptom_get_body: 1,
  symptom_get_optionlist: 2,
  symptom_get_softkey: 3,
  symptom_getui_max: 255
}

export const VCI_symptom_selection_type = {
  symptom_normal_selection: 0,
  symtom_softkey_selection: 1
}

export const VCI_symptom_softkey_type = {
  symptom_left_softkey: 0,
  symptom_right_softkey: 1
}

export const Enum_Nws_Link_Status = {
  1: 'Not Support',
  2: 'Success',
  3: 'Fail',
  4: 'Special Ford test',
  5: 'Special Honda test',
  6: 'Fail Input Data',
  7: 'Fail User Event',
  8: 'Need Retry OEM Cable',
  9: 'Need Recycle Ignition Key',
}

export const EnumInnovaGroups = {
  1: 'OBDII',
  2: 'ABS',
  4: 'SRS',
  8: 'TCM',
  16: 'PCM',
  32: 'ODBI',
  64: 'TPMS',
  128: 'ADAS',
  255: 'All',
}

export const EnumInspectionGroups = {
  1: 'Headlight',
  2: 'Taillight',
  3: 'Turn Indicator Light',
  4: 'Stop Light',
  5: 'Foot Brake',
  6: 'Emergency/Parking Brake',
  7: 'Windshield Wiper',
  8: 'Steering',
  9: 'Window',
  10: 'Seat Adjustment',
  11: 'Door',
  12: 'Horn',
  13: 'Odometer',
  14: 'Bumper And Body Condition',
  15: 'Muffler And Exhaust System',
  16: 'Tire',
  17: 'Mirror',
  18: 'Safety Belts',
  254: 'Ispection Group',
  255: 'Unknown'
}

export const Enum_ofm_Items = {
  0: 'Unknow',
  1: 'Fuel Sys 1',
  2: 'Fuel Sys 2',
  3: 'Calc Load',
  4: 'ECT',
  5: 'STFT B1',
  6: 'STFT B3',
  7: 'LTFT B1',
  8: 'LTFT B3',
  9: 'STFT B2',
  10: 'STFT B4',
  11: 'LTFT B2',
  12: 'LTFT B4',
  13: 'Fuel Pres',
  14: 'MAP',
  15: 'Eng RPM',
  16: 'Veh Speed',
  17: 'Spark Adv',
  18: 'IAT',
  19: 'MAF',
  20: 'TPS',
  21: 'Air Status',
  22: 'O2SLoc',
  23: 'O2S B1 S1',
  24: 'STFT B1 S1',
  25: 'O2S B1 S2',
  26: 'STFT B1 S2',
  27: 'O2S B1 S3',
  28: 'O2S B2 S1',
  29: 'STFT B1 S3',
  30: 'STFT B2 S1',
  31: 'O2S B1 S4',
  32: 'O2S B2 S2',
  33: 'STFT B1 S4',
  34: 'STFT B2 S2',
  35: 'O2S B3 S1',
  36: 'STFT B3 S1',
  37: 'O2S B3 S2',
  38: 'STFT B3 S2',
  39: 'O2S B2 S3',
  40: 'O2S B4 S1',
  41: 'STFT B2 S3',
  42: 'STFT B4 S1',
  43: 'O2S B2 S4',
  44: 'O2S B4 S2',
  45: 'STFT B2 S4',
  46: 'STFT B4 S2',
  47: 'OBDSup',
  48: 'Aux Input Status',
  49: 'Run Time',
  50: 'MIL Dis',
  51: 'LAMBDA B1 S1',
  52: 'LAMBDA B1 S2',
  53: 'LAMBDA B1 S3',
  54: 'LAMBDA B2 S1',
  55: 'LAMBDA B1 S4',
  56: 'LAMBDA B2 S2',
  57: 'LAMBDA B3 S1',
  58: 'LAMBDA B3 S2',
  59: 'LAMBDA B2 S3',
  60: 'LAMBDA B4 S1',
  61: 'LAMBDA B2 S4',
  62: 'LAMBDA B4 S2',
  63: 'Command EGR',
  64: 'EGR Error',
  65: 'Command EVAP',
  66: 'Fuel Level',
  67: 'Warm-up DTC Clr',
  68: 'Clr Dist',
  69: 'EVAP_VP',
  70: 'BARO',
  71: 'CAT Te 11',
  72: 'CAT Te 21',
  73: 'CAT Te 12',
  74: 'CAT Te 22',
  75: 'ECU Volts',
  76: 'LOAD Value',
  77: 'EQ Ratio',
  78: 'Rel TPS',
  79: 'Ambient',
  80: 'TPS B',
  81: 'TPS C',
  82: 'ACC Pedal D',
  83: 'ACC Pedal E',
  84: 'ACC Pedal F',
  85: 'Command TAC',
  86: 'MIL Time',
  87: 'Clr Time',
  88: 'FUEL_TYP',
  89: 'ALCH_PCT',
  90: 'EVAP_VPA',
  91: 'STSO2FT1',
  92: 'STSO2FT3',
  93: 'LGSO2FT1',
  94: 'LGSO2FT3',
  95: 'STSO2FT2',
  96: 'STSO2FT4',
  97: 'LGSO2FT2',
  98: 'LGSO2FT4',
  99: 'APP_R',
  100: 'BAT_PWR',
  101: 'EOT',
  102: 'FUEL_TIMING',
  103: 'FUEL_RATE',
  104: 'EMIS_SUP',
  105: 'TQ_DD',
  106: 'TQ_ACT',
  107: 'TQ_REF',
  108: 'TQ_MAX1',
  109: 'TQ_MAX2',
  110: 'TQ_MAX3',
  111: 'TQ_MAX4',
  112: 'TQ_MAX5',
  113: 'N/D_STAT',
  114: 'N/G_STAT',
  115: 'GPL_STAT',
  116: 'MAFA',
  117: 'MAFB',
  118: 'ECT 1',
  119: 'ECT 2',
  120: 'IAT 11',
  121: 'IAT 12',
  122: 'IAT 13',
  123: 'IAT 21',
  124: 'IAT 22',
  125: 'IAT 23',
  126: 'EGR_A_CMD',
  127: 'EGR_A_ACT',
  128: 'EGR_A_ERR',
  129: 'EGR_B_CMD',
  130: 'EGR_B_ACT',
  131: 'EGR_B_ERR',
  132: 'IAF_A_CMD',
  133: 'IAF_A_REL',
  134: 'IAF_B_CMD',
  135: 'IAF_B_REL',
  136: 'EGRTA',
  137: 'EGRTB',
  138: 'EGRTD',
  139: 'TAC_A_CMD',
  140: 'TP_A_REL',
  141: 'TAC_B_CMD',
  142: 'TP_B_REL',
  143: 'FRP_A_CMD',
  144: 'FRP_A',
  145: 'FRT_A',
  146: 'FRP_B_CMD',
  147: 'FRP_B',
  148: 'FRT_B',
  149: 'ICP_A_CMD',
  150: 'ICP_A',
  151: 'ICP_B_CMD',
  152: 'ICP_B',
  153: 'TCA_CINP',
  154: 'TCB_CINP',
  155: 'BP_A_CMD',
  156: 'BP_A_ACT',
  157: 'BP_B_CMD',
  158: 'BP_B_ACT',
  159: 'BP_A',
  160: 'BP_B',
  161: 'VGT_A_CMD',
  162: 'VGT_A_ACT',
  163: 'VGT_B_CMD',
  164: 'VGT_B_ACT',
  165: 'VGT_A',
  166: 'VGT_B',
  167: 'WG_A_CMD',
  168: 'WG_A_ACT',
  169: 'WG_ B_CMD',
  170: 'WG_B_ACT',
  171: 'EP_1',
  172: 'EP_2',
  173: 'TCA_RPM',
  174: 'TCB_RPM',
  175: 'TCA_CINT',
  176: 'TCA_COUTT',
  177: 'TCA_TINT',
  178: 'TCA_TOUTT',
  179: 'TCB_CINT',
  180: 'TCB_COUTT',
  181: 'TCB_TINT',
  182: 'TCB_TOUTT',
  183: 'CACT 11',
  184: 'CACT 12',
  185: 'CACT 21',
  186: 'CACT 22',
  187: 'EGT11',
  188: 'EGT12',
  189: 'EGT13',
  190: 'EGT14',
  191: 'EGT21',
  192: 'EGT22',
  193: 'EGT23',
  194: 'EGT24',
  195: 'DPF1_DP',
  196: 'DPF1_INP',
  197: 'DPF1_OUTP',
  198: 'DPF2_DP',
  199: 'DPF2_INP',
  200: 'DPF2_OUTP',
  201: 'DPF1_INT',
  202: 'DPF1_OUTT',
  203: 'DPF2_INT',
  204: 'DPF2_OUTT',
  205: 'NNTE',
  206: 'PNTE',
  207: 'RUN_TIME',
  208: 'IDLE_TIME',
  209: 'PTO_TIME',
  210: 'AECD1_TIME1',
  211: 'AECD1_TIME2',
  212: 'AECD2_TIME1',
  213: 'AECD2_TIME2',
  214: 'AECD3_TIME1',
  215: 'AECD3_TIME2',
  216: 'AECD4_TIME1',
  217: 'AECD4_TIME2',
  218: 'AECD5_TIME1',
  219: 'AECD5_TIME2',
  220: 'AECD6_TIME1',
  221: 'AECD6_TIME2',
  222: 'AECD7_TIME1',
  223: 'AECD7_TIME2',
  224: 'AECD8_TIME1',
  225: 'AECD8_TIME2',
  226: 'AECD9_TIME1',
  227: 'AECD9_TIME2',
  228: 'AECD10_TIME1',
  229: 'AECD10_TIME2',
  230: 'NOX11',
  231: 'NOX12',
  232: 'NOX21',
  233: 'NOX22',
  234: 'MST',
  235: 'REAG_RATE',
  236: 'REAG_DEMD',
  237: 'REAG_LVL',
  238: 'NWI_TIME',
  239: 'PM11',
  240: 'PM21',
  241: 'MAP_A',
  242: 'MAP_B',
  243: 'SCR_INDUCE_SYSTEM',
  244: 'SCR_INDUCE_SYSTEM_HIST1',
  245: 'SCR_INDUCE_SYSTEM_HIST2',
  246: 'SCR_INDUCE_SYSTEM_HIST3',
  247: 'SCR_INDUCE_SYSTEM_HIST4',
  248: 'SCR_IND_DIST_1N',
  249: 'SCR_IND_DIST_1D',
  250: 'SCR_IND_DIST_2N',
  251: 'SCR_IND_DIST_3N',
  252: 'SCR_IND_DIST_4N',
  253: 'AECD11_TIME1',
  254: 'AECD11_TIME2',
  255: 'AECD12_TIME1',
  256: 'AECD12_TIME2',
  257: 'AECD13_TIME1',
  258: 'AECD13_TIME2',
  259: 'AECD14_TIME1',
  260: 'AECD14_TIME2',
  261: 'AECD15_TIME1',
  262: 'AECD15_TIME2',
  263: 'AECD16_TIME1',
  264: 'AECD16_TIME2',
  265: 'AECD17_TIME1',
  266: 'AECD17_TIME2',
  267: 'AECD18_TIME1',
  268: 'AECD18_TIME2',
  269: 'AECD19_TIME1',
  270: 'AECD19_TIME2',
  271: 'AECD20_TIME1',
  272: 'AECD20_TIME2',
  273: 'DPF_REGEN',
  274: 'NOX_ADS_REGEN',
  275: 'NOX_ADS_DESULF',
  276: 'DPF_REGEN_PCT',
  277: 'DPF_REGEN_AVGT',
  278: 'DPF_REGEN_AVGD',
  279: 'O2S11_PCT',
  280: 'O2S12_PCT',
  281: 'O2S21_PCT',
  282: 'O2S22_PCT',
  283: 'TP_G',
  284: 'TQ_FR',
  285: 'PM11_ACTIVE',
  286: 'PM11_REGEN',
  287: 'PM21_ACTIVE',
  288: 'PM21_REGEN',
  289: 'MI_DISP_VOBD',
  290: 'MI_MODE_VOBD',
  291: 'VOBD_RDY',
  292: 'VOBD_MI_TIME',
  293: 'MI_MODE_ECU',
  294: 'OBD_MI_TIME',
  295: 'OBD_B1_TIME',
  296: 'FP1',
  297: 'FIQ1',
  298: 'FIT1',
  299: 'IFB1',
  300: 'FP2',
  301: 'FIQ2',
  302: 'FIT2',
  303: 'IFB2',
  304: 'MI_TIME_CUM',
  305: 'NOX_WARN_ACT',
  306: 'INDUC_L1',
  307: 'INDUC_L2',
  308: 'INDUC_L3',
  309: 'REAG_QUAL_TIME',
  310: 'REAG_CON_TIME',
  311: 'REAG_DOSE_TIME',
  312: 'EGR_TIME',
  313: 'NOX_DTC_TIME',
  314: 'EGT15',
  315: 'EGT16',
  316: 'EGT17',
  317: 'EGT18',
  318: 'EGT25',
  319: 'EGT26',
  320: 'EGT27',
  321: 'EGT28',
  322: 'O2S13_PCT',
  323: 'O2S14_PCT',
  324: 'O2S23_PCT',
  325: 'O2S24_PCT',
  326: 'ENG_FUEL_RATE',
  327: 'VEH_FUEL_RATE',
  328: 'EXH_RATE',
  329: 'FUELSYSA_B1',
  330: 'FUELSYSB_B1',
  331: 'FUELSYSA_B2',
  332: 'FUELSYSB_B2',
  333: 'FUELSYSA_B3',
  334: 'FUELSYSB_B3',
  335: 'FUELSYSA_B4',
  336: 'FUELSYSB_B4',
  337: 'NOXC11',
  338: 'NOXC12',
  339: 'NOXC21',
  340: 'NOXC22',
  341: 'CYL_RATE',
  342: 'HEV_MODE',
  343: 'HEV_BATT_V',
  344: 'HEV_BATT_A',
  345: 'DEF Type',
  346: 'DEF_CON',
  347: 'DEF_T',
  348: 'DEF_LVL',
  349: 'GEAR_RCMD',
  350: 'Current Fuel Consumption',
  351: 'Average Fuel Consumption',
  352: 'Elapsed Time',
  353: 'Distance (Miles)',
  354: 'Fuel Used',
  355: 'Average Speed',
  1024: 'Coolant Hot Light',
  1025: 'Cruise Control Status',
  1026: 'Fuel Level(milliliters)',
  1027: 'Odometer',
  1028: 'Oil Pressure Lamp',
  1029: 'Seatbelt Fastened',
  1030: 'Service Interval Distance (distance still next service)',
  1031: 'Service Interval Day (time still next service)',
  1032: 'Turn Signal Status',
  1033: 'Brake Switch Status',
  1034: 'Parking Brake Indicator Light',
  1035: 'ABS Dash Indicator',
  1036: 'Airbag Dash Indicator',
  1037: 'Fuel Usage',
  1038: 'Fuel Level(%)',
  1039: 'Maintenance Required',
  1040: 'Transmission Gear',
  1041: 'Turn Left Signal Status',
  1042: 'Turn Right Signal Status',
  65535: 'Max',
  1043: 'Calculated Odometer',
  1044: 'Fuel Trip',
  1045: 'Derived Engine State',
  1046: 'Service Interval_Remain Distance',
  1047: 'Airbag DTC',
  1048: 'ABS DTC',
  1049: 'Brake Pad Check',
  1050: 'Brake Pedal Switch Status',
  1051: 'Harsh Braking',
  1052: 'Harsh Accelerate',
  1053: 'Oil Life Remaining',
  1054: 'Engine Run time (Hours)',
  1055: 'Change Oil Lamp',
  1056: 'Engine Oil Temp',
  1057: 'Service Interval_Remain Time',
  1058: 'Driver Door Status',
  1059: 'Passenger Door Status',
  1060: 'Rear Brake Pad Check',
  1061: 'Front Brake Pad Check',
  1062: 'Calculated Fuel Usage',
  1063: 'Low Tire Pressure',
  1064: 'A/C System Refrigerant Monitor',
  1065: 'Ambient Air Temperature',
  1066: 'Tire Pressure (Actual Tire Pressure)',
  1067: 'Transmission Fluid Temperature',
  1068: 'Charging system status',
  1069: 'Trip Distance',
  1070: 'OEM DTC',
  1071: 'Left Front Tire Pressure',
  1072: 'Left Rear Tire Pressure',
  1073: 'Right Front Tire Pressure',
  1074: 'Right Rear Tire Pressure',
  1075: 'Brake Fluid Level',
  1076: 'Brake Fluid Pressure',
  1077: 'Brake Fluid Temperature',
  1078: 'Brake Disc Temperature',
  1079: 'Engine Oil Level',
  1080: 'Engine Oil Pressure',
  1081: 'Door Lock',
  1082: 'Door Unlock',
  1083: 'Starter Disable',
  1084: 'Starter Enable',
  1085: 'Remote Start',
  1086: 'Horn Honk On',
  1087: 'Horn Honk Off',
  1088: 'Light Flashing On',
  1089: 'Light Flashing Off',
  1090: 'Service Interval',
  1091: 'ABS Active Lamp',
  1092: 'Fuel Rate',
  1093: 'Coolant Level Switch',
  1094: 'MIL Status',
  1095: 'Tire 1 Position',
  1096: 'Tire 2 Position',
  1097: 'Tire 3 Position',
  1098: 'Tire 4 Position',
  1099: 'Left Front Tire Pressure Status',
  1100: 'Left Rear Tire Pressure Status',
  1101: 'Right Front Tire Pressure Status',
  1102: 'Right Rear Tire Pressure Status',
  1103: 'Spare Tire Pressure',
  1104: 'Tire 1 Pressure',
  1105: 'Tire 2 Pressure',
  1106: 'Tire 3 Pressure',
  1107: 'Tire 4 Pressure',
  1108: 'Tire 1 Pressure Threshold',
  1109: 'Tire 2 Pressure Threshold',
  1110: 'Tire 3 Pressure Threshold',
  1111: 'Tire 4 Pressure Threshold',
  1112: 'Tire 5 Pressure Threshold',
  1113: 'Tire 5 Position',
  1114: 'Tire 5 Pressure',
  1115: 'Left Front Tire Pressure Threshold',
  1116: 'Right Front Tire Pressure Threshold',
  1117: 'Right Rear Tire Pressure Threshold',
  1118: 'Left Rear Tire Pressure Threshold',
  1119: 'Spare Tire Pressure Threshold',
  1120: 'Spare Tire Pressure Status',
  1121: 'Tire Pressure Threshold',
  1122: 'Tire 1 Pressure Status',
  1123: 'Tire 2 Pressure Status',
  1124: 'Tire 3 Pressure Status',
  1125: 'Tire 4 Pressure Status',
  1126: 'Engine Oil Temperature',
  1127: 'Transmission Oil Temperature',
  1128: 'Day Since Last Oil Change',
  1129: 'Distance Since Last Oil Change',
  1130: 'Service Interval Distance (distance since last oil change)',
  1131: 'Engine Coolant Level',
  1132: 'TPMS warning light',
  1133: 'Left Front Sensor Battery',
  1134: 'Left Rear Sensor Battery',
  1135: 'Right Front Sensor Battery',
  1136: 'Right Rear Sensor Battery',
  1137: 'Spare Tire Sensor Battery',
  1138: 'Tire 1 Sensor Battery',
  1139: 'Tire 2 Sensor Battery',
  1140: 'Tire 3 Sensor Battery',
  1141: 'Tire 4 Sensor Battery',
  1142: 'Tire 5 Sensor Battery',
  1143: 'Tire Pressure Monitoring System Status',
  1144: 'Tire Pressure Status',
  1145: 'Tire 5 Pressure Status',
  1146: 'Front Tire Pressure Threshold',
  1147: 'Rear Tire Pressure Threshold',
  1148: 'Fuel Level Volume',
  1149: 'Service Interval Day (time since last oil change)',
  1150: 'Steering Angle Sensor',
  1151: 'Crash Event Occurred',
  1152: 'Airbag deployment status',
  1153: 'Crash Detection',
  1154: 'Battery Voltage',
  1155: 'Engine Coolant Temp',
  1156: 'Engine Speed',
  1157: 'Throttle Position',
  1158: 'Vehicle Speed',
  1159: 'Oil Level',
  1160: 'ECU Part Number',
  1161: 'Software Part Number',
  1162: 'Pedestrian Airbag Trigger Status',
  1163: 'Fuel Level (%)',
  1164: 'Brake Light Switch',
  1165: 'Actual gear',
  1166: 'Left Front Tire Pressure Standard',
  1167: 'Right Front Tire Pressure Standard',
  1168: 'Left Rear Tire Pressure Standard',
  1169: 'Right Rear Tire Pressure Standard',
  1170: 'Spare Tire Pressure Standard',
  1171: 'Tire 1 Pressure Standard',
  1172: 'Tire 2 Pressure Standard',
  1173: 'Tire 3 Pressure Standard',
  1174: 'Tire 4 Pressure Standard',
  1175: 'Tire 5 Pressure Standard',
}
export const VCICmd_tool = {
  getecuvoltage: 1,
  setting_unit: 2,
  setting_language: 3,
};

export const UNIT_ID = {
  Standard: 0,
  Metric: 1
}

export const GUI_LANGUAGE_ID = {
  GUI_LANG_ENGLISH: 0,
  GUI_LANG_SPANISH: 1,
  GUI_LANG_FRENCH: 2
}

export const SF_FunctionGroup = {
  UNKNOWN: 0,
  Diesel_Injector_Coding: 1,
  Diesel_Particulate_Filter_Reset: 2,
  Reset_Electric_Traction_System: 3,
  Throttle_Body_Relearn: 4,
  Throttle_Body_Relearn_OBD: 5,
  Throttle_Body_Relearn_Procedure: 6,
  TPMS_Relearn_OBD: 7,
  Transmission_Reset_Adaptation: 8,
  Idle_Speed_Relearn: 9,
  Injector_Coding: 10,
  Idle_Speed_Relearn_OBD: 11,
  Idle_Speed_Relearn_Procedure: 12,
  Transmission_Fluid_Level_Check: 13,
  Transmission_Reset: 14,
  Headlamp_Calibration: 15,
  Seat_Occupied_Calibration: 16,
  Maintenance_Reset: 17,
  Window_Door_Roof_Reset: 18,
  Suspension_Calibration: 19,
  Tire_Size_Reset: 20,
  ABS_Bleeding: 21,
};

export const VCICmd_GUI = {
  gui_proc_enter: 0,
  gui_proc_leave: 1,
  gui_proc_terminate: 2,
  gui_set_key: 20,
  gui_set_key_with_index: 21,
  gui_set_param: 30,
  gui_lcd_display: 40,
  gui_set_special_function_group: 50,
  gui_host_ack: 60,
  gui_set_special_at_module: 70,//set system subsystem
  gui_max: 255
};

export const VCI_Data_Logging = {
  EN_NO_LOG: 0x00,
  EN_OBDII: 0x01,
  EN_ECM: 0x02,
  EN_TCM: 0x03,
  EN_ABS: 0x04,
  EN_SRS: 0x05,
  EN_TPMS: 0x06,
  EN_Allsystems: 0x07,
  EN_ABSLD: 0x08,
  EN_SRSLD: 0x09,
  EN_TCMLD: 0x0A,
  EN_TPMSLD: 0x0B,
  EN_ECMAT: 0x0C,
  EN_ECMSF: 0x0D,
  EN_OilReset: 0x0E,
  EN_BatteryReset: 0x0F,
  EN_SAScalibration: 0x10,
  EN_EPBreset: 0x11,
  EN_TPMSRelearn: 0x12,
  EN_ThrottleBodyRelearn: 0x13,
  EN_ElectricTractionSystemReset: 0x14,
  EN_DPFReset: 0x15,
  EN_MaintenanceReset: 0x16,
  EN_Tiresizereset: 0x17,
  EN_SuspensionCalibration: 0x18,
  EN_HeadlampCalibration: 0x19,
  EN_WindowDoorRoofReset: 0x1A,
  EN_SeatOccupiedCalibration: 0x1B,
  EN_ABSBleeding: 0x1C,
  EN_TransmissionReset: 0x1D,
  EN_TransmissionFluidChangeReset: 0x1E,
  EN_TransmissionFluidLevelCheck: 0x1F,
  EN_InjectorCoding: 0x20,
  EN_All: 0xFF,
}

export const VCI_GUI_Param_Type = {
  param_selection: 0,
  param_input: 1
}

export const SYS_PROC_ID = {
  /*==========================================================================
                    FIXED AREA DECLARE - DO NOT CHANGE
    ==========================================================================*/
  PROC_NONE: 0,

  PROC_CURRENT: 1,
  PROC_PREVIOUS: 2,

  PROC_TOOL_INIT: 3,

  /*==========================================================================
                  USER UI PROCESSES - ADD MORE FROM HERE
  ==========================================================================*/
  PROC_SERVICE_RESET: 10,
  PROC_BATTERY_HEALTH_CHECK: 28,
  PROC_BATTERY_ALTERNATOR_HEALTH_CHECK: 29,

  PROC_OIL_RESET: 45,
  PROC_OEM_BAT_RESET: 46,
  PROC_OILRESETSF: 47,
  PROC_OILRESETSF_LINKING: 48,

  /*-------- Active Test -----------*/
  PROC_ACTIVE_TEST: 15000,
  PROC_AT_LINKING: 15001,
  PROC_AT_LD: 15002,
  PROC_AT_LIST_FUNCTION: 15003,


  /*-------- Special Function -----------*/
  PROC_SPECIAL_FUNCTION: 15004,
  PROC_SF_LINKING: 15005,
  /*2016Nov07 SiT added for Battery reset with Special Function flow*/
  PROC_BAT_LINKING: 15006,
  PROC_OEM_BAT_RESET_SF: 15007,

  /*-------- System And Actual Test -----------*/
  PROC_SYSTEM_AND_ACTUAL_TEST: 15008,

  /*-------- Steering Angle Sensor-------------*/
  PROC_SAS_LINKING: 15009,
  PROC_SAS_CALIBRATION: 15010,

  /*-------- EPB-------------*/
  PROC_EPB_LINKING: 15011,
  PROC_EPB: 15012,
  PROC_TPMS_RESET_MENU: 15013,
  PROC_TPMS_PROCEDURE: 15014,
  PROC_DPF_RESET: 15015,
  PROC_DPF_RESET_SF: 15016,

  /* Diagnostic Routine */
  PROC_DIAGNOSTIC_ROUTINE: 15017,
  PROC_DIAGNOSTIC_ROUTINE_LINKING: 15018,
  /* Service Check */
  // PROC_SERVICE_CHECK                  ,
  // PROC_HYBRID_BATT_CHECK              ,
  //
  //
  // PROC_SETUP_WIFI_APP     ,

  /*==========================================================================
          END OF USER UI PROCESSes
  ==========================================================================*/
  PROC_ID_MAX: 0xFFFF,
}

export const SYS_CMD_ID = {
  /*==========================================================================
                    FIXED AREA DECLARE - DO NOT CHANGE
    ==========================================================================*/
  CMD_NONE: 0,
  /*------- BASIC COMMANDs -------------*/
  CMD_CURRENT: 1,
  CMD_PREVIOUS: 2,
  CMD_INIT_PROC: 3,
  CMD_END_PROC: 4,
  CMD_EXIT: 5,
  CMD_DISP: 6,
  CMD_WAITING: 7,



  //#warning do not declare command lager than 1000 here
  /*==========================================================================
              END OF USER UI COMMANDs
  ==========================================================================*/
  CMD_ID_MAX: 0xFFFF
}

export const GUI_KEY_CODE =
{
  GUI_KEY_NONE: 0,
  GUI_KEY_ERASE: (1 << 0),
  GUI_KEY_ENTER: (1 << 1),
  GUI_KEY_UP: (1 << 2),
  GUI_KEY_DOWN: (1 << 3),
  GUI_KEY_POWER_LINK: (1 << 4),
  GUI_KEY_DTC: (1 << 5),
  GUI_KEY_MENU: (1 << 6),
  GUI_KEY_FF: (1 << 7),
  GUI_KEY_LD: (1 << 8),
  GUI_KEY_SYSTEM: (1 << 9),
  GUI_SOFTKEY_1: (1 << 10),/*2016June30 SiT added*/
  GUI_SOFTKEY_2: (1 << 11),
  GUI_SOFTKEY_3: (1 << 12),
  GUI_KEY_RESERVED_13: (1 << 13),
  GUI_KEY_RESERVED_14: (1 << 14),
  GUI_KEY_RESERVED_15: (1 << 15),

  GUI_KEY_ALL: (0xFFFF)
};

export const enumSmogCheckLoc =
{
  Arizona: 0x01,
  California: 0x02,
  Colorado: 0x03,
  Connecticut: 0x04,
  DC: 0x05,
  Delaware: 0x06,
  Georgia: 0x07,
  Idaho: 0x08,
  Illinois: 0x09,
  Indiana: 0x0A,
  Louisiana: 0x0B,
  Maine: 0x0C,
  Maryland: 0x0D,
  Massachusetts: 0x0E,
  Missouri: 0x0F,
  Nevada: 0x10,
  NewHampshire: 0x11,
  NewJersey: 0x12,
  NewMexico: 0x13,
  NewYork: 0x14,
  NorthCarolina: 0x15,
  Ohio: 0x16,
  Oregon: 0x17,
  Pennsylvania: 0x18,
  RhodeIsland: 0x19,
  Tennessee: 0x1A,
  Texas: 0x1B,
  Utah: 0x1C,
  Vermont: 0x1D,
  Virginia: 0x1E,
  Wisconsin: 0x1F,
  NoIMProg: 0x20,

  // eSmogCheckLoc_NONE: 0,
  // eSmogCheckLoc_California_CARB: 1,
  // eSmogCheckLoc_Wisconsin: 2,
  // eSmogCheckLoc_NewYork: 3,
  // eSmogCheckLoc_Oregon: 4,
  // eSmogCheckLoc_Idaho: 5,
  // eSmogCheckLoc_Utah: 6,
  // eSmogCheckLoc_Missouri: 7,
  // eSmogCheckLoc_Indiana: 8,
  // eSmogCheckLoc_Massachusetts: 9,
  // eSmogCheckLoc_Others_With_IM_Prog: 0xFE,
  // eSmogCheckLoc_No_IM_Prog: 0xFF
};

export const enumSmogCheckLocCountry = {
  Cache: 0x01,
  Davis: 0x02,
  SaltLake: 0x03,
  Utah: 0x04,
  Weber: 0x05,
  Ada: 0x06,
  Canyon: 0x07,
  NoProgram: 0x08,
};

export const enumFuelType =
{
  eFuelType_UNKNOWN: 0,
  eFuelType_GAS: 1,
  eFuelType_DIESEL: 2,
  eFuelType_MAX_255: 0xFF,
};


export const ICOMMANDS = {
  xxx:
  {
    id: 0xE3,
    group: 'Firmware',
    description: 'Goto Firmware Screen',
  },
  getVehicleData:
  {
    id: 0x01,
    description: 'Get Vehicle Data buffer(ID=01)'
  },
  getFreezeFrameData:
  {
    id: 0x03,
    description: 'Get FreezeFrame Data(ID=03)',
    timeout: 0.3 * 60 * 1000
  },
  getDtcs:
  {
    id: 0x3F,
    description: 'Get DTC(ID=3F)',
    timeout: 0.3 * 60 * 1000
  },
  getVIN:
  {
    id: 0x40,
    description: 'Get Vehicle Identification Number(ID=40)',
    timeout: 2000//0.5 * 60 * 1000
  },
  getSupportedPIDs:
  {
    id: 0x41,
    description: 'Get supported PID list for OBD2 LD(ID=41)',
    format: 'bytes'
  },
  registerPIDs:
  {
    id: 0x42,
    description:
      `Register PID list for polling(ID=42)
    Time(2 byte), Enable/Disable(1 byte), PID1 (1 byte)`,
    input: { length: 16 },
    timeout: 0.3 * 60 * 1000
  },
  unregisterPIDs:
  {
    id: 0x43,
    description: 'Unregister All Configured PID'
  },
  poll:
  {
    id: 0x44,
    description: 'Start/Stop Bus Poll(ID=44)',
    options: [
      { text: 'Start Poll', value: [1] },
      { text: 'Stop Poll', value: [0] }
    ]
  },
  readRegisteredPIDs:
  {
    id: 0x45,
    description: 'Read Result of Registered PID(ID=45)'
  },
  stream:
  {
    id: 0x46,
    description: 'Start/Stop Stream PID Result(ID=46)',
    options: [
      { text: 'Start Streaming', value: [1] },
      { text: 'Stop Streaming', value: [0] }
    ]
  },
  clearVehicleDiscovery:
  {
    id: 0x47,
    description: 'Clear Vehicle Discovery Info(ID=47)'
  },
  startVehicleDiscovery:
  {
    id: 0x48,
    description: 'Start Vehicle Discovery(ID=48)',
    timeout: 2 * 60 * 1000
  },
  setResponseFormat:
  {
    id: 0x49,
    description: 'Set Raw/Readable response(ID=49)',
    options: [
      { text: 'Use Raw', value: [0] },
      { text: 'Use JSON', value: [1] }
    ],
    timeout: 1000
  },
  LogData:
  {
    id: 0x5A,
    description: 'Data Logging(ID=5A)',
    setfuncid:
    {
      id: 0x01,
      description: 'Set Log Function(ID=01)',
      options: [
        { text: 'NO_LOG', value: VCI_Data_Logging.EN_NO_LOG },
        { text: 'OBD II', value: VCI_Data_Logging.EN_OBDII },
        { text: 'ECM', value: VCI_Data_Logging.EN_ECM },
        { text: 'TCM', value: VCI_Data_Logging.EN_TCM },
        { text: 'ABS', value: VCI_Data_Logging.EN_ABS },
        { text: 'SRS', value: VCI_Data_Logging.EN_SRS },
        { text: 'TPMS', value: VCI_Data_Logging.EN_TPMS },
        { text: 'All systems', value: VCI_Data_Logging.EN_Allsystems },
        { text: 'ABS LD', value: VCI_Data_Logging.EN_ABSLD },
        { text: 'SRS LD', value: VCI_Data_Logging.EN_SRSLD },
        { text: 'TCM LD', value: VCI_Data_Logging.EN_TCMLD },
        { text: 'TPMS LD', value: VCI_Data_Logging.EN_TPMSLD },
        { text: 'ECM AT', value: VCI_Data_Logging.EN_ECMAT },
        { text: 'ECM SF', value: VCI_Data_Logging.EN_ECMSF },
        { text: 'Oil Reset', value: VCI_Data_Logging.EN_OilReset },
        { text: 'Battery Reset', value: VCI_Data_Logging.EN_BatteryReset },
        { text: 'SAS calibration', value: VCI_Data_Logging.EN_SAScalibration },
        { text: 'EPB reset', value: VCI_Data_Logging.EN_EPBreset },
        { text: 'TPMS Relearn', value: VCI_Data_Logging.EN_TPMSRelearn },
        { text: 'Throttle Body Relearn', value: VCI_Data_Logging.EN_ThrottleBodyRelearn },
        { text: 'Electric Traction System Reset', value: VCI_Data_Logging.EN_ElectricTractionSystemReset },
        { text: 'DPF Reset', value: VCI_Data_Logging.EN_DPFReset },
        { text: 'Maintenance Reset', value: VCI_Data_Logging.EN_MaintenanceReset },
        { text: 'Tire size reset', value: VCI_Data_Logging.EN_Tiresizereset },
        { text: 'Suspension Calibration', value: VCI_Data_Logging.EN_SuspensionCalibration },
        { text: 'Headlamp Calibration', value: VCI_Data_Logging.EN_HeadlampCalibration },
        { text: 'Window Door Roof Reset', value: VCI_Data_Logging.EN_WindowDoorRoofReset },
        { text: 'Seat Occupied Calibration', value: VCI_Data_Logging.EN_SeatOccupiedCalibration },
        { text: 'ABS Bleeding', value: VCI_Data_Logging.EN_ABSBleeding },
        { text: 'Transmission Reset', value: VCI_Data_Logging.EN_TransmissionReset },
        { text: 'Transmission Fluid Change Reset', value: VCI_Data_Logging.EN_TransmissionFluidChangeReset },
        { text: 'Transmission Fluid Level Check', value: VCI_Data_Logging.EN_TransmissionFluidLevelCheck },
        { text: 'Injector Coding', value: VCI_Data_Logging.EN_InjectorCoding },
        { text: 'Enable All', value: VCI_Data_Logging.EN_All },
        //{text: 'ECM LiveData', value: [VCI_Data_Logging.EN]},
      ]
    },
    startlog: {
      id: 0x02,
      description: 'Begin Log(ID=02)',
      options: []
    },
    stoplog: {
      id: 0x03,
      description: 'Stop Log(ID=03)',
      options: []
    },
    getlog: {
      id: 0x04,
      description: 'Get Log(ID=04)',
      options: []
    },
    getlog_encrypt: {
      id: 0x05,
      description: 'Get Log Encrypt(ID=05)',
      options: []
    },
    timeout: 1000
  },
  getIMReadiness:
  {
    id: 0x4b,
    description: 'Get IM Readiness(ID=4b)'
  },
  getToolSettings:
  {
    id: 0xE1,
    description: 'Get Tool Setting(ID=E1)',
    timeout: 1000
  },
  eraseFirmwareAndJumpToBootloader:
  {
    id: 0xE2,
    description: 'Erase FW/BL then jump to boot loader/FW(ID=E2)'
  },
  upgradeFirmware: {
    id: 0xE3,
    description: 'Upgrade FW/BL data package(IE=E3)'
  },
  reboot:
  {
    id: 0xE4,
    description: 'Reboot Dongle Hardware(ID=E4)'
  },
  getGuid:
  {
    id: 0xE5,
    description: 'Get Device GUID(ID=E5)'
  },
  setGuid:
  {
    id: 0xE6,
    description: 'Set Device GUID(ID=E6)',
    dataLength: 2,
    input: { length: 16 }
  },
  getUsbProductId:
  {
    id: 0xE7,
    description: 'Get Device USB PID(ID=E7)',
    retries: 3,
    timeout: 1000
  },
  getOEMSupportedPIDs:
  {
    id: 0x61,
    timeout: 1 * 60 * 1000,
    retries: 3,
    description: 'Get OEM supported PID list (ID=61)'
  },
  getOEMPIDData:
  {
    id: 0x62,
    description: 'Get OEM Pid data (ID=62)'
  },
  getOEMBuffer:
  {
    id: 0x70,
    description: 'Get OEM Buffer (ID=70)'
  },
  getOEMDTC:
  {
    id: 0x71,
    description: 'Get OEM DTC (ID=71)'
  },
  eraseOEMDTC:
  {
    id: 0x72,
    description: 'Erase OEM DTC'
  },
  registerOEMPIDs:
  {
    id: 0x73,
    description:
      `Register OEM PID list for polling(ID=73)
    Time(2 byte), Enable/Disable(1 byte), PID1 (1 byte)`,
    input: { length: 16 },
    timeout: 0.3 * 60 * 1000
  },
  unregisterOEMPIDs:
  {
    id: 0x74,
    description: 'Unregister All Configured OEM PID(ID=74)'
  },
  streamOEM:
  {
    id: 0x75,
    description: 'Start/Stop OEM Live Data Stream(ID=75)',
    options: [
      { text: 'Start Streaming', value: [1] },
      { text: 'Stop Streaming', value: [0] }
    ]
  },
  batteryHealthCheck:
  {
    id: 0x80,
    description: 'Battery health check(ID=80)',
    timeout: 60 * 1000
  },

  // for BLE tool
  getVehicleV5Data:
  {
    id: 0x80,
    retries: 3,
    description: 'Get Vehicle Data buffer V5(ID=80)'
  },
  registerNotifyEvents:
  {
    id: 0xCE,
    retries: 1,
    description: 'Register Notify Events'
  },
  getStoredVehicles:
  {
    id: 0x81,
    description: 'Get vehicle data information (ID=81)'
  },
  selectVehicle:
  {
    id: 0x82,
    description: 'Select vehicle data buffer (ID=82)'
  },
  batteryCheck:
  {
    id: 0x3C,
    description: 'Battery Check(ID=0x3C)',
    timeout: 1000
  },
};

export const USBHIDCommand_64 =
{
  eVEHICLE_DATA_YMME_PROFILE: { MaxNumBuff: 1, cmd: 1, desc: 'Vehicle YMME profile data' },
  eVEHICLE_DATA_OBD2_LD_SID1_BUFF: { MaxNumBuff: 2, cmd: 11, desc: ' OBD2 Sid$01 data buffer	                (2 buffers for ECM and TCM)' },
  eVEHICLE_DATA_OBD2_FF_SID2_BUFF: { MaxNumBuff: 2, cmd: 12, desc: ' OBD2 FreezeFrame Sid$02 data buffer	    (2 buffers for ECM and TCM)' },
  eVEHICLE_DATA_OBD2_DTC_SID37A_BUFF: { MaxNumBuff: 2, cmd: 13, desc: ' OBD2 DTCs buffer Sid$03, Sid$07, Sid$0A	(2 buffers for ECM and TCM)' },
  eVEHICLE_DATA_OBD2_SPECIALTEST_SID568_BUFF: { MaxNumBuff: 1, cmd: 14, desc: ' OBD2 Sid$05, Sid$06, Sid$08               (just 1 buffer)' },
  eVEHICLE_DATA_OBD2_SPECIALTEST_SID5_BUFF: { MaxNumBuff: 1, cmd: 145, desc: ' OBD2 Sid$05               (just 1 buffer)' },
  eVEHICLE_DATA_OBD2_SPECIALTEST_SID6_BUFF: { MaxNumBuff: 1, cmd: 146, desc: ' OBD2 Sid$06               (just 1 buffer)' },
  eVEHICLE_DATA_OBD2_SPECIALTEST_SID8_BUFF: { MaxNumBuff: 1, cmd: 148, desc: ' OBD2 Sid$08               (just 1 buffer)' },
  eVEHICLE_DATA_OBD2_VEHINFO_SID9_BUFF: { MaxNumBuff: 2, cmd: 15, desc: ' OBD2 Sid$09                               (2 buffers for ECM and TCM)' },
  eVEHICLE_DATA_OBD2_RECORED_LD_BUFF: { MaxNumBuff: 1, cmd: 16, desc: ' OBD2 Recorded Live Data data' },
  eVEHICLE_DATA_OEM_MODULE_BUFF: { MaxNumBuff: 100, cmd: 51, desc: ' OEM modules DTC (includes Module Info)    (Currently we have 100 buffers)' },
  eVEHICLE_DATA_OBD2_FF_SID2_BUFF_RAW: { MaxNumBuff: 2, cmd: 0x70, desc: ' OBD2 FreezeFrame Sid$02 raw data buffer	    (2 buffers for ECM and TCM)' },
}


export const FreezeFrameDataTypes = {
  DTC_INFO: 1,
  LD_HEADER: 2,
  LD_ITEM_NAME_STRING: 3,
  LD_ITEM_UNIT_STRING: 4,
  LD_ITEM_VALUE_STRING: 5,
};

export const Metrics = {
  USA: 0,
  METRIC: 1,
};

export const TransferStatus = {
  TRANSFERRING: 0xbb,
  COMPLETED: 0xaa,
  VALID: 0xaa,
};

export const Languages = {
  ENGLISH: 1,
  SPANISH: 2,
  FRENCH: 3,
};


//todo

export const VehicleDataTypes = {
  YMME_PROFILE: 1,
  OBD2_LD_SID1_BUFF: 11,
  OBD2_FF_SID2_BUFF: 12,
  OBD2_DTC_SID37A_BUFF: 13,
  OBD2_SPECIALTEST_SID568_BUFF: 14,
  OBD2_VEHINFO_SID9_BUFF: 15,
  OBD2_RECORED_LD_BUFF: 16,
  OEM_MODULE_BUFF: 51,
};

export const BufferSegmentTypes = {
  VERSION: 0,
  VIN_PROFILE: 1,
  MONITOR_ICON: 2,
  FREEZE_FRAME: 3,
  DTC: 4,
  SPECIAL_TEST: 5,
  VEHICLE_INFO: 6,
  LIVE_DATA: 7,
  OEM_DATA: 8,
};
