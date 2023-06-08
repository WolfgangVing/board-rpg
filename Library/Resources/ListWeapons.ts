import { Weapon } from "../Types/BaseItens"
import { LISTOFWEAPONPROPERTIES } from "./BaseWeaponProperties"
import { Dices } from "../Types/Dices"


type Currency = "cp" | "sp" | "gp" | "ppl"

const RangesDistance = {
    Short: [6, 18],
    Medium: [9, 36],
    Long: [24, 97]
}

const Club: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Club",
    cost: [1, "sp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "bludgeoning",
    },
    weight: 0.907, // Converted to kilograms,
    Properties: {
        Light: LISTOFWEAPONPROPERTIES.Light
    }

}

const Dagger: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Dagger",
    cost: [2, "gp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "piercing",
    },
    weight: 0.454, // Converted to kilograms,
    Properties: {
        Finesse: LISTOFWEAPONPROPERTIES.Finesse,
        Light: LISTOFWEAPONPROPERTIES.Light,
        Thrown: {
            ...LISTOFWEAPONPROPERTIES.Thrown,
            range: [6, 18]
        }
    },
}

const GreatClub: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Greatclub",
    cost: [2, "sp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "bludgeoning",
    },
    Properties: {
        "Great Club": LISTOFWEAPONPROPERTIES.GreatClub
    },
    weight: 4.536, // Converted to kilograms
}

const Handaxe: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Handaxe",
    cost: [5, "gp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "slashing",
    },
    Properties: {
        Light: LISTOFWEAPONPROPERTIES.Light,
        Thrown: {
            ...LISTOFWEAPONPROPERTIES.Thrown,
            range: RangesDistance.Short
        }
    },
    weight: 0.907, // Converted to kilograms
}

const Javelin: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Javelin",
    cost: [5, "sp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "piercing",
    },
    Properties: {
        Thorwn: {
            ...LISTOFWEAPONPROPERTIES.Thorwn,
            range: [9, 36]
        }
    },
    weight: 0.907, // Converted to kilograms
}
const LightHammer: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Light hammer",
    cost: [2, "gp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "bludgeoning",
    },
    Properties: {
        Light: LISTOFWEAPONPROPERTIES.Light,
        Thrown: {
            ...LISTOFWEAPONPROPERTIES.Thrown,
            range: RangesDistance.Short
        }
    },
    weight: 0.907, // Converted to kilograms
}

const Mace: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Mace",
    cost: [5, "gp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "bludgeoning",
    },
    weight: 1.814, // Converted to kilograms
}

const Quarterstarff: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Quarterstaff",
    cost: [2, "sp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "bludgeoning",
    },
    Properties: {
        Versatile: LISTOFWEAPONPROPERTIES.Versatile
    },
    weight: 1.814, // Converted to kilograms
}

const Sickle: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Sickle",
    cost: [1, "gp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "slashing",
    },
    Properties: {
        Light: LISTOFWEAPONPROPERTIES.Light
    },
    weight: 0.907, // Converted to kilograms
}

const Spear: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Spear",
    cost: [1, "gp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "piercing",
    },
    Properties: {
        Thrown: {
            ...LISTOFWEAPONPROPERTIES.Thrown,
            range: RangesDistance.Short
        }
    },

    weight: 1.361, // Converted to kilograms
}

const CrossbowLight: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Crossbow, light",
    cost: [25, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "piercing",
    },
    weight: 2.72,
    Properties: {
        Ammunition: LISTOFWEAPONPROPERTIES.Ammunition,
        Loading: LISTOFWEAPONPROPERTIES.Loading,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Dart: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Dart",
    cost: [5, "cp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "piercing",
    },
    weight: 0.0454,
    Properties: {
        Finesse: LISTOFWEAPONPROPERTIES.Finesse,
        Thrown: {
            ...LISTOFWEAPONPROPERTIES.Thrown,
            range: [20, 60],
        },
    },
};

const Shortbow: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Shortbow",
    cost: [25, "gp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "piercing",
    },
    weight: 1.814,
    Properties: {
        Ammunition: LISTOFWEAPONPROPERTIES.Ammunition,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Sling: Weapon = {
    EquipmentType: "Simple Weapons",
    EquipmentName: "Sling",
    cost: [1, "sp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "bludgeoning",
    },
    weight: 0.0454,
    Properties: {
        Ammunition: {
            ...LISTOFWEAPONPROPERTIES.Ammunition,
            range: [9, 36]
        },
    },
};

const Battleaxe: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Battleaxe",
    cost: [10, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "slashing",
    },
    weight: 2.268,
    Properties: {
        Versatile: LISTOFWEAPONPROPERTIES.Versatile,
    },
};

const Flail: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Flail",
    cost: [10, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "bludgeoning",
    },
    weight: 2.268,
};

