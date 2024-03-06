import { FrecuencyMultiplierFactor } from "./frecuency";
import { GeoPoint, defaultPoints } from "./geographic";

export interface Antenna {
    name: string;
    txAntennaGain: number;
    frecuency: number[];
    maxDistanceKm: string;
    imgPath: string;
    checked: boolean;
    antennaChannels: string[];
    antennaModulations: string[];
    rxSensitivityCombinations: RxSensitivity[];
    rxSensitivitySelected: RxSensitivity;
    antennaModulationSelected: string;
    antennaChannelSelected: string;
}

export interface RxSensitivity {
  rxSensitivity: number;
  antennaChannel: string;
  antennaModulation: string;
}

export interface AntennaSelected {
    frecuency: number;
    frecuencyMultiplyFactor: FrecuencyMultiplierFactor;
    name: string;
    txPower: number;
    txAntennaGain: number;
    txLoss: number;
    freeSpaceLoss: number;
    miscLoss: number;
    rxAntennaGain: number;
    rxLoss: number;
    rxSensitivity: number;
    antennaModulation: string;
    antennaChannel: string;
}

export const defaultAntenna: AntennaSelected = {
    frecuency: 0,
    frecuencyMultiplyFactor: FrecuencyMultiplierFactor.GHZ,
    name: "Antena por defecto",
    txPower: 0,
    txAntennaGain: 0,
    txLoss: 0,
    freeSpaceLoss: 0,
    miscLoss: 0,
    rxAntennaGain: 0,
    rxLoss: 0,
    rxSensitivity: 0,
    antennaModulation: "",
    antennaChannel: ""
}

export interface LinkSettings {
    P1: GeoPoint;
    P2: GeoPoint;
    antennaOneHeight: number;
    antennaTwoHeight: number;
    atmosphericPressure: number;
    temperature: number;
    waterDensity: number;
    antennaSelected: AntennaSelected;
    linkName: string;
    selected: boolean;
    kFactor: number;
}

export const defaultLinkSettings: LinkSettings = {
    P1: defaultPoints,
    P2: defaultPoints,
    antennaOneHeight: 0,
    antennaTwoHeight: 0,
    atmosphericPressure: 0,
    temperature: 0,
    waterDensity: 0,
    antennaSelected: defaultAntenna,
    linkName: "Mi primer enlace",
    selected: true,
    kFactor: 1.33,
}

// This is the data to the Cambium network 670 antenna
// To develop more faster, but i should finish the put of the data
// To the remaining antennas

export const antennaRxSensitivityCambiumNetwork670 = {
  antennaChannel: "5 MHz",
  antennaModulation: "BPSK 0.63 Single",
  rxSensitivity: -96.8
}

export const antennaRxDefaultSensitivity = {
  antennaChannel: "",
  antennaModulation: "",
  rxSensitivity: 0
}

export const antennaChannelsCambiumNetwork670 = [
  "5 MHz",
  "10 MHz",
  "15 MHz",
  "20 MHz",
  "30 MHz",
  "40 MHz",
  "45 MHz"
]

export const antennaModulationsCambiumNetwork670 = [
  "BPSK 0.63 Single",
  "QPSK 0.63 Single",
  "QPSK 0.87 Dual",
  "16QAM 0.63 Single",
  "16QAM 0.63 Dual",
  "16QAM 0.87 Single",
  "16QAM 0.87 Dual",
  "64QAM 0.75 Single",
  "64QAM 0.75 Dual",
  "64QAM 0.92 Single",
  "64QAM 0.92 Dual",
  "256QAM 0.81 Single",
  "256QAM 0.81 Dual"
]

