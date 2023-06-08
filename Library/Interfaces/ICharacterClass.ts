import { Ability } from "../Types/Abilities"
import { ArmorCategories, InitialEquipment, WeaponCategories } from "../Types/BaseItens"
import { ClassFeatures, ClassSkill, SpellsKnown, SubClass } from "../Types/CharacterClass"
import { Dices } from "../Types/Dices"


interface ICharacterClasses {
    name: string
    primaryAbility: Ability
    preReq: [Ability, number]
    improvements: number[]
    die: Dices
    proficiences: {
        saves: Ability[],
        classSkills: ClassSkill[],
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
        }
        toolsProfs?: string
    }
    equipment: InitialEquipment
    subClasses: [string, SubClass]
    attacks: number[]
    features: ClassFeatures[]
    spellSlots?: number[]
    spellKnown: SpellsKnown
}

export { ICharacterClasses }