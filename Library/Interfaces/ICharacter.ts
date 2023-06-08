import { Ability, Skills } from "../Types/Abilities"
import { Classes } from "../Types/CharacterClass"
import { Dices } from "../Types/Dices";
import { ICharacterClasses } from "./ICharacterClass";

export type AbilitiesMap = {
    [K in Ability]: number;
};

type SkillModifier<T extends keyof AbilitiesMap> = {
    value: number,
    prof: boolean,
    esp: boolean
    abilityType: T
}

export type SkillsMap = {
    Acrobatics: SkillModifier<"Dexterity">;
    AnimalHandling: SkillModifier<"Wisdom">;
    Arcana: SkillModifier<"Intelligence">;
    Athletics: SkillModifier<"Strength">;
    Deception: SkillModifier<"Charisma">;
    History: SkillModifier<"Intelligence">;
    Insight: SkillModifier<"Wisdom">;
    Intimidation: SkillModifier<"Charisma">;
    Investigation: SkillModifier<"Intelligence">;
    Medicine: SkillModifier<"Wisdom">;
    Nature: SkillModifier<"Intelligence">;
    Perception: SkillModifier<"Wisdom">;
    Performance: SkillModifier<"Charisma">;
    Persuasion: SkillModifier<"Charisma">;
    Religion: SkillModifier<"Intelligence">;
    SleightOfHand: SkillModifier<"Dexterity">;
    Stealth: SkillModifier<"Dexterity">;
    Survival: SkillModifier<"Wisdom">;
};

export interface ICharacter {
    name: string
    age: number
    class: ICharacterClasses
    abilities: AbilitiesMap
    die: Dices
    skills: SkillsMap
}