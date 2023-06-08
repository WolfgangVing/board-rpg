import { Ability, Skills } from "./Abilities"
import { ArmorCategories, InitialEquipment, WeaponCategories } from "./BaseItens"
import { Dices } from "./Dices"
import { Sources } from "./Sources"

export type Classes = {
    name: string
    primaryAbility: Ability[],
    preReq: [Ability, number]
    improvements: number[]
    die: Dices["type"]
    proficiencies: {
        saves: Ability[],
        classSkills: ClassSkill,
        armorProfs: {
            primary: ArmorCategories[]
            secondary?: ArmorCategories[]
        },
        weaponProfs: {
            primary: [
                WeaponCategories[],
                string?
            ]
            secondary?: [
                WeaponCategories[],
                string?
            ]
        },
        toolsProfs?: string
    }
    equipment: InitialEquipment
    subClasses: [string, SubClass]
    attacks: number[]
    features: ClassFeatures[]
    spellSlots?: number[]
    spellKnown?: SpellsKnown
}

type ClassSkill = {
    primary: {
        skills: Skills["name"][],
        amount: number
    }
    secondary?: {
        skills: Skills["name"][],
        amount: number
    }
}

type SubClass = {
    name: string
    description: string
}

type ClassFeatures = {
    name: string
    description: string[]
    minLevel: number
    choices?: Object[]
    aditional?: Function
    armorAdd?: Function
    usage?: number[]
    recovery: "Short" | "Long" | "Dawn"
}

type SpellsKnown = {
    cantrips: number[],
    spells: number[]
}

export {
    SpellsKnown,
    ClassFeatures,
    SubClass,
    Skills,
    ClassSkill,
}