export const rxSensitivityCombinationsCambiumNetwork670 = [
  // BPSK 0.63 Single
  {
    antennaChannel: "5 MHz",
    antennaModulation: "BPSK 0.63 Single",
    rxSensitivity: -96.8
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "BPSK 0.63 Single",
    rxSensitivity: -94.8
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "BPSK 0.63 Single",
    rxSensitivity: -93.0
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "BPSK 0.63 Single",
    rxSensitivity: -91.8
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "BPSK 0.63 Single",
    rxSensitivity: -90.0
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "BPSK 0.63 Single",
    rxSensitivity: -88.8
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "BPSK 0.63 Single",
    rxSensitivity: -88.3
  },

  // QPSK 0.63 Single
  
  {
    antennaChannel: "5 MHz",
    antennaModulation: "QPSK 0.63 Single",
    rxSensitivity: -93.7
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "QPSK 0.63 Single",
    rxSensitivity: -91.7
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "QPSK 0.63 Single",
    rxSensitivity: -89.9
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "QPSK 0.63 Single",
    rxSensitivity: -88.7
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "QPSK 0.63 Single",
    rxSensitivity: -86.9
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "QPSK 0.63 Single",
    rxSensitivity: -85.7
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "QPSK 0.63 Single",
    rxSensitivity: -85.2
  },

  // QPSK 0.87 Dual

  {
    antennaChannel: "5 MHz",
    antennaModulation: "QPSK 0.87 Dual",
    rxSensitivity: -89.7
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "QPSK 0.87 Dual",
    rxSensitivity: -87.7
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "QPSK 0.87 Dual",
    rxSensitivity: -85.9
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "QPSK 0.87 Dual",
    rxSensitivity: -84.7
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "QPSK 0.87 Dual",
    rxSensitivity: -82.9
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "QPSK 0.87 Dual",
    rxSensitivity: -81.7
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "QPSK 0.87 Dual",
    rxSensitivity: -81.1
  },

  // 16QAM 0.63 Single

  {
    antennaChannel: "5 MHz",
    antennaModulation: "16QAM 0.63 Single",
    rxSensitivity: -87.4
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "16QAM 0.63 Single",
    rxSensitivity: -85.4
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "16QAM 0.63 Single",
    rxSensitivity: -83.6
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "16QAM 0.63 Single",
    rxSensitivity: -82.3
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "16QAM 0.63 Single",
    rxSensitivity: -80.6
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "16QAM 0.63 Single",
    rxSensitivity: -79.3
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "16QAM 0.63 Single",
    rxSensitivity: -78.8
  },

  // 16QAM 0.63 Dual

  {
    antennaChannel: "5 MHz",
    antennaModulation: "16QAM 0.63 Dual",
    rxSensitivity: -83.4
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "16QAM 0.63 Dual",
    rxSensitivity: -81.4
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "16QAM 0.63 Dual",
    rxSensitivity: -79.6
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "16QAM 0.63 Dual",
    rxSensitivity: -78.4
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "16QAM 0.63 Dual",
    rxSensitivity: -76.6
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "16QAM 0.63 Dual",
    rxSensitivity: -75.4
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "16QAM 0.63 Dual",
    rxSensitivity: -74.9
  },

  // 16QAM 0.87 Single

  {
    antennaChannel: "5 MHz",
    antennaModulation: "16QAM 0.87 Single",
    rxSensitivity: -82.9
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "16QAM 0.87 Single",
    rxSensitivity: -80.8
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "16QAM 0.87 Single",
    rxSensitivity: -79.1
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "16QAM 0.87 Single",
    rxSensitivity: -77.8
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "16QAM 0.87 Single",
    rxSensitivity: -76.1
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "16QAM 0.87 Single",
    rxSensitivity: -74.8
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "16QAM 0.87 Single",
    rxSensitivity: -74.3
  },

  // 16QAM 0.87 Dual

  {
    antennaChannel: "5 MHz",
    antennaModulation: "16QAM 0.87 Dual",
    rxSensitivity: -79.8
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "16QAM 0.87 Dual",
    rxSensitivity: -77.8
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "16QAM 0.87 Dual",
    rxSensitivity: -76.0
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "16QAM 0.87 Dual",
    rxSensitivity: -74.8
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "16QAM 0.87 Dual",
    rxSensitivity: -73.0
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "16QAM 0.87 Dual",
    rxSensitivity: -71.8
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "16QAM 0.87 Dual",
    rxSensitivity: -71.2
  },

  // 64QAM 0.75 Single

  {
    antennaChannel: "5 MHz",
    antennaModulation: "64QAM 0.75 Single",
    rxSensitivity: -79.8
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "64QAM 0.75 Single",
    rxSensitivity: -77.8
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "64QAM 0.75 Single",
    rxSensitivity: -76.0
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "64QAM 0.75 Single",
    rxSensitivity: -74.8
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "64QAM 0.75 Single",
    rxSensitivity: -73.0
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "64QAM 0.75 Single",
    rxSensitivity: -71.8
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "64QAM 0.75 Single",
    rxSensitivity: -71.2
  },

  // 64QAM 0.75 Dual 

  {
    antennaChannel: "5 MHz",
    antennaModulation: "64QAM 0.75 Dual",
    rxSensitivity: -76.7
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "64QAM 0.75 Dual",
    rxSensitivity: -74.7
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "64QAM 0.75 Dual",
    rxSensitivity: -72.9
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "64QAM 0.75 Dual",
    rxSensitivity: -71.6
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "64QAM 0.75 Dual",
    rxSensitivity: -69.9
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "64QAM 0.75 Dual",
    rxSensitivity: -68.6
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "64QAM 0.75 Dual",
    rxSensitivity: -68.1
  },

  // 64QAM 0.92 Single

  {
    antennaChannel: "5 MHz",
    antennaModulation: "64QAM 0.92 Single",
    rxSensitivity: -75.8
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "64QAM 0.92 Single",
    rxSensitivity: -73.8
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "64QAM 0.92 Single",
    rxSensitivity: -72.1
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "64QAM 0.92 Single",
    rxSensitivity: -70.8
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "64QAM 0.92 Single",
    rxSensitivity: -69.1
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "64QAM 0.92 Single",
    rxSensitivity: -67.8
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "64QAM 0.92 Single",
    rxSensitivity: -67.3
  },

  // 64QAM 0.92 Dual

  {
    antennaChannel: "5 MHz",
    antennaModulation: "64QAM 0.92 Dual",
    rxSensitivity: -72.5
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "64QAM 0.92 Dual",
    rxSensitivity: -70.5
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "64QAM 0.92 Dual",
    rxSensitivity: -68.8
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "64QAM 0.92 Dual",
    rxSensitivity: -67.5
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "64QAM 0.92 Dual",
    rxSensitivity: -65.8
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "64QAM 0.92 Dual",
    rxSensitivity: -64.5
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "64QAM 0.92 Dual",
    rxSensitivity: -64.0
  },

  // 256QAM 0.81 Single

  {
    antennaChannel: "5 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -72.5
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -70.5
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -68.7
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -67.4
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -65.7
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -64.4
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -63.9
  },

  // 256QAM 0.81 Dual

  {
    antennaChannel: "5 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -68.8
  },
  {
    antennaChannel: "10 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -66.8
  },
  {
    antennaChannel: "15 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -65.0
  },
  {
    antennaChannel: "20 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -63.8
  },
  {
    antennaChannel: "30 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -62.0
  },
  {
    antennaChannel: "40 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -60.8
  },
  {
    antennaChannel: "45 MHz",
    antennaModulation: "256QAM 0.81 Single",
    rxSensitivity: -60.3
  }
]