const Glaive: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Glaive",
    cost: [20, "gp"],
    damage: {
        dice: {
            type: "1d10"
        },
        damageType: "slashing",
    },
    weight: 2.722,
    Properties: {
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        Reach: LISTOFWEAPONPROPERTIES.Reach,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Greataxe: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Greataxe",
    cost: [30, "gp"],
    damage: {
        dice: {
            type: "1d12"
        },
        damageType: "slashing",
    },
    weight: 3.628,
    Properties: {
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Greatsword: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Greatsword",
    cost: [50, "gp"],
    damage: {
        dice: {
            type: "1d6",
            quantity: 2
        },
        damageType: "slashing",
    },
    weight: 2.722,
    Properties: {
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Halberd: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Halberd",
    cost: [20, "gp"],
    damage: {
        dice: {
            type: "1d10"
        },
        damageType: "slashing",
    },
    weight: 3.628,
    Properties: {
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        Reach: LISTOFWEAPONPROPERTIES.Reach,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Lance: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Lance",
    cost: [10, "gp"],
    damage: {
        dice: {
            type: "1d12"
        },
        damageType: "piercing",
    },
    weight: 3.628,
    Properties: {
        Reach: LISTOFWEAPONPROPERTIES.Reach,
        Special: LISTOFWEAPONPROPERTIES.Special,
    },
};

const Longsword: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Longsword",
    cost: [15, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "slashing",
    },
    weight: 1.814,
    Properties: {
        Versatile: LISTOFWEAPONPROPERTIES.Versatile,
    },
};

const Maul: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Maul",
    cost: [10, "gp"],
    damage: {
        dice: {
            type: "1d6",
            quantity: 2
        },
        damageType: "bludgeoning",
    },
    weight: 4.536,
    Properties: {
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Morningstar: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Morningstar",
    cost: [15, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "piercing",
    },
    weight: 1.814,
};

const Pike: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Pike",
    cost: [5, "gp"],
    damage: {
        dice: {
            type: "1d10"
        },
        damageType: "piercing",
    },
    weight: 8.164,
    Properties: {
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        Reach: LISTOFWEAPONPROPERTIES.Reach,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Rapier: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Rapier",
    cost: [25, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "piercing",
    },
    weight: 1.814,
    Properties: {
        Finesse: LISTOFWEAPONPROPERTIES.Finesse,
    },
};

const Scimitar: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Scimitar",
    cost: [25, "gp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "slashing",
    },
    weight: 0.907,
    Properties: {
        Finesse: LISTOFWEAPONPROPERTIES.Finesse,
        Light: LISTOFWEAPONPROPERTIES.Light,
    },
};

const Shortsword: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Shortsword",
    cost: [10, "gp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "piercing",
    },
    weight: 0.907,
    Properties: {
        Finesse: LISTOFWEAPONPROPERTIES.Finesse,
        Light: LISTOFWEAPONPROPERTIES.Light,
    },
};

const Trident: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Trident",
    cost: [5, "gp"],
    damage: {
        dice: {
            type: "1d6"
        },
        damageType: "piercing",
    },
    weight: 1.814,
    Properties: {
        Thrown: {
            ...LISTOFWEAPONPROPERTIES.Thrown,
            range: [20, 60],
        },
        Versatile: LISTOFWEAPONPROPERTIES.Versatile,
    },
};

const WarPick: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "War pick",
    cost: [5, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "piercing",
    },
    weight: 1.814,
};

const Warhammer: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Warhammer",
    cost: [15, "gp"],
    damage: {
        dice: {
            type: "1d8"
        },
        damageType: "bludgeoning",
    },
    weight: 1.814,
    Properties: {
        Versatile: LISTOFWEAPONPROPERTIES.Versatile,
    },
};

const Whip: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Whip",
    cost: [2, "gp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "slashing",
    },
    weight: 1.361,
    Properties: {
        Finesse: LISTOFWEAPONPROPERTIES.Finesse,
        Reach: LISTOFWEAPONPROPERTIES.Reach,
    },
};

const Blowgun: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Blowgun",
    cost: [10, "gp"],
    damage: {
        dice: {
            type: "1d4"
        },
        damageType: "piercing",
    },
    weight: 0.907,
    Properties: {
        Ammunition: LISTOFWEAPONPROPERTIES.Ammunition,
        Loading: LISTOFWEAPONPROPERTIES.Loading,
    },
};

const CrossbowHand: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Crossbow, hand",
    cost: [75, "gp"],
    damage: {
        dice: { type: "1d6" },
        damageType: "piercing",
    },
    weight: 1.814,
    Properties: {
        Ammunition: LISTOFWEAPONPROPERTIES.Ammunition,
        Light: LISTOFWEAPONPROPERTIES.Light,
        Loading: LISTOFWEAPONPROPERTIES.Loading,
    },
};

const CrossbowHeavy: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Crossbow, heavy",
    cost: [50, "gp"],
    damage: {
        dice: { type: "1d10" },
        damageType: "piercing",
    },
    weight: 9.072,
    Properties: {
        Ammunition: LISTOFWEAPONPROPERTIES.Ammunition,
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        Loading: LISTOFWEAPONPROPERTIES.Loading,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Longbow: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Longbow",
    cost: [50, "gp"],
    damage: {
        dice: { type: "1d8" },
        damageType: "piercing",
    },
    weight: 2.268,
    Properties: {
        Ammunition: LISTOFWEAPONPROPERTIES.Ammunition,
        Heavy: LISTOFWEAPONPROPERTIES.Heavy,
        TwoHanded: LISTOFWEAPONPROPERTIES.TwoHanded,
    },
};

const Net: Weapon = {
    EquipmentType: "Martial Weapons",
    EquipmentName: "Net",
    cost: [1, "gp"],
    weight: 1.814,
    Properties: {
        Special: LISTOFWEAPONPROPERTIES.Special,
        Thrown: {
            ...LISTOFWEAPONPROPERTIES.Thrown,
            range: [5, 15],
        },
    },
};

export const LISTOFWEAPONS = {
    Battleaxe,
    Blowgun,
    Club,
    CrossbowHand,
    CrossbowHeavy,
    CrossbowLight,
    Dagger,
    Dart,
    Flail,
    Glaive,
    GreatClub,
    Greataxe,
    Greatsword,
    Halberd,
    Handaxe,
    Javelin,
    Net,
    Sling,
    Shortbow,
    Spear,
    Sickle,
    Quarterstarff,
    Mace,
    LightHammer,
    Longbow,
    Whip,
    Lance,
    Longsword,
    Maul,
    Morningstar,
    Pike,
    Rapier,
    Scimitar,
    Shortsword,
    Trident,
    WarPick,
    Warhammer,
}