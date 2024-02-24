import { FrecuencyMultiplierFactor } from "./frecuency";
import { GeoPoint, defaultPoints } from "./geographic";

export interface Antenna {
    name: string;
    txAntennaGain: number;
    frecuency: number[];
    maxDistanceKm: string;
    imgPath: string;
    checked: boolean;
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
    rxLoss: 0
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

export const antennasList: Antenna[] = [
    {
      name: "Ericsson AIR 5121",
      txAntennaGain: 24,
      frecuency: [27500, 28350],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Ericsson AIR 5121.png",
      checked: false
    },  
    {
      name: "Ericsson AIR 5332",
      txAntennaGain: 26.1,
      frecuency: [37000, 40000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Ericsson AIR 5332.png",
      checked: false
    },  
    {
      name: "Huawei OptiX RTN 380H",
      txAntennaGain: 30,
      frecuency: [71000, 76000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/huawei-optix-rtn-380h.jpg",
      checked: false
    }, 
    {
      name: "Huawei RTN 380E",
      txAntennaGain: 38,
      frecuency: [71000, 86000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Huawei-optix-rtn-380E.jpg",
      checked: false
    },  
    {
      name: "Cambium Networks PTP 650",
      txAntennaGain: 23,
      frecuency: [4900, 6050],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Cambium Networks PTP 650.png",
      checked: false
    }, 
    {
      name: "Cambium Networks PTP 670",
      txAntennaGain: 25,
      frecuency: [4900, 6050],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Cambium Networks PTP 670.png",
      checked: false
    },    
    {
      name: "Cambium Networks PTP 820C",
      txAntennaGain: 0,
      frecuency: [6000, 38000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Cambium Networks PTP 820C.png",
      checked: false
    },  
    {
      name: "Nokia AirScale Radio Access",
      txAntennaGain: 15,
      frecuency: [3500, 3800],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Nokia AirScale Radio Access.png",
      checked: false
    }, 
    {
      name: "Siklu EH-8010",
      txAntennaGain: 38,
      frecuency: [71000, 86000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Siklu EH-8010.png",
      checked: false
    }, 
    {
      name: "Ceragon FibeAir IP-20C-HP",
      txAntennaGain: 0,
      frecuency: [6000, 11000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Ceragon FibeAir IP-20C.png",
      checked: false
    }, 
    {
      name: "DragonWave Harmony Enhanced",
      txAntennaGain: 29,
      frecuency: [6000, 42000],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/DragonWave Harmony Enhanced.jpg",
      checked: false
    },   
    {
      name: "Tsunami QB 8250 Link",
      txAntennaGain: 29,
      frecuency: [4900, 5925],
      maxDistanceKm: "No disponible",
      imgPath: "../../../assets/images/antennas/Tsunami QB 8250 Link.png",
      checked: false
    },       
    {
      name: "UBIQUITI AIRMAX U-OMT-DISH-5",
      txAntennaGain: 27,
      frecuency: [5000],
      maxDistanceKm: "5 Km",
      imgPath: "../../../assets/images/antennas/UBIQUITI AIRMAX U-OMT-DISH-5.png",
      checked: false
    },
    {
      name: "Ubiquiti airFiber 60 LR",
      txAntennaGain: 38,
      frecuency: [60000],
      maxDistanceKm: "15 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 LR.png",
      checked: false
    },   
    {
      name: "Ubiquiti airFiber 60 XR",
      txAntennaGain: 26,
      frecuency: [60000],
      maxDistanceKm: "15 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 XR.png",
      checked: false
    },   
    {
      name: "Ubiquiti airFiber 60 XG",
      txAntennaGain: 43,
      frecuency: [60000],
      maxDistanceKm: "4 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 XG.png",
      checked: false
    }, 
    {
      name: "Ubiquiti airFiber 60 HD",
      txAntennaGain: 35,
      frecuency: [60000],
      maxDistanceKm: "2 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti airFiber 60 HD.png",
      checked: false
    },    
    {
      name: "Ubiquiti GigaBeam",
      txAntennaGain: 38,
      frecuency: [60000],
      maxDistanceKm: "2 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti GigaBeam.png",
      checked: false
    },
    {
      name: "Ubiquiti AirFiber 24",
      txAntennaGain: 33,
      frecuency: [24100],
      maxDistanceKm: "13 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti AirFiber 24 - 1.png",
      checked: false
    },     
    {
      name: "Ubiquiti AirFiber 24 HD",
      txAntennaGain: 33,
      frecuency: [24050],
      maxDistanceKm: "20 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti AirFiber 24 HD - 1.png",
      checked: false
    },  
    {
      name: "Ubiquiti Powerbeam PBE 5AC-620",
      txAntennaGain: 29,
      frecuency: [5000],
      maxDistanceKm: "30 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti Powerbeam PBE 5AC-620.png",
      checked: false
    },  
    {
      name: "Ubiquiti PowerBeam AC PBE-5AC-300",
      txAntennaGain: 22,
      frecuency: [5000],
      maxDistanceKm: "30 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti PowerBeam AC PBE-5AC-300.png",
      checked: false
    }, 
    {
      name: "Ubiquiti PowerBeam AC PBE-5AC-400",
      txAntennaGain: 25,
      frecuency: [5000],
      maxDistanceKm: "30 Km",
      imgPath: "../../../assets/images/antennas/Ubiquiti PowerBeam AC PBE-5AC-400.png",
      checked: false
    }
];