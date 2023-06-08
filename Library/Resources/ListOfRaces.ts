import { PickExtraAbility, Race } from '../Types/Races';
import { ListOfTools } from './Itens';
import { LISTOFWEAPONS } from './ListWeapons';


const LISTOFRACES: Race[] = [
    {
        name: 'Human',
        abilityScore: {
            Charisma: 1,
            Constitution: 1,
            Dexterity: 1,
            Intelligence: 1,
            Strength: 1,
            Wisdom: 1
        },
        ageStandard: [18, 100],
        size: [1.5, 1.8],
        speed: 7.5,
        languages: ['Common'],
        features: {},
        subRaces: {},
    },
    {
        name: 'Dwarf',
        abilityScore: { Strength: 2 },
        ageStandard: [50, 350],
        size: [1.2, 1.5],
        speed: 7.5,
        darkvision: 18,
        proficiencies: {
            Skills: ['Perception'],
            weapon: ['Battleaxe', 'Handaxe', 'Throwing Hammer', 'Warhammer'],
            tools: {
                category: 'Artisans',
                items: [
                    ListOfTools.Artisans.BrewersSupplies,
                    ListOfTools.Artisans.SmithsTools,
                    ListOfTools.Artisans.MasonsTools
                ]
            },
            armor: ['Light Armor', 'Medium Armor'],
        },
        languages: ['Common', 'Dwarvish'],
        features: {
            "Dwarven Resilience": `You have advantage on saving
            throws against poison, and you have resistance against
            poison damage`,
            "Dwarven Combat Training": `Vou have proficiency
            with the battleaxe, handaxe, throwing hammer,
            and warhammer.`,
            Darkvision: `Accustomed to life underground, you
            have superior vision in dark and dim conditions. Vou
            can see in dim light within 60 feet of you as if it were
            bright light, and in darkness as if it were dim light. Vou
            can't discern color in darkness, only shades of gray.`,
            ToolProficiency: `Vou gain proficiency with the
            artisan's tools of your choice: smith's tools, brewer's
            supplies, or mason's tools.`
        },
        subRaces: {
            HillDwarf: {
                abilityScore: { Wisdom: 1 },
                features: {
                    DwarvenToughness: `Your hit point maximum
                    increases by 1, and it increases by 1 every time you
                    gain a level.`
                }
            },
            MountainDwarf: {
                abilityScore: { Strength: 2 },
                proficiencies: {
                    armor: ["Light Armor", "Medium Armor"]
                }
            }
        },
    },
    {
        name: 'Elf',
        abilityScore: { Dexterity: 2 },
        ageStandard: [100, 750],
        size: [54, 74],
        speed: 7.5,
        darkvision: 18,
        proficiencies: {
            Skills: ['Perception']
        },
        languages: ['Common', 'Elvish'],
        features: {
            FeyAncestry: `Vou have advantage 00 saving throws
            against being charmed, and magic can't put you to sleep.`,
            Trance: `Elves don't need to sleep. Instead, they
            meditate deeply, remaining semiconscious, for 4
            hours a day. (The Common word for such meditation
            is "trance.") While meditation, you cao dream after a
            fashion; such dreams are actually mental exercises that
            have become reflexive through years of practice. After
            resting in this way, you gain the same benefit that a
            human does from 8 hours of sleep.`
        },
        subRaces: {
            HighElf: {
                abilityScore: {
                    Intelligence: 1
                },
                proficiencies: {
                    weapon: [
                        LISTOFWEAPONS.Longsword.EquipmentName,
                        LISTOFWEAPONS.Shortsword.EquipmentName,
                        LISTOFWEAPONS.Shortbow.EquipmentName,
                        LISTOFWEAPONS.Longbow.EquipmentName
                    ]
                },
                spellsKnown: `Vou know one Cantrip of your choice from
                lhe wizard spell list. Intelligence is your spellcasting
                ability for it.`,
                languages: ["Extra Language"]
            },
            WoodElf: {
                abilityScore: {
                    Wisdom: 1
                },
                proficiencies: {
                    weapon: [
                        LISTOFWEAPONS.Longsword.EquipmentName,
                        LISTOFWEAPONS.Shortsword.EquipmentName,
                        LISTOFWEAPONS.Shortbow.EquipmentName,
                        LISTOFWEAPONS.Longbow.EquipmentName
                    ]
                },
                speed: 10,
                features: {
                    MaskOfTheWild: `You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, 
                    falling snow, mist, and other natural phenomena`
                }
            }
        },
    },
    {
        name: "Gnome",
        abilityScore: {
            Intelligence: 2
        },
        ageStandard: [40, 350],
        size: [0.9, 1.2],
        speed: 7.5,
        darkvision: 18.0,
        features: {
            GnomeCunning: "You have advantage on all Intelligence, Wisdom, and Charisma saves against magic."
        },
        languages: ["Common", "Gnomish"],
        subRaces: {
            Forest: {
                abilityScore: { Dexterity: 1 },
                spellsKnown: "You know the Minor Illusion cantrip. Intelligence is your spellcasting modifier for it.",
                features: {
                    SpeakWithSmallBeasts: "Through sound and gestures, you may communicate simple ideas with Small or smaller beasts."
                }
            },
            Rock: {
                abilityScore: { Constitution: 1 },
                features: {
                    ArtificersLore: `Whenever you make an Intelligence (History) check related to magical, alchemical, or technological items, 
                    you can add twice your proficiency bonus instead of any other proficiency bonus that may apply.`,
                    Tinker: `You have proficiency with artisan tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a 
                    Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. 
                    You can have up to three such devices active at a time. When you create a device, choose one of the following options:
                    1. Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.
                    2. Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.
                    3. Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.
                    At your DM's discretion, you may make other objects with effects similar in power to these. The Prestidigitation cantrip is a good baseline for such effects.`
                },
                proficiencies: {
                    tools: {
                        category: "Artisans",
                        items: [
                            ListOfTools.Artisans.BrewersSupplies,
                            ListOfTools.Artisans.SmithsTools,
                            ListOfTools.Artisans.MasonsTools
                        ]
                    }
                }
            }
        }
    },
    {
        name: "Half-Elf",
        abilityScore: {
            Charisma: 2
        },
        ageStandard: [20, 180],
        size: [1.5, 1.8],
        languages: [
            "Common", "Elvish", "Extra Language"
        ],
        speed: 9,
        darkvision: 18,
        features: {
            FeyAncestry: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
            pickExtraAbility: true
        },
        numberOfExtraAbility: 2
    },
    {
        name: "Half-Orc",
        abilityScore: {
            Strength: 2,
            Constitution: 1
        },
        ageStandard: [14, 75],
        size: [1.5, 1.8],
        speed: 9,
        darkvision: 18,
        proficiencies: {
            Skills: ["Intimidation"]
        },
        features: {
            RelentlessEndurance: `When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. 
            You can't use this feature again until you finish a long rest.`,
            SavageAttack: `When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one 
            additional time and add it to the extra damage of the critical hit.`
        },
        languages: ["Common", "Orc"]
    },
    {
        name: "Halfling",
        abilityScore: {
            Dexterity: 2
        },
        ageStandard: [20, 230],
        size: [0.9, 1],
        speed: 7.5,
        languages: ["Common", "Halfling"],
        features: {
            Lucky: `When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. 
            You must use the new result, even if it is a 1.`,
            Brave: `You have advantage on saving throws against being frightened.`,
            Nimble: `You can move through the space of any creature that is of a size larger than yours.`
        },
        subRaces: {
            Lightfoot: {
                abilityScore: {
                    Charisma: 1
                },
                features: {
                    NaturallyStealthy: `You can attempt to hide even when you are only obscured by a creature that is at least one size larger than you.`
                }
            },

        }
    },
    {
        name: "Tiefling",
        abilityScore: {
            Charisma: 2,
            Intelligence: 1
        },
        ageStandard: [18, 120],
        size: [1.5, 1.8],
        speed: 9,
        languages: ["Common", "Infernal"],
        darkvision: 18,
        features: {
            HellishResistance: `You have resistance to fire damage.`,
        },
        spellsKnown: `Infernal Legacy. You know the Thaumaturgy cantrip. Once you reach 3rd level, you can cast the Hellish Rebuke spell once as a 2nd-level spell. 
        Once you reach 5th level, you can also cast the Darkness spell once. 
        You must finish a long rest to cast these spells again with this trait. 
        Charisma is your spellcasting ability for these spells.`
    }
    // Add more race objects for other races in the Player's Handbook
];

const HALFELF: Race = {
    name: "Half-Elf",
    abilityScore: {
        Charisma: 2
    },
    ageStandard: [20, 180],
    size: [1.5, 1.8],
    languages: [
        "Common", "Elvish", "Extra Language"
    ],
    speed: 9,
    darkvision: 18,
    features: {
        FeyAncestry: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
        pickExtraAbility: true
    },
    numberOfExtraAbility: 2
};


// export default races;
export { LISTOFRACES, HALFELF }
