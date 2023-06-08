export type Ability = "Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma"

export type Skills = {
    name: "Acrobatics" | "Animal Handling"
    | "Arcana" | "Athletics" | "Deception"
    | "History" | "Insight" | "Intimidation"
    | "Investigation" | "Medicine" | "Nature"
    | "Perception" | "Performance" | "Persuasion"
    | "Religion" | "Sleight of Hand" | "Stealth" | "Survival",
    value: number
}