export const antennasList: Antenna[] = [
    {
      name: "Ericsson AIR 5121",
      txAntennaGain: 24,
      frecuency: [27500, 28350],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Ericsson AIR 5121.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },  
    {
      name: "Ericsson AIR 5332",
      txAntennaGain: 26.1,
      frecuency: [37000, 40000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Ericsson AIR 5332.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },  
    {
      name: "Huawei OptiX RTN 380H",
      txAntennaGain: 30,
      frecuency: [71000, 76000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/huawei-optix-rtn-380h.jpg",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }, 
    {
      name: "Huawei RTN 380E",
      txAntennaGain: 38,
      frecuency: [71000, 86000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Huawei-optix-rtn-380E.jpg",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },  
    {
      name: "Cambium Networks PTP 650",
      txAntennaGain: 23,
      frecuency: [4900, 6050],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Cambium Networks PTP 650.png",
      checked: false,
      antennaChannels: [
        "5 MHz"
      ],
      antennaModulations: [
        "BPSK to 256 QAM dual"
      ],
      rxSensitivityCombinations: [
        {
          antennaChannel: "5 MHz",
          antennaModulation: "BPSK to 256 QAM dual",
          rxSensitivity: -98.0
        }   
      ],
      rxSensitivitySelected: {
        antennaChannel: "5 MHz",
        antennaModulation: "BPSK to 256 QAM dual",
        rxSensitivity: -98.0
      },
      antennaChannelSelected: "5 MHz",
      antennaModulationSelected: "BPSK to 256 QAM dual"
    }, 
    {
      name: "Cambium Networks PTP 670",
      txAntennaGain: 25,
      frecuency: [4900, 6050],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Cambium Networks PTP 670.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }, 
    //TODO: trabajando en este   
    {
      name: "Cambium Networks PTP 820C",
      txAntennaGain: 0,
      frecuency: [6000, 38000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Cambium Networks PTP 820C.png",
      checked: false,
      // antennaChannels: antennaChannelsCambiumNetwork670,
      antennaChannels: [
        "3.5 MHz",
        "5 MHz",
        "7 MHz",
        "10 MHz",
      ],
      antennaModulations: [
        "QPSK",
        "16 QAM",
        "32 QAM",
        "64 QAM",
        "128 QAM",
        "256 QAM"
      ],
      rxSensitivityCombinations: [
        {
          antennaChannel: "3.5 MHz",
          antennaModulation: "QPSK",
          rxSensitivity: -96.0     
        },
        {
          antennaChannel: "3.5 MHz",
          antennaModulation: "16 QAM",
          rxSensitivity: -89.0       
        },
        {
          antennaChannel: "3.5 MHz",
          antennaModulation: "32 QAM",
          rxSensitivity: -85.5        
        },
        {
          antennaChannel: "3.5 MHz",
          antennaModulation: "64 QAM",
          rxSensitivity: -82.5        
        },
        {
          antennaChannel: "3.5 MHz",
          antennaModulation: "128 QAM",
          rxSensitivity: -79.0        
        },
        {
          antennaChannel: "3.5 MHz",
          antennaModulation: "256 QAM",
          rxSensitivity: -75.5        
        },
        {
          antennaChannel: "5 MHz",
          antennaModulation: "QPSK",
          rxSensitivity: -96.0     
        },
        {
          antennaChannel: "5 MHz",
          antennaModulation: "16 QAM",
          rxSensitivity: -89.0       
        },
        {
          antennaChannel: "5 MHz",
          antennaModulation: "32 QAM",
          rxSensitivity: -85.5        
        },
        {
          antennaChannel: "5 MHz",
          antennaModulation: "64 QAM",
          rxSensitivity: -82.5        
        },
        {
          antennaChannel: "5 MHz",
          antennaModulation: "128 QAM",
          rxSensitivity: -79.0        
        },
        {
          antennaChannel: "5 MHz",
          antennaModulation: "256 QAM",
          rxSensitivity: -75.5        
        },
        {
          antennaChannel: "7 MHz",
          antennaModulation: "QPSK",
          rxSensitivity: -93.0       
        },
        {
          antennaChannel: "7 MHz",
          antennaModulation: "16 QAM",
          rxSensitivity: -86.5       
        },
        {
          antennaChannel: "7 MHz",
          antennaModulation: "32 QAM",
          rxSensitivity: -83.0        
        },
        {
          antennaChannel: "7 MHz",
          antennaModulation: "64 QAM",
          rxSensitivity: -80.0        
        },
        {
          antennaChannel: "7 MHz",
          antennaModulation: "128 QAM",
          rxSensitivity: -76.5        
        },
        {
          antennaChannel: "7 MHz",
          antennaModulation: "256 QAM",
          rxSensitivity: -73.5        
        },
        {
          antennaChannel: "10 MHz",
          antennaModulation: "QPSK",
          rxSensitivity: -91.5       
        },
        {
          antennaChannel: "10 MHz",
          antennaModulation: "16 QAM",
          rxSensitivity: -85.0       
        },
        {
          antennaChannel: "10 MHz",
          antennaModulation: "32 QAM",
          rxSensitivity: -81.5        
        },
        {
          antennaChannel: "10 MHz",
          antennaModulation: "64 QAM",
          rxSensitivity: -78.5        
        },
        {
          antennaChannel: "10 MHz",
          antennaModulation: "128 QAM",
          rxSensitivity: -75.0        
        },
        {
          antennaChannel: "10 MHz",
          antennaModulation: "256 QAM",
          rxSensitivity: -72.0        
        },
      ],
      rxSensitivitySelected: 
      {
        antennaChannel: "3.5 MHz",
        antennaModulation: "QPSK",
        rxSensitivity: -96.0     
      },
      antennaChannelSelected: "3.5",
      antennaModulationSelected: "QPSK"
    },  
    {
      name: "Nokia AirScale Radio Access",
      txAntennaGain: 15,
      frecuency: [3500, 3800],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Nokia AirScale Radio Access.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }, 
    {
      name: "Siklu EH-8010",
      txAntennaGain: 38,
      frecuency: [71000, 86000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Siklu EH-8010.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }, 
    {
      name: "Ceragon FibeAir IP-20C-HP",
      txAntennaGain: 0,
      frecuency: [6000, 11000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Ceragon FibeAir IP-20C.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }, 
    {
      name: "DragonWave Harmony Enhanced",
      txAntennaGain: 29,
      frecuency: [6000, 42000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/DragonWave Harmony Enhanced.jpg",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },   
    {
      name: "Tsunami QB 8250 Link",
      txAntennaGain: 29,
      frecuency: [4900, 5925],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Tsunami QB 8250 Link.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },       
    {
      name: "UBIQUITI AIRMAX U-OMT-DISH-5",
      txAntennaGain: 27,
      frecuency: [5000],
      maxDistanceKm: "5 Km",
      imgPath: "../../../assets/images/antennas/UBIQUITI AIRMAX U-OMT-DISH-5.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },
    {
      name: "Ubiquiti airFiber 60 LR",
      txAntennaGain: 38,
      frecuency: [60000],
      maxDistanceKm: "15 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 LR.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },   
    {
      name: "Ubiquiti airFiber 60 XR",
      txAntennaGain: 26,
      frecuency: [60000],
      maxDistanceKm: "15 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 XR.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },   
    {
      name: "Ubiquiti airFiber 60 XG",
      txAntennaGain: 43,
      frecuency: [60000],
      maxDistanceKm: "4 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 XG.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }, 
    {
      name: "Ubiquiti airFiber 60 HD",
      txAntennaGain: 35,
      frecuency: [60000],
      maxDistanceKm: "2 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 HD.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },    
    {
      name: "Ubiquiti GigaBeam",
      txAntennaGain: 38,
      frecuency: [60000],
      maxDistanceKm: "2 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti GigaBeam.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },
    {
      name: "Ubiquiti AirFiber 24",
      txAntennaGain: 33,
      frecuency: [24100],
      maxDistanceKm: "13 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti AirFiber 24 - 1.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },     
    {
      name: "Ubiquiti AirFiber 24 HD",
      txAntennaGain: 33,
      frecuency: [24050],
      maxDistanceKm: "20 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti AirFiber 24 HD - 1.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },  
    {
      name: "Ubiquiti Powerbeam PBE 5AC-620",
      txAntennaGain: 29,
      frecuency: [5000],
      maxDistanceKm: "30 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti Powerbeam PBE 5AC-620.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    },  
    {
      name: "Ubiquiti PowerBeam AC PBE-5AC-300",
      txAntennaGain: 22,
      frecuency: [5000],
      maxDistanceKm: "30 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti PowerBeam AC PBE-5AC-300.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }, 
    {
      name: "Ubiquiti PowerBeam AC PBE-5AC-400",
      txAntennaGain: 25,
      frecuency: [5000],
      maxDistanceKm: "30 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti PowerBeam AC PBE-5AC-400.png",
      checked: false,
      antennaChannels: antennaChannelsCambiumNetwork670,
      antennaModulations: antennaModulationsCambiumNetwork670,
      rxSensitivityCombinations: rxSensitivityCombinationsCambiumNetwork670,
      rxSensitivitySelected: antennaRxDefaultSensitivity,
      antennaChannelSelected: antennaChannelsCambiumNetwork670[0],
      antennaModulationSelected: antennaModulationsCambiumNetwork670[0]
    }
];

