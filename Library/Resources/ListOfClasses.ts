import { ICharacterClasses } from "../Interfaces/ICharacterClass";
import { Classes } from "../Types/CharacterClass";
import { BurglarEP, DungeoneerEP, ExplorerEP, ScholarEP } from "./ListOfEquipamentPacks";


const Warlock: Classes = {
    name: "Warlock",
    primaryAbility: ["Charisma"],
    proficiencies: {
        saves: ["Charisma", "Wisdom"],
        weaponProfs: {
            primary: [
                ["Simple Weapons"]
            ],
            secondary: [
                ["Simple Weapons"]
            ]
        },
        armorProfs: {
            primary: ["Light Armor"],
            secondary: ["Light Armor"]
        },
        classSkills: {
            primary: {
                skills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
                amount: 2
            }
        },
    },
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    die: "1d8",
    //FIXME: Add the correct equipment list.
    equipment: {
        1: [
            [1, "CrossbowLight"], [1, "Simple Weapons"]
        ],
        2: [
            "Arcane Focus", "Component's Pouch"
        ],
        3: [ScholarEP, DungeoneerEP],
        4: "Leather armor, any simple weapon, and two daggers"
    },
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellKnown: {
        cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spells: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15]
    },
    //TODO: Add the rest of Warlock's spells levels slots.
    spellSlots: [1, 1, 1, 1],
    features: [],
    subClasses: ["asas", { name: "asdas", description: "asdasdasd" }],
    preReq: ["Charisma", 13]
}

const Barbarian: Classes = {
    name: "Barbarian",
    primaryAbility: ["Strength"],
    preReq: ["Strength", 13],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    die: "1d12",
    proficiencies: {
        saves: ["Strength", "Constitution"],
        classSkills: {
            primary: {
                skills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
                amount: 2
            }
        },
        armorProfs: {
            primary: ["Light Armor", "Medium Armor", "Shields"],
            secondary: ["Shields"]
        },
        weaponProfs: {
            primary: [
                ["Martial Weapons", "Simple Weapons"]
            ],
            secondary: [
                ["Martial Weapons", "Simple Weapons"]
            ]
        }
    },
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features: [
        {
            name: "Rage",
            minLevel: 1,
            description: [
                "Start/end as bonus action; add damage to melee weapons that use Str; lasts 1 min",
                "Adv. on Strength checks/saves (not attacks); resistance to bludgeoning/piercing/slashing",
                "Stops if I end turn without attacking or taking damage since last turn, or unconscious",
            ],
            recovery: "Long",
            usage: [2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6],
        }
    ],
    equipment: {
        1: [
            [1, "Greataxe"], [1, "Martial Weapons"]
        ],
        2: [
            [2, "Handaxe"], [1, "Simple Weapons"]
        ],
        3: ExplorerEP,
    },
    subClasses: ["str", { name: "asuhahs", description: "aushauhsuahs" }]
}


export { Warlock, Barbarian }