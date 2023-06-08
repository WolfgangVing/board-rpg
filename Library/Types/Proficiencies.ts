import { SkillsMap } from "../Interfaces/ICharacter"
import { Ability } from "./Abilities"
import { ArmorCategories, WeaponCategories } from "./BaseItens"
import { ClassSkill } from "./CharacterClass"

export type proficiencies = {
    saves: Ability["name"][],
    classSkills: SkillsMap,
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