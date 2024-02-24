export enum FrecuencyUnit {
    GHZ = 'Ghz',
    MHZ = 'Mhz',
    HZ = 'hz'
}

export enum FrecuencyMultiplierFactor {
    GHZ = 1000000000,
    MHZ = 1000000,
    HZ = 1
}

export interface Frecuency {
    frecuencyTitle: string;
    frecuencyValue: number;
    bandWidth: string;
}

export const frecuenciesUnits: FrecuencyUnit[] = [
    FrecuencyUnit.HZ,
    FrecuencyUnit.MHZ,
    FrecuencyUnit.GHZ
];

export interface FrecuencyOption {
    frecuencyUnit: FrecuencyUnit;
    multiplierFactor: FrecuencyMultiplierFactor
}

export const frecuenciesLicensed: Frecuency[] = [
    {
        frecuencyTitle: '3620MHz',
        frecuencyValue: 3620,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '3940MHz',
        frecuencyValue: 3940,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '3660MHz',
        frecuencyValue: 3660,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '3980MHz',
        frecuencyValue: 3980,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '3700MHz',
        frecuencyValue: 3700,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4020MHz',
        frecuencyValue: 4020,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '3740MHz',
        frecuencyValue: 3740,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4060MHz',
        frecuencyValue: 4060,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '3780MHz',
        frecuencyValue: 3780,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4100MHz',
        frecuencyValue: 4100,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '3820MHz',
        frecuencyValue: 3820,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4140MHz',
        frecuencyValue: 4140,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '3860MHz',
        frecuencyValue: 3860,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4180MHz',
        frecuencyValue: 4180,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4430MHz',
        frecuencyValue: 4430,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4730MHz',
        frecuencyValue: 4730,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '4470MHz',
        frecuencyValue: 4470,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4770MHz',
        frecuencyValue: 4770,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '4510MHz',
        frecuencyValue: 4510,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4810MHz',
        frecuencyValue: 4810,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '4550MHz',
        frecuencyValue: 4550,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4850MHz',
        frecuencyValue: 4850,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '4590MHz',
        frecuencyValue: 4590,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '4890MHz',
        frecuencyValue: 4890,
        bandWidth: '40MHz'
    },


    {
        frecuencyTitle: '5945.20MHz',
        frecuencyValue: 5945.20,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6197.24MHz',
        frecuencyValue: 6197.24,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '5974.85MHz',
        frecuencyValue: 5974.85,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6226.89MHz',
        frecuencyValue: 6226.89,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '6004.50MHz',
        frecuencyValue: 6004.50,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6256.54MHz',
        frecuencyValue: 6256.54,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '6034.15MHz',
        frecuencyValue: 6034.15,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6286.19MHz',
        frecuencyValue: 6286.19,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '6063.80MHz',
        frecuencyValue: 6063.80,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6315.84MHz',
        frecuencyValue: 6315.84,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '6093.45MHz',
        frecuencyValue: 6093.45,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6345.49MHz',
        frecuencyValue: 6345.49,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '6123.10MHz',
        frecuencyValue: 6123.10,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6375.14MHz',
        frecuencyValue: 6375.14,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '6152.75MHz',
        frecuencyValue: 6152.75,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '6404.79MHz',
        frecuencyValue: 6404.79,
        bandWidth: '29.65MHz'
    },


    {
        frecuencyTitle: '6460MHz',
        frecuencyValue: 6460,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6800MHz',
        frecuencyValue: 6800,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6500MHz',
        frecuencyValue: 6500,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6840MHz',
        frecuencyValue: 6840,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6540MHz',
        frecuencyValue: 6540,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6880MHz',
        frecuencyValue: 6880,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6580MHz',
        frecuencyValue: 6580,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6920MHz',
        frecuencyValue: 6920,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6620MHz',
        frecuencyValue: 6620,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6960MHz',
        frecuencyValue: 6960,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6660MHz',
        frecuencyValue: 6660,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7000MHz',
        frecuencyValue: 7000,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6700MHz',
        frecuencyValue: 6700,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7040MHz',
        frecuencyValue: 7040,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6740MHz',
        frecuencyValue: 6740,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7080MHz',
        frecuencyValue: 7080,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6440MHz',
        frecuencyValue: 6440,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6780MHz',
        frecuencyValue: 6780,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6460MHz',
        frecuencyValue: 6460,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6800MHz',
        frecuencyValue: 6800,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6480MHz',
        frecuencyValue: 6480,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6820MHz',
        frecuencyValue: 6820,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6500MHz',
        frecuencyValue: 6500,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6840MHz',
        frecuencyValue: 6840,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6520MHz',
        frecuencyValue: 6520,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6860MHz',
        frecuencyValue: 6860,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6540MHz',
        frecuencyValue: 6540,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6880MHz',
        frecuencyValue: 6880,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6560MHz',
        frecuencyValue: 6560,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6900MHz',
        frecuencyValue: 6900,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6580MHz',
        frecuencyValue: 6580,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6920MHz',
        frecuencyValue: 6920,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6600MHz',
        frecuencyValue: 6600,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6940MHz',
        frecuencyValue: 6940,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6620MHz',
        frecuencyValue: 6620,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6960MHz',
        frecuencyValue: 6960,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6640MHz',
        frecuencyValue: 6640,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '6980MHz',
        frecuencyValue: 6980,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6660MHz',
        frecuencyValue: 6660,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7000MHz',
        frecuencyValue: 7000,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6680MHz',
        frecuencyValue: 6680,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7020MHz',
        frecuencyValue: 7020,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6700MHz',
        frecuencyValue: 6700,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7040MHz',
        frecuencyValue: 7040,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6720MHz',
        frecuencyValue: 6720,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7060MHz',
        frecuencyValue: 7060,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '6740MHz',
        frecuencyValue: 6740,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '7080MHz',
        frecuencyValue: 7080,
        bandWidth: '40MHz'
    },


    {
        frecuencyTitle: '6440MHz',
        frecuencyValue: 6440,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6780MHz',
        frecuencyValue: 6780,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6460MHz',
        frecuencyValue: 6460,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6800MHz',
        frecuencyValue: 6800,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6480MHz',
        frecuencyValue: 6480,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6820MHz',
        frecuencyValue: 6820,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6500MHz',
        frecuencyValue: 6500,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6840MHz',
        frecuencyValue: 6840,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6520MHz',
        frecuencyValue: 6520,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6860MHz',
        frecuencyValue: 6860,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6540MHz',
        frecuencyValue: 6540,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6880MHz',
        frecuencyValue: 6880,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6560MHz',
        frecuencyValue: 6560,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6900MHz',
        frecuencyValue: 6900,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6580MHz',
        frecuencyValue: 6580,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6920MHz',
        frecuencyValue: 6920,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6600MHz',
        frecuencyValue: 6600,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6940MHz',
        frecuencyValue: 6940,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6620MHz',
        frecuencyValue: 6620,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6960MHz',
        frecuencyValue: 6960,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6640MHz',
        frecuencyValue: 6640,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '6980MHz',
        frecuencyValue: 6980,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6660MHz',
        frecuencyValue: 6660,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '7000MHz',
        frecuencyValue: 7000,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6680MHz',
        frecuencyValue: 6680,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '7020MHz',
        frecuencyValue: 7020,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6700MHz',
        frecuencyValue: 6700,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '7040MHz',
        frecuencyValue: 7040,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6720MHz',
        frecuencyValue: 6720,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '7060MHz',
        frecuencyValue: 7060,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '6740MHz',
        frecuencyValue: 6740,
        bandWidth: '20MHz'
    },
    {
        frecuencyTitle: '7080MHz',
        frecuencyValue: 7080,
        bandWidth: '20MHz'
    },

    {
        frecuencyTitle: '7128MHz',
        frecuencyValue: 7128,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7289MHz',
        frecuencyValue: 7289,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7135MHz',
        frecuencyValue: 7135,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7296MHz',
        frecuencyValue: 7296,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7142MHz',
        frecuencyValue: 7142,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7303MHz',
        frecuencyValue: 7303,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7149MHz',
        frecuencyValue: 7149,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7310MHz',
        frecuencyValue: 7310,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7156MHz',
        frecuencyValue: 7156,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7317MHz',
        frecuencyValue: 7317,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7163MHz',
        frecuencyValue: 7163,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7324MHz',
        frecuencyValue: 7324,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7170MHz',
        frecuencyValue: 7170,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7331MHz',
        frecuencyValue: 7331,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7177MHz',
        frecuencyValue: 7177,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7338MHz',
        frecuencyValue: 7338,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7184MHz',
        frecuencyValue: 7184,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7345MHz',
        frecuencyValue: 7345,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7191MHz',
        frecuencyValue: 7191,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7352MHz',
        frecuencyValue: 7352,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7198MHz',
        frecuencyValue: 7198,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7359MHz',
        frecuencyValue: 7359,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7205MHz',
        frecuencyValue: 7205,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7366MHz',
        frecuencyValue: 7366,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7212MHz',
        frecuencyValue: 7212,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7373MHz',
        frecuencyValue: 7373,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7219MHz',
        frecuencyValue: 7219,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7380MHz',
        frecuencyValue: 7380,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7226MHz',
        frecuencyValue: 7226,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7387MHz',
        frecuencyValue: 7387,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7233MHz',
        frecuencyValue: 7233,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7394MHz',
        frecuencyValue: 7394,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7240MHz',
        frecuencyValue: 7240,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7401MHz',
        frecuencyValue: 7401,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7247MHz',
        frecuencyValue: 7247,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7408MHz',
        frecuencyValue: 7408,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7254MHz',
        frecuencyValue: 7254,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7415MHz',
        frecuencyValue: 7415,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7261MHz',
        frecuencyValue: 7261,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '7422MHz',
        frecuencyValue: 7422,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '7442MHz',
        frecuencyValue: 7442,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '7596MHz',
        frecuencyValue: 7596,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '7470MHz',
        frecuencyValue: 7470,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '7624MHz',
        frecuencyValue: 7624,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '7498MHz',
        frecuencyValue: 7498,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '7652MHz',
        frecuencyValue: 7652,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '7526MHz',
        frecuencyValue: 7526,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '7680MHz',
        frecuencyValue: 7680,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '7554MHz',
        frecuencyValue: 7554,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '7708MHz',
        frecuencyValue: 7708,
        bandWidth: '28MHz'
    },



    {
        frecuencyTitle: '7747.70MHz',
        frecuencyValue: 7747.70,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8059.02MHz',
        frecuencyValue: 8059.02,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '7777.35MHz',
        frecuencyValue: 7777.35,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8088.67MHz',
        frecuencyValue: 8088.67,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '7807.00MHz',
        frecuencyValue: 7807.00,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8118.32MHz',
        frecuencyValue: 8118.32,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '7836.65MHz',
        frecuencyValue: 7836.65,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8147.97MHz',
        frecuencyValue: 8147.97,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '7866.30MHz',
        frecuencyValue: 7866.30,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8177.62MHz',
        frecuencyValue: 8177.62,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '7895.95MHz',
        frecuencyValue: 7895.95,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8207.27MHz',
        frecuencyValue: 8207.27,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '7925.60MHz',
        frecuencyValue: 7925.60,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8236.92MHz',
        frecuencyValue: 8236.92,
        bandWidth: '29.65MHz'
    },

    {
        frecuencyTitle: '7955.25MHz',
        frecuencyValue: 7955.25,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8266.57MHz',
        frecuencyValue: 8266.57,
        bandWidth: '29.65MHz'
    },
    {
        frecuencyTitle: '8293MHz',
        frecuencyValue: 8293,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '8412MHz',
        frecuencyValue: 8412,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '8307MHz',
        frecuencyValue: 8307,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '8426MHz',
        frecuencyValue: 8426,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '8321MHz',
        frecuencyValue: 8321,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '8440MHz',
        frecuencyValue: 8440,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '8335MHz',
        frecuencyValue: 8335,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '8454MHz',
        frecuencyValue: 8454,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '8349MHz',
        frecuencyValue: 8349,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '8468MHz',
        frecuencyValue: 8468,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '8363MHz',
        frecuencyValue: 8363,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '8482MHz',
        frecuencyValue: 8482,
        bandWidth: '28MHz'
    },


    {
        frecuencyTitle: '10715MHz',
        frecuencyValue: 10715,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11245MHz',
        frecuencyValue: 11245,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '10755MHz',
        frecuencyValue: 10755,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11285MHz',
        frecuencyValue: 11285,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '10795MHz',
        frecuencyValue: 10795,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11325MHz',
        frecuencyValue: 11325,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '10835MHz',
        frecuencyValue: 10835,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11365MHz',
        frecuencyValue: 11365,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '10875MHz',
        frecuencyValue: 10875,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11405MHz',
        frecuencyValue: 11405,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '10915MHz',
        frecuencyValue: 10915,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11445MHz',
        frecuencyValue: 11445,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '10955MHz',
        frecuencyValue: 10955,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11485MHz',
        frecuencyValue: 11485,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '10995MHz',
        frecuencyValue: 10995,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11525MHz',
        frecuencyValue: 11525,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '11035MHz',
        frecuencyValue: 11035,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11565MHz',
        frecuencyValue: 11565,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '11075MHz',
        frecuencyValue: 11075,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11605MHz',
        frecuencyValue: 11605,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '11115MHz',
        frecuencyValue: 11115,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11645MHz',
        frecuencyValue: 11645,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '11155MHz',
        frecuencyValue: 11155,
        bandWidth: '40MHz'
    },
    {
        frecuencyTitle: '11685MHz',
        frecuencyValue: 11685,
        bandWidth: '40MHz'
    },

    {
        frecuencyTitle: '14529MHz',
        frecuencyValue: 14529,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '14949MHz',
        frecuencyValue: 14949,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '14585MHz',
        frecuencyValue: 14585,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '15005MHz',
        frecuencyValue: 15005,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '14641MHz',
        frecuencyValue: 14641,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '15061MHz',
        frecuencyValue: 15061,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '14697MHz',
        frecuencyValue: 14697,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '15117MHz',
        frecuencyValue: 15117,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '14753MHz',
        frecuencyValue: 14753,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '15173MHz',
        frecuencyValue: 15173,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '14809MHz',
        frecuencyValue: 14809,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '15229MHz',
        frecuencyValue: 15229,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '14865MHz',
        frecuencyValue: 14865,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '15285MHz',
        frecuencyValue: 15285,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '14515MHz',
        frecuencyValue: 14515,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '14935MHz',
        frecuencyValue: 14935,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14543MHz',
        frecuencyValue: 14543,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '14963MHz',
        frecuencyValue: 14963,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14571MHz',
        frecuencyValue: 14571,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '14991MHz',
        frecuencyValue: 14991,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14599MHz',
        frecuencyValue: 14599,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15019MHz',
        frecuencyValue: 15019,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14627MHz',
        frecuencyValue: 14627,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15047MHz',
        frecuencyValue: 15047,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14655MHz',
        frecuencyValue: 14655,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15075MHz',
        frecuencyValue: 15075,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14683MHz',
        frecuencyValue: 14683,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15103MHz',
        frecuencyValue: 15103,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14711MHz',
        frecuencyValue: 14711,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15131MHz',
        frecuencyValue: 15131,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14739MHz',
        frecuencyValue: 14739,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15159MHz',
        frecuencyValue: 15159,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14767MHz',
        frecuencyValue: 14767,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15187MHz',
        frecuencyValue: 15187,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14795MHz',
        frecuencyValue: 14795,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15215MHz',
        frecuencyValue: 15215,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14823MHz',
        frecuencyValue: 14823,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15243MHz',
        frecuencyValue: 15243,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14851MHz',
        frecuencyValue: 14851,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15271MHz',
        frecuencyValue: 15271,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14879MHz',
        frecuencyValue: 14879,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15299MHz',
        frecuencyValue: 15299,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '14907MHz',
        frecuencyValue: 14907,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '15327MHz',
        frecuencyValue: 15327,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '17755MHz',
        frecuencyValue: 17755,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '18765MHz',
        frecuencyValue: 18765,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '17810MHz',
        frecuencyValue: 17810,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '18820MHz',
        frecuencyValue: 18820,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '17865MHz',
        frecuencyValue: 17865,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '18875MHz',
        frecuencyValue: 18875,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '17920MHz',
        frecuencyValue: 17920,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '18930MHz',
        frecuencyValue: 18930,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '17975MHz',
        frecuencyValue: 17975,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '18985MHz',
        frecuencyValue: 18985,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18030MHz',
        frecuencyValue: 18030,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19040MHz',
        frecuencyValue: 19040,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18085MHz',
        frecuencyValue: 18085,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19095MHz',
        frecuencyValue: 19095,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18140MHz',
        frecuencyValue: 18140,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19150MHz',
        frecuencyValue: 19150,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18195MHz',
        frecuencyValue: 18195,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19205MHz',
        frecuencyValue: 19205,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18250MHz',
        frecuencyValue: 18250,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19260MHz',
        frecuencyValue: 19260,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18305MHz',
        frecuencyValue: 18305,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19315MHz',
        frecuencyValue: 19315,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18360MHz',
        frecuencyValue: 18360,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19370MHz',
        frecuencyValue: 19370,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18415MHz',
        frecuencyValue: 18415,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19425MHz',
        frecuencyValue: 19425,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18470MHz',
        frecuencyValue: 18470,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19480MHz',
        frecuencyValue: 19480,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18525MHz',
        frecuencyValue: 18525,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19535MHz',
        frecuencyValue: 19535,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18580MHz',
        frecuencyValue: 18580,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19590MHz',
        frecuencyValue: 19590,
        bandWidth: '55MHz'
    },

    {
        frecuencyTitle: '18635MHz',
        frecuencyValue: 18635,
        bandWidth: '55MHz'
    },
    {
        frecuencyTitle: '19645MHz',
        frecuencyValue: 19645,
        bandWidth: '55MHz'
    },


    {
        frecuencyTitle: '17727.50MHz',
        frecuencyValue: 17727.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18737.50MHz',
        frecuencyValue: 18737.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17755.00MHz',
        frecuencyValue: 17755.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18765.00MHz',
        frecuencyValue: 18765.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17782.50MHz',
        frecuencyValue: 17782.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18792.50MHz',
        frecuencyValue: 18792.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17810.00MHz',
        frecuencyValue: 17810.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18820.00MHz',
        frecuencyValue: 18820.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17837.50MHz',
        frecuencyValue: 17837.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18847.50MHz',
        frecuencyValue: 18847.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17865.00MHz',
        frecuencyValue: 17865.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18875.00MHz',
        frecuencyValue: 18875.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17892.50MHz',
        frecuencyValue: 17892.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18902.50MHz',
        frecuencyValue: 18902.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17920.00MHz',
        frecuencyValue: 17920.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18930.00MHz',
        frecuencyValue: 18930.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17947.50MHz',
        frecuencyValue: 17947.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18957.50MHz',
        frecuencyValue: 18957.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '17975.00MHz',
        frecuencyValue: 17975.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '18985.00MHz',
        frecuencyValue: 18985.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18002.50MHz',
        frecuencyValue: 18002.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19012.50MHz',
        frecuencyValue: 19012.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18030.00MHz',
        frecuencyValue: 18030.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19040.00MHz',
        frecuencyValue: 19040.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18057.50MHz',
        frecuencyValue: 18057.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19067.50MHz',
        frecuencyValue: 19067.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18085.00MHz',
        frecuencyValue: 18085.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19095.00MHz',
        frecuencyValue: 19095.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18112.50MHz',
        frecuencyValue: 18112.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19122.50MHz',
        frecuencyValue: 19122.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18140.00MHz',
        frecuencyValue: 18140.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19150.00MHz',
        frecuencyValue: 19150.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18167.50MHz',
        frecuencyValue: 18167.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19177.50MHz',
        frecuencyValue: 19177.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18195.00MHz',
        frecuencyValue: 18195.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19205.00MHz',
        frecuencyValue: 19205.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18222.50MHz',
        frecuencyValue: 18222.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19232.50MHz',
        frecuencyValue: 19232.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18250.00MHz',
        frecuencyValue: 18250.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19260.00MHz',
        frecuencyValue: 19260.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18277.50MHz',
        frecuencyValue: 18277.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19287.50MHz',
        frecuencyValue: 19287.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18305.00MHz',
        frecuencyValue: 18305.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19315.00MHz',
        frecuencyValue: 19315.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18332.50MHz',
        frecuencyValue: 18332.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19342.50MHz',
        frecuencyValue: 19342.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18360.00MHz',
        frecuencyValue: 18360.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19370.00MHz',
        frecuencyValue: 19370.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18387.50MHz',
        frecuencyValue: 18387.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19397.50MHz',
        frecuencyValue: 19397.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18415.00MHz',
        frecuencyValue: 18415.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19425.00MHz',
        frecuencyValue: 19425.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18442.50MHz',
        frecuencyValue: 18442.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19452.50MHz',
        frecuencyValue: 19452.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18470.00MHz',
        frecuencyValue: 18470.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19480.00MHz',
        frecuencyValue: 19480.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18497.50MHz',
        frecuencyValue: 18497.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19507.50MHz',
        frecuencyValue: 19507.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18525.00MHz',
        frecuencyValue: 18525.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19535.00MHz',
        frecuencyValue: 19535.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18552.50MHz',
        frecuencyValue: 18552.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19562.50MHz',
        frecuencyValue: 19562.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18580.00MHz',
        frecuencyValue: 18580.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19590.00MHz',
        frecuencyValue: 19590.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18607.50MHz',
        frecuencyValue: 18607.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19617.50MHz',
        frecuencyValue: 19617.50,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18635.00MHz',
        frecuencyValue: 18635.00,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19645.00MHz',
        frecuencyValue: 19645.00,
        bandWidth: '27.5MHz'
    },

    {
        frecuencyTitle: '18662.50MHz',
        frecuencyValue: 18662.50,
        bandWidth: '27.5MHz'
    },
    {
        frecuencyTitle: '19672.50MHz',
        frecuencyValue: 19672.50,
        bandWidth: '27.5MHz'
    },


    {
        frecuencyTitle: '21238MHz',
        frecuencyValue: 21238,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22470MHz',
        frecuencyValue: 22470,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21266MHz',
        frecuencyValue: 21266,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22498MHz',
        frecuencyValue: 22498,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21294MHz',
        frecuencyValue: 21294,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22526MHz',
        frecuencyValue: 22526,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21322MHz',
        frecuencyValue: 21322,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22554MHz',
        frecuencyValue: 22554,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21350MHz',
        frecuencyValue: 21350,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22582MHz',
        frecuencyValue: 22582,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21378MHz',
        frecuencyValue: 21378,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22610MHz',
        frecuencyValue: 22610,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21406MHz',
        frecuencyValue: 21406,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22638MHz',
        frecuencyValue: 22638,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21434MHz',
        frecuencyValue: 21434,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22666MHz',
        frecuencyValue: 22666,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21462MHz',
        frecuencyValue: 21462,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22694MHz',
        frecuencyValue: 22694,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21490MHz',
        frecuencyValue: 21490,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22722MHz',
        frecuencyValue: 22722,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21518MHz',
        frecuencyValue: 21518,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22750MHz',
        frecuencyValue: 22750,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21546MHz',
        frecuencyValue: 21546,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22778MHz',
        frecuencyValue: 22778,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21574MHz',
        frecuencyValue: 21574,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22806MHz',
        frecuencyValue: 22806,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21602MHz',
        frecuencyValue: 21602,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22834MHz',
        frecuencyValue: 22834,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21630MHz',
        frecuencyValue: 21630,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22862MHz',
        frecuencyValue: 22862,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21658MHz',
        frecuencyValue: 21658,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22890MHz',
        frecuencyValue: 22890,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21686MHz',
        frecuencyValue: 21686,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22918MHz',
        frecuencyValue: 22918,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21714MHz',
        frecuencyValue: 21714,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22946MHz',
        frecuencyValue: 22946,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21742MHz',
        frecuencyValue: 21742,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '22974MHz',
        frecuencyValue: 22974,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21770MHz',
        frecuencyValue: 21770,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23002MHz',
        frecuencyValue: 23002,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21798MHz',
        frecuencyValue: 21798,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23030MHz',
        frecuencyValue: 23030,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21826MHz',
        frecuencyValue: 21826,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23058MHz',
        frecuencyValue: 23058,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21854MHz',
        frecuencyValue: 21854,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23086MHz',
        frecuencyValue: 23086,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21882MHz',
        frecuencyValue: 21882,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23114MHz',
        frecuencyValue: 23114,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21910MHz',
        frecuencyValue: 21910,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23142MHz',
        frecuencyValue: 23142,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21938MHz',
        frecuencyValue: 21938,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23170MHz',
        frecuencyValue: 23170,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21966MHz',
        frecuencyValue: 21966,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23198MHz',
        frecuencyValue: 23198,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '21994MHz',
        frecuencyValue: 21994,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23226MHz',
        frecuencyValue: 23226,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22022MHz',
        frecuencyValue: 22022,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23254MHz',
        frecuencyValue: 23254,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22050MHz',
        frecuencyValue: 22050,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23282MHz',
        frecuencyValue: 23282,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22078MHz',
        frecuencyValue: 22078,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23310MHz',
        frecuencyValue: 23310,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22106MHz',
        frecuencyValue: 22106,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23338MHz',
        frecuencyValue: 23338,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22134MHz',
        frecuencyValue: 22134,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23366MHz',
        frecuencyValue: 23366,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22162MHz',
        frecuencyValue: 22162,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23394MHz',
        frecuencyValue: 23394,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22190MHz',
        frecuencyValue: 22190,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23422MHz',
        frecuencyValue: 23422,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22218MHz',
        frecuencyValue: 22218,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23450MHz',
        frecuencyValue: 23450,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22246MHz',
        frecuencyValue: 22246,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23478MHz',
        frecuencyValue: 23478,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22274MHz',
        frecuencyValue: 22274,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23506MHz',
        frecuencyValue: 23506,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22302MHz',
        frecuencyValue: 22302,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23534MHz',
        frecuencyValue: 23534,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '22330MHz',
        frecuencyValue: 22330,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '23562MHz',
        frecuencyValue: 23562,
        bandWidth: '28MHz'
    },


    {
        frecuencyTitle: '21231MHz',
        frecuencyValue: 21231,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22463MHz',
        frecuencyValue: 22463,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21245MHz',
        frecuencyValue: 21245,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22477MHz',
        frecuencyValue: 22477,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21259MHz',
        frecuencyValue: 21259,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22491MHz',
        frecuencyValue: 22491,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21273MHz',
        frecuencyValue: 21273,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22505MHz',
        frecuencyValue: 22505,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21287MHz',
        frecuencyValue: 21287,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22519MHz',
        frecuencyValue: 22519,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21301MHz',
        frecuencyValue: 21301,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22533MHz',
        frecuencyValue: 22533,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21315MHz',
        frecuencyValue: 21315,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22547MHz',
        frecuencyValue: 22547,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21329MHz',
        frecuencyValue: 21329,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22561MHz',
        frecuencyValue: 22561,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21343MHz',
        frecuencyValue: 21343,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22575MHz',
        frecuencyValue: 22575,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21357MHz',
        frecuencyValue: 21357,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22589MHz',
        frecuencyValue: 22589,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21371MHz',
        frecuencyValue: 21371,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22603MHz',
        frecuencyValue: 22603,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21385MHz',
        frecuencyValue: 21385,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22617MHz',
        frecuencyValue: 22617,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21399MHz',
        frecuencyValue: 21399,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22631MHz',
        frecuencyValue: 22631,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21413MHz',
        frecuencyValue: 21413,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22645MHz',
        frecuencyValue: 22645,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21427MHz',
        frecuencyValue: 21427,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22659MHz',
        frecuencyValue: 22659,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21441MHz',
        frecuencyValue: 21441,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22673MHz',
        frecuencyValue: 22673,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21455MHz',
        frecuencyValue: 21455,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22687MHz',
        frecuencyValue: 22687,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21469MHz',
        frecuencyValue: 21469,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22701MHz',
        frecuencyValue: 22701,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21483MHz',
        frecuencyValue: 21483,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22715MHz',
        frecuencyValue: 22715,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21497MHz',
        frecuencyValue: 21497,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22729MHz',
        frecuencyValue: 22729,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21511MHz',
        frecuencyValue: 21511,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22743MHz',
        frecuencyValue: 22743,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21525MHz',
        frecuencyValue: 21525,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22757MHz',
        frecuencyValue: 22757,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21539MHz',
        frecuencyValue: 21539,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22771MHz',
        frecuencyValue: 22771,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21553MHz',
        frecuencyValue: 21553,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22785MHz',
        frecuencyValue: 22785,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21567MHz',
        frecuencyValue: 21567,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22799MHz',
        frecuencyValue: 22799,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21581MHz',
        frecuencyValue: 21581,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22813MHz',
        frecuencyValue: 22813,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21595MHz',
        frecuencyValue: 21595,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22827MHz',
        frecuencyValue: 22827,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21609MHz',
        frecuencyValue: 21609,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22841MHz',
        frecuencyValue: 22841,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21623MHz',
        frecuencyValue: 21623,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22855MHz',
        frecuencyValue: 22855,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21637MHz',
        frecuencyValue: 21637,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22869MHz',
        frecuencyValue: 22869,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21651MHz',
        frecuencyValue: 21651,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22883MHz',
        frecuencyValue: 22883,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21665MHz',
        frecuencyValue: 21665,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22897MHz',
        frecuencyValue: 22897,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21679MHz',
        frecuencyValue: 21679,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22911MHz',
        frecuencyValue: 22911,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21693MHz',
        frecuencyValue: 21693,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22925MHz',
        frecuencyValue: 22925,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21707MHz',
        frecuencyValue: 21707,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22939MHz',
        frecuencyValue: 22939,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21721MHz',
        frecuencyValue: 21721,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22953MHz',
        frecuencyValue: 22953,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21735MHz',
        frecuencyValue: 21735,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22967MHz',
        frecuencyValue: 22967,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21749MHz',
        frecuencyValue: 21749,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22981MHz',
        frecuencyValue: 22981,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21763MHz',
        frecuencyValue: 21763,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '22995MHz',
        frecuencyValue: 22995,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21777MHz',
        frecuencyValue: 21777,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23009MHz',
        frecuencyValue: 23009,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21791MHz',
        frecuencyValue: 21791,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23023MHz',
        frecuencyValue: 23023,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21805MHz',
        frecuencyValue: 21805,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23037MHz',
        frecuencyValue: 23037,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21819MHz',
        frecuencyValue: 21819,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23051MHz',
        frecuencyValue: 23051,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21833MHz',
        frecuencyValue: 21833,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23065MHz',
        frecuencyValue: 23065,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21847MHz',
        frecuencyValue: 21847,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23079MHz',
        frecuencyValue: 23079,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21861MHz',
        frecuencyValue: 21861,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23093MHz',
        frecuencyValue: 23093,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21875MHz',
        frecuencyValue: 21875,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23107MHz',
        frecuencyValue: 23107,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21889MHz',
        frecuencyValue: 21889,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23121MHz',
        frecuencyValue: 23121,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21903MHz',
        frecuencyValue: 21903,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23135MHz',
        frecuencyValue: 23135,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21917MHz',
        frecuencyValue: 21917,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23149MHz',
        frecuencyValue: 23149,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21931MHz',
        frecuencyValue: 21931,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23163MHz',
        frecuencyValue: 23163,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21945MHz',
        frecuencyValue: 21945,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23177MHz',
        frecuencyValue: 23177,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21959MHz',
        frecuencyValue: 21959,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23191MHz',
        frecuencyValue: 23191,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21973MHz',
        frecuencyValue: 21973,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23205MHz',
        frecuencyValue: 23205,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '21987MHz',
        frecuencyValue: 21987,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23219MHz',
        frecuencyValue: 23219,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22001MHz',
        frecuencyValue: 22001,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23233MHz',
        frecuencyValue: 23233,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22015MHz',
        frecuencyValue: 22015,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23247MHz',
        frecuencyValue: 23247,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22029MHz',
        frecuencyValue: 22029,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23261MHz',
        frecuencyValue: 23261,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22043MHz',
        frecuencyValue: 22043,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23275MHz',
        frecuencyValue: 23275,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22057MHz',
        frecuencyValue: 22057,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23289MHz',
        frecuencyValue: 23289,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22071MHz',
        frecuencyValue: 22071,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23303MHz',
        frecuencyValue: 23303,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22085MHz',
        frecuencyValue: 22085,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23317MHz',
        frecuencyValue: 23317,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22099MHz',
        frecuencyValue: 22099,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23331MHz',
        frecuencyValue: 23331,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22113MHz',
        frecuencyValue: 22113,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23345MHz',
        frecuencyValue: 23345,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22127MHz',
        frecuencyValue: 22127,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23359MHz',
        frecuencyValue: 23359,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22141MHz',
        frecuencyValue: 22141,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23373MHz',
        frecuencyValue: 23373,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22155MHz',
        frecuencyValue: 22155,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23387MHz',
        frecuencyValue: 23387,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22169MHz',
        frecuencyValue: 22169,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23401MHz',
        frecuencyValue: 23401,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22183MHz',
        frecuencyValue: 22183,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23415MHz',
        frecuencyValue: 23415,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22197MHz',
        frecuencyValue: 22197,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23429MHz',
        frecuencyValue: 23429,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22211MHz',
        frecuencyValue: 22211,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23443MHz',
        frecuencyValue: 23443,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22225MHz',
        frecuencyValue: 22225,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23457MHz',
        frecuencyValue: 23457,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22239MHz',
        frecuencyValue: 22239,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23471MHz',
        frecuencyValue: 23471,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22253MHz',
        frecuencyValue: 22253,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23485MHz',
        frecuencyValue: 23485,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22267MHz',
        frecuencyValue: 22267,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23499MHz',
        frecuencyValue: 23499,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22281MHz',
        frecuencyValue: 22281,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23513MHz',
        frecuencyValue: 23513,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22295MHz',
        frecuencyValue: 22295,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23527MHz',
        frecuencyValue: 23527,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22309MHz',
        frecuencyValue: 22309,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23541MHz',
        frecuencyValue: 23541,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22323MHz',
        frecuencyValue: 22323,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23555MHz',
        frecuencyValue: 23555,
        bandWidth: '14MHz'
    },

    {
        frecuencyTitle: '22337MHz',
        frecuencyValue: 22337,
        bandWidth: '14MHz'
    },
    {
        frecuencyTitle: '23569MHz',
        frecuencyValue: 23569,
        bandWidth: '14MHz'
    },


    {
        frecuencyTitle: '21227.50MHz',
        frecuencyValue: 21227.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22459.50MHz',
        frecuencyValue: 22459.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21234.50MHz',
        frecuencyValue: 21234.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22466.50MHz',
        frecuencyValue: 22466.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21241.50MHz',
        frecuencyValue: 21241.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22473.50MHz',
        frecuencyValue: 22473.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21248.50MHz',
        frecuencyValue: 21248.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22480.50MHz',
        frecuencyValue: 22480.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21255.50MHz',
        frecuencyValue: 21255.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22487.50MHz',
        frecuencyValue: 22487.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21262.50MHz',
        frecuencyValue: 21262.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22494.50MHz',
        frecuencyValue: 22494.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21269.50MHz',
        frecuencyValue: 21269.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22501.50MHz',
        frecuencyValue: 22501.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21276.50MHz',
        frecuencyValue: 21276.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22508.50MHz',
        frecuencyValue: 22508.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21283.50MHz',
        frecuencyValue: 21283.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22515.50MHz',
        frecuencyValue: 22515.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21290.50MHz',
        frecuencyValue: 21290.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22522.50MHz',
        frecuencyValue: 22522.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21297.50MHz',
        frecuencyValue: 21297.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22529.50MHz',
        frecuencyValue: 22529.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21304.50MHz',
        frecuencyValue: 21304.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22536.50MHz',
        frecuencyValue: 22536.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21311.50MHz',
        frecuencyValue: 21311.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22543.50MHz',
        frecuencyValue: 22543.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21318.50MHz',
        frecuencyValue: 21318.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22550.50MHz',
        frecuencyValue: 22550.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21325.50MHz',
        frecuencyValue: 21325.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22557.50MHz',
        frecuencyValue: 22557.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21332.50MHz',
        frecuencyValue: 21332.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22564.50MHz',
        frecuencyValue: 22564.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21339.50MHz',
        frecuencyValue: 21339.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22571.50MHz',
        frecuencyValue: 22571.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21346.50MHz',
        frecuencyValue: 21346.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22578.50MHz',
        frecuencyValue: 22578.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21353.50MHz',
        frecuencyValue: 21353.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22585.50MHz',
        frecuencyValue: 22585.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21360.50MHz',
        frecuencyValue: 21360.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22592.50MHz',
        frecuencyValue: 22592.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21367.50MHz',
        frecuencyValue: 21367.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22599.50MHz',
        frecuencyValue: 22599.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21374.50MHz',
        frecuencyValue: 21374.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22606.50MHz',
        frecuencyValue: 22606.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21381.50MHz',
        frecuencyValue: 21381.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22613.50MHz',
        frecuencyValue: 22613.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21388.50MHz',
        frecuencyValue: 21388.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22620.50MHz',
        frecuencyValue: 22620.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21395.50MHz',
        frecuencyValue: 21395.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22627.50MHz',
        frecuencyValue: 22627.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21402.50MHz',
        frecuencyValue: 21402.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22634.50MHz',
        frecuencyValue: 22634.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21409.50MHz',
        frecuencyValue: 21409.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22641.50MHz',
        frecuencyValue: 22641.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21416.50MHz',
        frecuencyValue: 21416.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22648.50MHz',
        frecuencyValue: 22648.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21423.50MHz',
        frecuencyValue: 21423.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22655.50MHz',
        frecuencyValue: 22655.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21430.50MHz',
        frecuencyValue: 21430.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22662.50MHz',
        frecuencyValue: 22662.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21437.50MHz',
        frecuencyValue: 21437.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22669.50MHz',
        frecuencyValue: 22669.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21444.50MHz',
        frecuencyValue: 21444.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22676.50MHz',
        frecuencyValue: 22676.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21451.50MHz',
        frecuencyValue: 21451.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22683.50MHz',
        frecuencyValue: 22683.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21458.50MHz',
        frecuencyValue: 21458.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22690.50MHz',
        frecuencyValue: 22690.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21465.50MHz',
        frecuencyValue: 21465.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22697.50MHz',
        frecuencyValue: 22697.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21472.50MHz',
        frecuencyValue: 21472.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22704.50MHz',
        frecuencyValue: 22704.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21479.50MHz',
        frecuencyValue: 21479.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22711.50MHz',
        frecuencyValue: 22711.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21486.50MHz',
        frecuencyValue: 21486.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22718.50MHz',
        frecuencyValue: 22718.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21493.50MHz',
        frecuencyValue: 21493.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22725.50MHz',
        frecuencyValue: 22725.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21500.50MHz',
        frecuencyValue: 21500.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22732.50MHz',
        frecuencyValue: 22732.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21507.50MHz',
        frecuencyValue: 21507.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22739.50MHz',
        frecuencyValue: 22739.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21514.50MHz',
        frecuencyValue: 21514.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22746.50MHz',
        frecuencyValue: 22746.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21521.50MHz',
        frecuencyValue: 21521.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22753.50MHz',
        frecuencyValue: 22753.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21528.50MHz',
        frecuencyValue: 21528.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22760.50MHz',
        frecuencyValue: 22760.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21535.50MHz',
        frecuencyValue: 21535.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22767.50MHz',
        frecuencyValue: 22767.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21542.50MHz',
        frecuencyValue: 21542.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22774.50MHz',
        frecuencyValue: 22774.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21549.50MHz',
        frecuencyValue: 21549.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22781.50MHz',
        frecuencyValue: 22781.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21556.50MHz',
        frecuencyValue: 21556.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22788.50MHz',
        frecuencyValue: 22788.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21563.50MHz',
        frecuencyValue: 21563.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22795.50MHz',
        frecuencyValue: 22795.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21570.50MHz',
        frecuencyValue: 21570.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22802.50MHz',
        frecuencyValue: 22802.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21577.50MHz',
        frecuencyValue: 21577.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22809.50MHz',
        frecuencyValue: 22809.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21584.50MHz',
        frecuencyValue: 21584.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22816.50MHz',
        frecuencyValue: 22816.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21591.50MHz',
        frecuencyValue: 21591.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22823.50MHz',
        frecuencyValue: 22823.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21598.50MHz',
        frecuencyValue: 21598.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22830.50MHz',
        frecuencyValue: 22830.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21605.50MHz',
        frecuencyValue: 21605.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22837.50MHz',
        frecuencyValue: 22837.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21612.50MHz',
        frecuencyValue: 21612.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22844.50MHz',
        frecuencyValue: 22844.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21619.50MHz',
        frecuencyValue: 21619.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22851.50MHz',
        frecuencyValue: 22851.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21626.50MHz',
        frecuencyValue: 21626.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22858.50MHz',
        frecuencyValue: 22858.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21633.50MHz',
        frecuencyValue: 21633.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22865.50MHz',
        frecuencyValue: 22865.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21640.50MHz',
        frecuencyValue: 21640.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22872.50MHz',
        frecuencyValue: 22872.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21647.50MHz',
        frecuencyValue: 21647.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22879.50MHz',
        frecuencyValue: 22879.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21654.50MHz',
        frecuencyValue: 21654.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22886.50MHz',
        frecuencyValue: 22886.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21661.50MHz',
        frecuencyValue: 21661.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22893.50MHz',
        frecuencyValue: 22893.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21668.50MHz',
        frecuencyValue: 21668.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22900.50MHz',
        frecuencyValue: 22900.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21675.50MHz',
        frecuencyValue: 21675.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22907.50MHz',
        frecuencyValue: 22907.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21682.50MHz',
        frecuencyValue: 21682.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22914.50MHz',
        frecuencyValue: 22914.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21689.50MHz',
        frecuencyValue: 21689.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22921.50MHz',
        frecuencyValue: 22921.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21696.50MHz',
        frecuencyValue: 21696.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22928.50MHz',
        frecuencyValue: 22928.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21703.50MHz',
        frecuencyValue: 21703.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22935.50MHz',
        frecuencyValue: 22935.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21710.50MHz',
        frecuencyValue: 21710.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22942.50MHz',
        frecuencyValue: 22942.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21717.50MHz',
        frecuencyValue: 21717.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22949.50MHz',
        frecuencyValue: 22949.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21724.50MHz',
        frecuencyValue: 21724.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22956.50MHz',
        frecuencyValue: 22956.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21731.50MHz',
        frecuencyValue: 21731.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22963.50MHz',
        frecuencyValue: 22963.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21738.50MHz',
        frecuencyValue: 21738.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22970.50MHz',
        frecuencyValue: 22970.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21745.50MHz',
        frecuencyValue: 21745.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22977.50MHz',
        frecuencyValue: 22977.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21752.50MHz',
        frecuencyValue: 21752.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22984.50MHz',
        frecuencyValue: 22984.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21759.50MHz',
        frecuencyValue: 21759.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22991.50MHz',
        frecuencyValue: 22991.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21766.50MHz',
        frecuencyValue: 21766.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '22998.50MHz',
        frecuencyValue: 22998.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21773.50MHz',
        frecuencyValue: 21773.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23005.50MHz',
        frecuencyValue: 23005.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21780.50MHz',
        frecuencyValue: 21780.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23012.50MHz',
        frecuencyValue: 23012.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21787.50MHz',
        frecuencyValue: 21787.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23019.50MHz',
        frecuencyValue: 23019.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21794.50MHz',
        frecuencyValue: 21794.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23026.50MHz',
        frecuencyValue: 23026.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21801.50MHz',
        frecuencyValue: 21801.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23033.50MHz',
        frecuencyValue: 23033.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21808.50MHz',
        frecuencyValue: 21808.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23040.50MHz',
        frecuencyValue: 23040.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21815.50MHz',
        frecuencyValue: 21815.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23047.50MHz',
        frecuencyValue: 23047.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21822.50MHz',
        frecuencyValue: 21822.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23054.50MHz',
        frecuencyValue: 23054.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21829.50MHz',
        frecuencyValue: 21829.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23061.50MHz',
        frecuencyValue: 23061.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21836.50MHz',
        frecuencyValue: 21836.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23068.50MHz',
        frecuencyValue: 23068.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21843.50MHz',
        frecuencyValue: 21843.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23075.50MHz',
        frecuencyValue: 23075.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21850.50MHz',
        frecuencyValue: 21850.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23082.50MHz',
        frecuencyValue: 23082.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21857.50MHz',
        frecuencyValue: 21857.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23089.50MHz',
        frecuencyValue: 23089.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21864.50MHz',
        frecuencyValue: 21864.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23096.50MHz',
        frecuencyValue: 23096.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21871.50MHz',
        frecuencyValue: 21871.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23103.50MHz',
        frecuencyValue: 23103.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21878.50MHz',
        frecuencyValue: 21878.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23110.50MHz',
        frecuencyValue: 23110.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21885.50MHz',
        frecuencyValue: 21885.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23117.50MHz',
        frecuencyValue: 23117.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21892.50MHz',
        frecuencyValue: 21892.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23124.50MHz',
        frecuencyValue: 23124.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21899.50MHz',
        frecuencyValue: 21899.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23131.50MHz',
        frecuencyValue: 23131.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21906.50MHz',
        frecuencyValue: 21906.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23138.50MHz',
        frecuencyValue: 23138.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21913.50MHz',
        frecuencyValue: 21913.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23145.50MHz',
        frecuencyValue: 23145.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21920.50MHz',
        frecuencyValue: 21920.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23152.50MHz',
        frecuencyValue: 23152.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21927.50MHz',
        frecuencyValue: 21927.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23159.50MHz',
        frecuencyValue: 23159.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21934.50MHz',
        frecuencyValue: 21934.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23166.50MHz',
        frecuencyValue: 23166.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21941.50MHz',
        frecuencyValue: 21941.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23173.50MHz',
        frecuencyValue: 23173.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21948.50MHz',
        frecuencyValue: 21948.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23180.50MHz',
        frecuencyValue: 23180.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21955.50MHz',
        frecuencyValue: 21955.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23187.50MHz',
        frecuencyValue: 23187.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21962.50MHz',
        frecuencyValue: 21962.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23194.50MHz',
        frecuencyValue: 23194.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21969.50MHz',
        frecuencyValue: 21969.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23201.50MHz',
        frecuencyValue: 23201.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21976.50MHz',
        frecuencyValue: 21976.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23208.50MHz',
        frecuencyValue: 23208.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21983.50MHz',
        frecuencyValue: 21983.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23215.50MHz',
        frecuencyValue: 23215.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21990.50MHz',
        frecuencyValue: 21990.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23222.50MHz',
        frecuencyValue: 23222.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '21997.50MHz',
        frecuencyValue: 21997.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23229.50MHz',
        frecuencyValue: 23229.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22004.50MHz',
        frecuencyValue: 22004.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23236.50MHz',
        frecuencyValue: 23236.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22011.50MHz',
        frecuencyValue: 22011.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23243.50MHz',
        frecuencyValue: 23243.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22018.50MHz',
        frecuencyValue: 22018.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23250.50MHz',
        frecuencyValue: 23250.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22025.50MHz',
        frecuencyValue: 22025.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23257.50MHz',
        frecuencyValue: 23257.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22032.50MHz',
        frecuencyValue: 22032.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23264.50MHz',
        frecuencyValue: 23264.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22039.50MHz',
        frecuencyValue: 22039.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23271.50MHz',
        frecuencyValue: 23271.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22046.50MHz',
        frecuencyValue: 22046.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23278.50MHz',
        frecuencyValue: 23278.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22053.50MHz',
        frecuencyValue: 22053.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23285.50MHz',
        frecuencyValue: 23285.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22060.50MHz',
        frecuencyValue: 22060.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23292.50MHz',
        frecuencyValue: 23292.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22067.50MHz',
        frecuencyValue: 22067.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23299.50MHz',
        frecuencyValue: 23299.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22074.50MHz',
        frecuencyValue: 22074.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23306.50MHz',
        frecuencyValue: 23306.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22081.50MHz',
        frecuencyValue: 22081.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23313.50MHz',
        frecuencyValue: 23313.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22088.50MHz',
        frecuencyValue: 22088.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23320.50MHz',
        frecuencyValue: 23320.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22095.50MHz',
        frecuencyValue: 22095.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23327.50MHz',
        frecuencyValue: 23327.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22102.50MHz',
        frecuencyValue: 22102.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23334.50MHz',
        frecuencyValue: 23334.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22109.50MHz',
        frecuencyValue: 22109.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23341.50MHz',
        frecuencyValue: 23341.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22116.50MHz',
        frecuencyValue: 22116.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23348.50MHz',
        frecuencyValue: 23348.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22123.50MHz',
        frecuencyValue: 22123.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23355.50MHz',
        frecuencyValue: 23355.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22130.50MHz',
        frecuencyValue: 22130.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23362.50MHz',
        frecuencyValue: 23362.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22137.50MHz',
        frecuencyValue: 22137.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23369.50MHz',
        frecuencyValue: 23369.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22144.50MHz',
        frecuencyValue: 22144.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23376.50MHz',
        frecuencyValue: 23376.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22151.50MHz',
        frecuencyValue: 22151.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23383.50MHz',
        frecuencyValue: 23383.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22158.50MHz',
        frecuencyValue: 22158.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23390.50MHz',
        frecuencyValue: 23390.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22165.50MHz',
        frecuencyValue: 22165.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23397.50MHz',
        frecuencyValue: 23397.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22172.50MHz',
        frecuencyValue: 22172.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23404.50MHz',
        frecuencyValue: 23404.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22179.50MHz',
        frecuencyValue: 22179.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23411.50MHz',
        frecuencyValue: 23411.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22186.50MHz',
        frecuencyValue: 22186.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23418.50MHz',
        frecuencyValue: 23418.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22193.50MHz',
        frecuencyValue: 22193.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23425.50MHz',
        frecuencyValue: 23425.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22200.50MHz',
        frecuencyValue: 22200.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23432.50MHz',
        frecuencyValue: 23432.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22207.50MHz',
        frecuencyValue: 22207.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23439.50MHz',
        frecuencyValue: 23439.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22214.50MHz',
        frecuencyValue: 22214.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23446.50MHz',
        frecuencyValue: 23446.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22221.50MHz',
        frecuencyValue: 22221.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23453.50MHz',
        frecuencyValue: 23453.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22228.50MHz',
        frecuencyValue: 22228.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23460.50MHz',
        frecuencyValue: 23460.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22235.50MHz',
        frecuencyValue: 22235.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23467.50MHz',
        frecuencyValue: 23467.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22242.50MHz',
        frecuencyValue: 22242.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23474.50MHz',
        frecuencyValue: 23474.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22249.50MHz',
        frecuencyValue: 22249.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23481.50MHz',
        frecuencyValue: 23481.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22256.50MHz',
        frecuencyValue: 22256.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23488.50MHz',
        frecuencyValue: 23488.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22263.50MHz',
        frecuencyValue: 22263.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23495.50MHz',
        frecuencyValue: 23495.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22270.50MHz',
        frecuencyValue: 22270.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23502.50MHz',
        frecuencyValue: 23502.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22277.50MHz',
        frecuencyValue: 22277.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23509.50MHz',
        frecuencyValue: 23509.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22284.50MHz',
        frecuencyValue: 22284.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23516.50MHz',
        frecuencyValue: 23516.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22291.50MHz',
        frecuencyValue: 22291.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23523.50MHz',
        frecuencyValue: 23523.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22298.50MHz',
        frecuencyValue: 22298.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23530.50MHz',
        frecuencyValue: 23530.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22305.50MHz',
        frecuencyValue: 22305.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23537.50MHz',
        frecuencyValue: 23537.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22312.50MHz',
        frecuencyValue: 22312.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23544.50MHz',
        frecuencyValue: 23544.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22319.50MHz',
        frecuencyValue: 22319.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23551.50MHz',
        frecuencyValue: 23551.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22326.50MHz',
        frecuencyValue: 22326.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23558.50MHz',
        frecuencyValue: 23558.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22333.50MHz',
        frecuencyValue: 22333.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23565.50MHz',
        frecuencyValue: 23565.50,
        bandWidth: '7MHz'
    },

    {
        frecuencyTitle: '22340.50MHz',
        frecuencyValue: 22340.50,
        bandWidth: '7MHz'
    },
    {
        frecuencyTitle: '23572.50MHz',
        frecuencyValue: 23572.50,
        bandWidth: '7MHz'
    },


    {
        frecuencyTitle: '24577MHz',
        frecuencyValue: 24577,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25585MHz',
        frecuencyValue: 25585,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '24633MHz',
        frecuencyValue: 24633,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25641MHz',
        frecuencyValue: 25641,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '24689MHz',
        frecuencyValue: 24689,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25697MHz',
        frecuencyValue: 25697,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '24745MHz',
        frecuencyValue: 24745,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25753MHz',
        frecuencyValue: 25753,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '24801MHz',
        frecuencyValue: 24801,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25809MHz',
        frecuencyValue: 25809,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '24857MHz',
        frecuencyValue: 24857,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25865MHz',
        frecuencyValue: 25865,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '24913MHz',
        frecuencyValue: 24913,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25921MHz',
        frecuencyValue: 25921,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '24969MHz',
        frecuencyValue: 24969,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '25977MHz',
        frecuencyValue: 25977,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25025MHz',
        frecuencyValue: 25025,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26033MHz',
        frecuencyValue: 26033,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25081MHz',
        frecuencyValue: 25081,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26089MHz',
        frecuencyValue: 26089,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25137MHz',
        frecuencyValue: 25137,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26145MHz',
        frecuencyValue: 26145,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25193MHz',
        frecuencyValue: 25193,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26201MHz',
        frecuencyValue: 26201,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25249MHz',
        frecuencyValue: 25249,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26257MHz',
        frecuencyValue: 26257,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25305MHz',
        frecuencyValue: 25305,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26313MHz',
        frecuencyValue: 26313,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25361MHz',
        frecuencyValue: 25361,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26369MHz',
        frecuencyValue: 26369,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '25417MHz',
        frecuencyValue: 25417,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '26425MHz',
        frecuencyValue: 26425,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '24563MHz',
        frecuencyValue: 24563,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25571MHz',
        frecuencyValue: 25571,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24591MHz',
        frecuencyValue: 24591,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25599MHz',
        frecuencyValue: 25599,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24619MHz',
        frecuencyValue: 24619,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25627MHz',
        frecuencyValue: 25627,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24647MHz',
        frecuencyValue: 24647,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25655MHz',
        frecuencyValue: 25655,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24675MHz',
        frecuencyValue: 24675,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25683MHz',
        frecuencyValue: 25683,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24703MHz',
        frecuencyValue: 24703,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25711MHz',
        frecuencyValue: 25711,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24731MHz',
        frecuencyValue: 24731,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25739MHz',
        frecuencyValue: 25739,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24759MHz',
        frecuencyValue: 24759,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25767MHz',
        frecuencyValue: 25767,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24787MHz',
        frecuencyValue: 24787,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25795MHz',
        frecuencyValue: 25795,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24815MHz',
        frecuencyValue: 24815,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25823MHz',
        frecuencyValue: 25823,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24843MHz',
        frecuencyValue: 24843,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25851MHz',
        frecuencyValue: 25851,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24871MHz',
        frecuencyValue: 24871,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25879MHz',
        frecuencyValue: 25879,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24899MHz',
        frecuencyValue: 24899,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25907MHz',
        frecuencyValue: 25907,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24927MHz',
        frecuencyValue: 24927,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25935MHz',
        frecuencyValue: 25935,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24955MHz',
        frecuencyValue: 24955,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25963MHz',
        frecuencyValue: 25963,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '24983MHz',
        frecuencyValue: 24983,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '25991MHz',
        frecuencyValue: 25991,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25011MHz',
        frecuencyValue: 25011,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26019MHz',
        frecuencyValue: 26019,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25039MHz',
        frecuencyValue: 25039,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26047MHz',
        frecuencyValue: 26047,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25067MHz',
        frecuencyValue: 25067,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26075MHz',
        frecuencyValue: 26075,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25095MHz',
        frecuencyValue: 25095,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26103MHz',
        frecuencyValue: 26103,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25123MHz',
        frecuencyValue: 25123,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26131MHz',
        frecuencyValue: 26131,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25151MHz',
        frecuencyValue: 25151,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26159MHz',
        frecuencyValue: 26159,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25179MHz',
        frecuencyValue: 25179,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26187MHz',
        frecuencyValue: 26187,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25207MHz',
        frecuencyValue: 25207,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26215MHz',
        frecuencyValue: 26215,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25235MHz',
        frecuencyValue: 25235,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26243MHz',
        frecuencyValue: 26243,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25263MHz',
        frecuencyValue: 25263,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26271MHz',
        frecuencyValue: 26271,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25291MHz',
        frecuencyValue: 25291,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26299MHz',
        frecuencyValue: 26299,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25319MHz',
        frecuencyValue: 25319,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26327MHz',
        frecuencyValue: 26327,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25347MHz',
        frecuencyValue: 25347,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26355MHz',
        frecuencyValue: 26355,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25375MHz',
        frecuencyValue: 25375,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26383MHz',
        frecuencyValue: 26383,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25403MHz',
        frecuencyValue: 25403,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26411MHz',
        frecuencyValue: 26411,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '25431MHz',
        frecuencyValue: 25431,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '26439MHz',
        frecuencyValue: 26439,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '31899MHz',
        frecuencyValue: 31899,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '32711MHz',
        frecuencyValue: 32711,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '31955MHz',
        frecuencyValue: 31955,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '32767MHz',
        frecuencyValue: 32767,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32011MHz',
        frecuencyValue: 32011,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '32823MHz',
        frecuencyValue: 32823,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32067MHz',
        frecuencyValue: 32067,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '32879MHz',
        frecuencyValue: 32879,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32123MHz',
        frecuencyValue: 32123,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '32935MHz',
        frecuencyValue: 32935,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32179MHz',
        frecuencyValue: 32179,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '32991MHz',
        frecuencyValue: 32991,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32235MHz',
        frecuencyValue: 32235,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '33047MHz',
        frecuencyValue: 33047,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32291MHz',
        frecuencyValue: 32291,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '33103MHz',
        frecuencyValue: 33103,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32347MHz',
        frecuencyValue: 32347,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '33159MHz',
        frecuencyValue: 33159,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32403MHz',
        frecuencyValue: 32403,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '33215MHz',
        frecuencyValue: 33215,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32459MHz',
        frecuencyValue: 32459,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '33271MHz',
        frecuencyValue: 33271,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '32515MHz',
        frecuencyValue: 32515,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '33327MHz',
        frecuencyValue: 33327,
        bandWidth: '56MHz'
    },


    {
        frecuencyTitle: '36078MHz',
        frecuencyValue: 36078,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '36540MHz',
        frecuencyValue: 36540,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '36134MHz',
        frecuencyValue: 36134,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '36596MHz',
        frecuencyValue: 36596,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '36190MHz',
        frecuencyValue: 36190,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '36652MHz',
        frecuencyValue: 36652,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '36246MHz',
        frecuencyValue: 36246,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '36708MHz',
        frecuencyValue: 36708,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '36302MHz',
        frecuencyValue: 36302,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '36764MHz',
        frecuencyValue: 36764,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '36358MHz',
        frecuencyValue: 36358,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '36820MHz',
        frecuencyValue: 36820,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '36414MHz',
        frecuencyValue: 36414,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '36876MHz',
        frecuencyValue: 36876,
        bandWidth: '56MHz'
    },


    {
        frecuencyTitle: '37072MHz',
        frecuencyValue: 37072,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38332MHz',
        frecuencyValue: 38332,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37100MHz',
        frecuencyValue: 37100,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38360MHz',
        frecuencyValue: 38360,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37128MHz',
        frecuencyValue: 37128,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38388MHz',
        frecuencyValue: 38388,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37156MHz',
        frecuencyValue: 37156,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38416MHz',
        frecuencyValue: 38416,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37184MHz',
        frecuencyValue: 37184,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38444MHz',
        frecuencyValue: 38444,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37212MHz',
        frecuencyValue: 37212,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38472MHz',
        frecuencyValue: 38472,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37240MHz',
        frecuencyValue: 37240,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38500MHz',
        frecuencyValue: 38500,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37268MHz',
        frecuencyValue: 37268,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38528MHz',
        frecuencyValue: 38528,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37296MHz',
        frecuencyValue: 37296,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38556MHz',
        frecuencyValue: 38556,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37324MHz',
        frecuencyValue: 37324,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38584MHz',
        frecuencyValue: 38584,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37352MHz',
        frecuencyValue: 37352,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38612MHz',
        frecuencyValue: 38612,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37380MHz',
        frecuencyValue: 37380,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38640MHz',
        frecuencyValue: 38640,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37408MHz',
        frecuencyValue: 37408,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38668MHz',
        frecuencyValue: 38668,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37436MHz',
        frecuencyValue: 37436,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38696MHz',
        frecuencyValue: 38696,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37464MHz',
        frecuencyValue: 37464,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38724MHz',
        frecuencyValue: 38724,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37492MHz',
        frecuencyValue: 37492,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38752MHz',
        frecuencyValue: 38752,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37520MHz',
        frecuencyValue: 37520,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38780MHz',
        frecuencyValue: 38780,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37548MHz',
        frecuencyValue: 37548,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38808MHz',
        frecuencyValue: 38808,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37576MHz',
        frecuencyValue: 37576,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38836MHz',
        frecuencyValue: 38836,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37604MHz',
        frecuencyValue: 37604,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38864MHz',
        frecuencyValue: 38864,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37632MHz',
        frecuencyValue: 37632,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38892MHz',
        frecuencyValue: 38892,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37660MHz',
        frecuencyValue: 37660,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38920MHz',
        frecuencyValue: 38920,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37688MHz',
        frecuencyValue: 37688,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38948MHz',
        frecuencyValue: 38948,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37716MHz',
        frecuencyValue: 37716,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '38976MHz',
        frecuencyValue: 38976,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37744MHz',
        frecuencyValue: 37744,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39004MHz',
        frecuencyValue: 39004,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37772MHz',
        frecuencyValue: 37772,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39032MHz',
        frecuencyValue: 39032,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37800MHz',
        frecuencyValue: 37800,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39060MHz',
        frecuencyValue: 39060,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37828MHz',
        frecuencyValue: 37828,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39088MHz',
        frecuencyValue: 39088,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37856MHz',
        frecuencyValue: 37856,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39116MHz',
        frecuencyValue: 39116,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37884MHz',
        frecuencyValue: 37884,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39144MHz',
        frecuencyValue: 39144,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37912MHz',
        frecuencyValue: 37912,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39172MHz',
        frecuencyValue: 39172,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37940MHz',
        frecuencyValue: 37940,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39200MHz',
        frecuencyValue: 39200,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37968MHz',
        frecuencyValue: 37968,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39228MHz',
        frecuencyValue: 39228,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '37996MHz',
        frecuencyValue: 37996,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39256MHz',
        frecuencyValue: 39256,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '38024MHz',
        frecuencyValue: 38024,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39284MHz',
        frecuencyValue: 39284,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '38052MHz',
        frecuencyValue: 38052,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39312MHz',
        frecuencyValue: 39312,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '38080MHz',
        frecuencyValue: 38080,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39340MHz',
        frecuencyValue: 39340,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '38108MHz',
        frecuencyValue: 38108,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39368MHz',
        frecuencyValue: 39368,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '38136MHz',
        frecuencyValue: 38136,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39396MHz',
        frecuencyValue: 39396,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '38164MHz',
        frecuencyValue: 38164,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '39424MHz',
        frecuencyValue: 39424,
        bandWidth: '28MHz'
    },


    {
        frecuencyTitle: '39578MHz',
        frecuencyValue: 39578,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '40040MHz',
        frecuencyValue: 40040,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '39634MHz',
        frecuencyValue: 39634,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '40096MHz',
        frecuencyValue: 40096,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '39690MHz',
        frecuencyValue: 39690,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '40152MHz',
        frecuencyValue: 40152,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '39746MHz',
        frecuencyValue: 39746,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '40208MHz',
        frecuencyValue: 40208,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '39802MHz',
        frecuencyValue: 39802,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '40264MHz',
        frecuencyValue: 40264,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '39858MHz',
        frecuencyValue: 39858,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '40320MHz',
        frecuencyValue: 40320,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '39914MHz',
        frecuencyValue: 39914,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '40376MHz',
        frecuencyValue: 40376,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51468MHz',
        frecuencyValue: 51468,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52084MHz',
        frecuencyValue: 52084,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51524MHz',
        frecuencyValue: 51524,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52140MHz',
        frecuencyValue: 52140,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51580MHz',
        frecuencyValue: 51580,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52196MHz',
        frecuencyValue: 52196,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51636MHz',
        frecuencyValue: 51636,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52252MHz',
        frecuencyValue: 52252,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51692MHz',
        frecuencyValue: 51692,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52308MHz',
        frecuencyValue: 52308,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51748MHz',
        frecuencyValue: 51748,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52364MHz',
        frecuencyValue: 52364,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51804MHz',
        frecuencyValue: 51804,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52420MHz',
        frecuencyValue: 52420,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51860MHz',
        frecuencyValue: 51860,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52476MHz',
        frecuencyValue: 52476,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '51916MHz',
        frecuencyValue: 51916,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '52532MHz',
        frecuencyValue: 52532,
        bandWidth: '56MHz'
    },


    {
        frecuencyTitle: '51454MHz',
        frecuencyValue: 51454,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52070MHz',
        frecuencyValue: 52070,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51482MHz',
        frecuencyValue: 51482,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52098MHz',
        frecuencyValue: 52098,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51510MHz',
        frecuencyValue: 51510,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52126MHz',
        frecuencyValue: 52126,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51538MHz',
        frecuencyValue: 51538,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52154MHz',
        frecuencyValue: 52154,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51566MHz',
        frecuencyValue: 51566,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52182MHz',
        frecuencyValue: 52182,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51594MHz',
        frecuencyValue: 51594,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52210MHz',
        frecuencyValue: 52210,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51622MHz',
        frecuencyValue: 51622,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52238MHz',
        frecuencyValue: 52238,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51650MHz',
        frecuencyValue: 51650,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52266MHz',
        frecuencyValue: 52266,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51678MHz',
        frecuencyValue: 51678,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52294MHz',
        frecuencyValue: 52294,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51706MHz',
        frecuencyValue: 51706,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52322MHz',
        frecuencyValue: 52322,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51734MHz',
        frecuencyValue: 51734,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52350MHz',
        frecuencyValue: 52350,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51762MHz',
        frecuencyValue: 51762,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52378MHz',
        frecuencyValue: 52378,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51790MHz',
        frecuencyValue: 51790,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52406MHz',
        frecuencyValue: 52406,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51818MHz',
        frecuencyValue: 51818,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52434MHz',
        frecuencyValue: 52434,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51846MHz',
        frecuencyValue: 51846,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52462MHz',
        frecuencyValue: 52462,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51874MHz',
        frecuencyValue: 51874,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52490MHz',
        frecuencyValue: 52490,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51902MHz',
        frecuencyValue: 51902,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52518MHz',
        frecuencyValue: 52518,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '51930MHz',
        frecuencyValue: 51930,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '52546MHz',
        frecuencyValue: 52546,
        bandWidth: '28MHz'
    },


    {
        frecuencyTitle: '55870MHz',
        frecuencyValue: 55870,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56486MHz',
        frecuencyValue: 56486,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '55926MHz',
        frecuencyValue: 55926,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56542MHz',
        frecuencyValue: 56542,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '55982MHz',
        frecuencyValue: 55982,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56598MHz',
        frecuencyValue: 56598,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '56038MHz',
        frecuencyValue: 56038,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56654MHz',
        frecuencyValue: 56654,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '56094MHz',
        frecuencyValue: 56094,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56710MHz',
        frecuencyValue: 56710,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '56150MHz',
        frecuencyValue: 56150,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56766MHz',
        frecuencyValue: 56766,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '56206MHz',
        frecuencyValue: 56206,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56822MHz',
        frecuencyValue: 56822,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '56262MHz',
        frecuencyValue: 56262,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56878MHz',
        frecuencyValue: 56878,
        bandWidth: '56MHz'
    },

    {
        frecuencyTitle: '56318MHz',
        frecuencyValue: 56318,
        bandWidth: '56MHz'
    },
    {
        frecuencyTitle: '56934MHz',
        frecuencyValue: 56934,
        bandWidth: '56MHz'
    },


    {
        frecuencyTitle: '55856MHz',
        frecuencyValue: 55856,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56472MHz',
        frecuencyValue: 56472,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '55884MHz',
        frecuencyValue: 55884,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56500MHz',
        frecuencyValue: 56500,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '55912MHz',
        frecuencyValue: 55912,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56528MHz',
        frecuencyValue: 56528,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '55940MHz',
        frecuencyValue: 55940,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56556MHz',
        frecuencyValue: 56556,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '55968MHz',
        frecuencyValue: 55968,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56584MHz',
        frecuencyValue: 56584,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '55996MHz',
        frecuencyValue: 55996,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56612MHz',
        frecuencyValue: 56612,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56024MHz',
        frecuencyValue: 56024,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56640MHz',
        frecuencyValue: 56640,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56052MHz',
        frecuencyValue: 56052,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56668MHz',
        frecuencyValue: 56668,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56080MHz',
        frecuencyValue: 56080,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56696MHz',
        frecuencyValue: 56696,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56108MHz',
        frecuencyValue: 56108,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56724MHz',
        frecuencyValue: 56724,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56136MHz',
        frecuencyValue: 56136,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56752MHz',
        frecuencyValue: 56752,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56164MHz',
        frecuencyValue: 56164,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56780MHz',
        frecuencyValue: 56780,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56192MHz',
        frecuencyValue: 56192,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56808MHz',
        frecuencyValue: 56808,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56220MHz',
        frecuencyValue: 56220,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56836MHz',
        frecuencyValue: 56836,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56248MHz',
        frecuencyValue: 56248,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56864MHz',
        frecuencyValue: 56864,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56276MHz',
        frecuencyValue: 56276,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56892MHz',
        frecuencyValue: 56892,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56304MHz',
        frecuencyValue: 56304,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56920MHz',
        frecuencyValue: 56920,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '56332MHz',
        frecuencyValue: 56332,
        bandWidth: '28MHz'
    },
    {
        frecuencyTitle: '56948MHz',
        frecuencyValue: 56948,
        bandWidth: '28MHz'
    },

    {
        frecuencyTitle: '57025MHz',
        frecuencyValue: 57025,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57075MHz',
        frecuencyValue: 57075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57125MHz',
        frecuencyValue: 57125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57175MHz',
        frecuencyValue: 57175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57225MHz',
        frecuencyValue: 57225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57275MHz',
        frecuencyValue: 57275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57325MHz',
        frecuencyValue: 57325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57375MHz',
        frecuencyValue: 57375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57425MHz',
        frecuencyValue: 57425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57475MHz',
        frecuencyValue: 57475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57525MHz',
        frecuencyValue: 57525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57575MHz',
        frecuencyValue: 57575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57625MHz',
        frecuencyValue: 57625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57675MHz',
        frecuencyValue: 57675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57725MHz',
        frecuencyValue: 57725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57775MHz',
        frecuencyValue: 57775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57825MHz',
        frecuencyValue: 57825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57875MHz',
        frecuencyValue: 57875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57925MHz',
        frecuencyValue: 57925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '57975MHz',
        frecuencyValue: 57975,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58025MHz',
        frecuencyValue: 58025,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58075MHz',
        frecuencyValue: 58075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58125MHz',
        frecuencyValue: 58125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58175MHz',
        frecuencyValue: 58175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58225MHz',
        frecuencyValue: 58225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58275MHz',
        frecuencyValue: 58275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58325MHz',
        frecuencyValue: 58325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58375MHz',
        frecuencyValue: 58375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58425MHz',
        frecuencyValue: 58425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58475MHz',
        frecuencyValue: 58475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58525MHz',
        frecuencyValue: 58525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58575MHz',
        frecuencyValue: 58575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58625MHz',
        frecuencyValue: 58625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58675MHz',
        frecuencyValue: 58675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58725MHz',
        frecuencyValue: 58725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58775MHz',
        frecuencyValue: 58775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58825MHz',
        frecuencyValue: 58825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58875MHz',
        frecuencyValue: 58875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58925MHz',
        frecuencyValue: 58925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '58975MHz',
        frecuencyValue: 58975,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59025MHz',
        frecuencyValue: 59025,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59075MHz',
        frecuencyValue: 59075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59125MHz',
        frecuencyValue: 59125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59175MHz',
        frecuencyValue: 59175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59225MHz',
        frecuencyValue: 59225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59275MHz',
        frecuencyValue: 59275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59325MHz',
        frecuencyValue: 59325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59375MHz',
        frecuencyValue: 59375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59425MHz',
        frecuencyValue: 59425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59475MHz',
        frecuencyValue: 59475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59525MHz',
        frecuencyValue: 59525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59575MHz',
        frecuencyValue: 59575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59625MHz',
        frecuencyValue: 59625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59675MHz',
        frecuencyValue: 59675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59725MHz',
        frecuencyValue: 59725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59775MHz',
        frecuencyValue: 59775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59825MHz',
        frecuencyValue: 59825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59875MHz',
        frecuencyValue: 59875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59925MHz',
        frecuencyValue: 59925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '59975MHz',
        frecuencyValue: 59975,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60025MHz',
        frecuencyValue: 60025,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60075MHz',
        frecuencyValue: 60075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60125MHz',
        frecuencyValue: 60125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60175MHz',
        frecuencyValue: 60175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60225MHz',
        frecuencyValue: 60225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60275MHz',
        frecuencyValue: 60275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60325MHz',
        frecuencyValue: 60325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60375MHz',
        frecuencyValue: 60375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60425MHz',
        frecuencyValue: 60425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60475MHz',
        frecuencyValue: 60475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60525MHz',
        frecuencyValue: 60525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60575MHz',
        frecuencyValue: 60575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60625MHz',
        frecuencyValue: 60625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60675MHz',
        frecuencyValue: 60675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60725MHz',
        frecuencyValue: 60725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60775MHz',
        frecuencyValue: 60775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60825MHz',
        frecuencyValue: 60825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60875MHz',
        frecuencyValue: 60875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60925MHz',
        frecuencyValue: 60925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '60975MHz',
        frecuencyValue: 60975,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61025MHz',
        frecuencyValue: 61025,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61075MHz',
        frecuencyValue: 61075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61125MHz',
        frecuencyValue: 61125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61175MHz',
        frecuencyValue: 61175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61225MHz',
        frecuencyValue: 61225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61275MHz',
        frecuencyValue: 61275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61325MHz',
        frecuencyValue: 61325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61375MHz',
        frecuencyValue: 61375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61425MHz',
        frecuencyValue: 61425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61475MHz',
        frecuencyValue: 61475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61525MHz',
        frecuencyValue: 61525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61575MHz',
        frecuencyValue: 61575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61625MHz',
        frecuencyValue: 61625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61675MHz',
        frecuencyValue: 61675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61725MHz',
        frecuencyValue: 61725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61775MHz',
        frecuencyValue: 61775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61825MHz',
        frecuencyValue: 61825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61875MHz',
        frecuencyValue: 61875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61925MHz',
        frecuencyValue: 61925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '61975MHz',
        frecuencyValue: 61975,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62025MHz',
        frecuencyValue: 62025,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62075MHz',
        frecuencyValue: 62075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62125MHz',
        frecuencyValue: 62125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62175MHz',
        frecuencyValue: 62175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62225MHz',
        frecuencyValue: 62225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62275MHz',
        frecuencyValue: 62275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62325MHz',
        frecuencyValue: 62325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62375MHz',
        frecuencyValue: 62375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62425MHz',
        frecuencyValue: 62425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62475MHz',
        frecuencyValue: 62475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62525MHz',
        frecuencyValue: 62525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62575MHz',
        frecuencyValue: 62575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62625MHz',
        frecuencyValue: 62625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62675MHz',
        frecuencyValue: 62675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62725MHz',
        frecuencyValue: 62725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62775MHz',
        frecuencyValue: 62775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62825MHz',
        frecuencyValue: 62825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62875MHz',
        frecuencyValue: 62875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62925MHz',
        frecuencyValue: 62925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '62975MHz',
        frecuencyValue: 62975,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63025MHz',
        frecuencyValue: 63025,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63075MHz',
        frecuencyValue: 63075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63125MHz',
        frecuencyValue: 63125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63175MHz',
        frecuencyValue: 63175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63225MHz',
        frecuencyValue: 63225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63275MHz',
        frecuencyValue: 63275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63325MHz',
        frecuencyValue: 63325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63375MHz',
        frecuencyValue: 63375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63425MHz',
        frecuencyValue: 63425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63475MHz',
        frecuencyValue: 63475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63525MHz',
        frecuencyValue: 63525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63575MHz',
        frecuencyValue: 63575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63625MHz',
        frecuencyValue: 63625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63675MHz',
        frecuencyValue: 63675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63725MHz',
        frecuencyValue: 63725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63775MHz',
        frecuencyValue: 63775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63825MHz',
        frecuencyValue: 63825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63875MHz',
        frecuencyValue: 63875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63925MHz',
        frecuencyValue: 63925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '63975MHz',
        frecuencyValue: 63975,
        bandWidth: '50MHz'
    },


    {
        frecuencyTitle: '64075MHz',
        frecuencyValue: 64075,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65025MHz',
        frecuencyValue: 65025,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64125MHz',
        frecuencyValue: 64125,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65075MHz',
        frecuencyValue: 65075,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64175MHz',
        frecuencyValue: 64175,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65125MHz',
        frecuencyValue: 65125,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64225MHz',
        frecuencyValue: 64225,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65175MHz',
        frecuencyValue: 65175,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64275MHz',
        frecuencyValue: 64275,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65225MHz',
        frecuencyValue: 65225,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64325MHz',
        frecuencyValue: 64325,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65275MHz',
        frecuencyValue: 65275,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64375MHz',
        frecuencyValue: 64375,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65325MHz',
        frecuencyValue: 65325,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64425MHz',
        frecuencyValue: 64425,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65375MHz',
        frecuencyValue: 65375,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64475MHz',
        frecuencyValue: 64475,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65425MHz',
        frecuencyValue: 65425,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64525MHz',
        frecuencyValue: 64525,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65475MHz',
        frecuencyValue: 65475,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64575MHz',
        frecuencyValue: 64575,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65525MHz',
        frecuencyValue: 65525,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64625MHz',
        frecuencyValue: 64625,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65575MHz',
        frecuencyValue: 65575,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64675MHz',
        frecuencyValue: 64675,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65625MHz',
        frecuencyValue: 65625,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64725MHz',
        frecuencyValue: 64725,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65675MHz',
        frecuencyValue: 65675,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64775MHz',
        frecuencyValue: 64775,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65725MHz',
        frecuencyValue: 65725,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64825MHz',
        frecuencyValue: 64825,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65775MHz',
        frecuencyValue: 65775,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64875MHz',
        frecuencyValue: 64875,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65825MHz',
        frecuencyValue: 65825,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64925MHz',
        frecuencyValue: 64925,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65875MHz',
        frecuencyValue: 65875,
        bandWidth: '50MHz'
    },

    {
        frecuencyTitle: '64975MHz',
        frecuencyValue: 64975,
        bandWidth: '50MHz'
    },
    {
        frecuencyTitle: '65925MHz',
        frecuencyValue: 65925,
        bandWidth: '50MHz'
    },


    {
        frecuencyTitle: '64025MHz',
        frecuencyValue: 64025,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65015MHz',
        frecuencyValue: 65015,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64055MHz',
        frecuencyValue: 64055,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65045MHz',
        frecuencyValue: 65045,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64085MHz',
        frecuencyValue: 64085,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65075MHz',
        frecuencyValue: 65075,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64115MHz',
        frecuencyValue: 64115,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65105MHz',
        frecuencyValue: 65105,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64145MHz',
        frecuencyValue: 64145,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65135MHz',
        frecuencyValue: 65135,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64175MHz',
        frecuencyValue: 64175,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65165MHz',
        frecuencyValue: 65165,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64205MHz',
        frecuencyValue: 64205,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65195MHz',
        frecuencyValue: 65195,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64235MHz',
        frecuencyValue: 64235,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65225MHz',
        frecuencyValue: 65225,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64265MHz',
        frecuencyValue: 64265,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65255MHz',
        frecuencyValue: 65255,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64295MHz',
        frecuencyValue: 64295,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65285MHz',
        frecuencyValue: 65285,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64325MHz',
        frecuencyValue: 64325,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65315MHz',
        frecuencyValue: 65315,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64355MHz',
        frecuencyValue: 64355,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65345MHz',
        frecuencyValue: 65345,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64385MHz',
        frecuencyValue: 64385,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65375MHz',
        frecuencyValue: 65375,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64415MHz',
        frecuencyValue: 64415,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65405MHz',
        frecuencyValue: 65405,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64445MHz',
        frecuencyValue: 64445,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65435MHz',
        frecuencyValue: 65435,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64475MHz',
        frecuencyValue: 64475,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65465MHz',
        frecuencyValue: 65465,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64505MHz',
        frecuencyValue: 64505,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65495MHz',
        frecuencyValue: 65495,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64535MHz',
        frecuencyValue: 64535,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65525MHz',
        frecuencyValue: 65525,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64565MHz',
        frecuencyValue: 64565,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65555MHz',
        frecuencyValue: 65555,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64595MHz',
        frecuencyValue: 64595,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65585MHz',
        frecuencyValue: 65585,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64625MHz',
        frecuencyValue: 64625,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65615MHz',
        frecuencyValue: 65615,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64655MHz',
        frecuencyValue: 64655,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65645MHz',
        frecuencyValue: 65645,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64685MHz',
        frecuencyValue: 64685,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65675MHz',
        frecuencyValue: 65675,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64715MHz',
        frecuencyValue: 64715,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65705MHz',
        frecuencyValue: 65705,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64745MHz',
        frecuencyValue: 64745,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65735MHz',
        frecuencyValue: 65735,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64775MHz',
        frecuencyValue: 64775,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65765MHz',
        frecuencyValue: 65765,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64805MHz',
        frecuencyValue: 64805,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65795MHz',
        frecuencyValue: 65795,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64835MHz',
        frecuencyValue: 64835,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65825MHz',
        frecuencyValue: 65825,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64865MHz',
        frecuencyValue: 64865,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65855MHz',
        frecuencyValue: 65855,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64895MHz',
        frecuencyValue: 64895,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65885MHz',
        frecuencyValue: 65885,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64925MHz',
        frecuencyValue: 64925,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65915MHz',
        frecuencyValue: 65915,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64955MHz',
        frecuencyValue: 64955,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65945MHz',
        frecuencyValue: 65945,
        bandWidth: '30MHz'
    },

    {
        frecuencyTitle: '64985MHz',
        frecuencyValue: 64985,
        bandWidth: '30MHz'
    },
    {
        frecuencyTitle: '65975MHz',
        frecuencyValue: 65975,
        bandWidth: '30MHz'
    },


    {
        frecuencyTitle: '71250MHz',
        frecuencyValue: 71250,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '73750MHz',
        frecuencyValue: 73750,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '71500MHz',
        frecuencyValue: 71500,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '74000MHz',
        frecuencyValue: 74000,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '71750MHz',
        frecuencyValue: 71750,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '74250MHz',
        frecuencyValue: 74250,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '72000MHz',
        frecuencyValue: 72000,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '74500MHz',
        frecuencyValue: 74500,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '72250MHz',
        frecuencyValue: 72250,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '74750MHz',
        frecuencyValue: 74750,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '72500MHz',
        frecuencyValue: 72500,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '75000MHz',
        frecuencyValue: 75000,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '72750MHz',
        frecuencyValue: 72750,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '75250MHz',
        frecuencyValue: 75250,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '73000MHz',
        frecuencyValue: 73000,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '75500MHz',
        frecuencyValue: 75500,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '73250MHz',
        frecuencyValue: 73250,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '75750MHz',
        frecuencyValue: 75750,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '81250MHz',
        frecuencyValue: 81250,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '83750MHz',
        frecuencyValue: 83750,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '81500MHz',
        frecuencyValue: 81500,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '84000MHz',
        frecuencyValue: 84000,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '81750MHz',
        frecuencyValue: 81750,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '84250MHz',
        frecuencyValue: 84250,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '82000MHz',
        frecuencyValue: 82000,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '84500MHz',
        frecuencyValue: 84500,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '82250MHz',
        frecuencyValue: 82250,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '84750MHz',
        frecuencyValue: 84750,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '82500MHz',
        frecuencyValue: 82500,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '85000MHz',
        frecuencyValue: 85000,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '82750MHz',
        frecuencyValue: 82750,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '85250MHz',
        frecuencyValue: 85250,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '83000MHz',
        frecuencyValue: 83000,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '85500MHz',
        frecuencyValue: 85500,
        bandWidth: '250MHz'
    },

    {
        frecuencyTitle: '83250MHz',
        frecuencyValue: 83250,
        bandWidth: '250MHz'
    },
    {
        frecuencyTitle: '85750MHz',
        frecuencyValue: 85750,
        bandWidth: '250MHz'
    },

]