import { AbilitiesMap } from "../Interfaces/ICharacter";
import { ListOfTools } from "../Resources/Itens";
import { Language } from "../Resources/Languages";
import { Ability, Skills } from "./Abilities";
import { ArmorCategories, Weapon, WeaponCategories } from "./BaseItens";
import { SpellsKnown } from "./CharacterClass";
import { Items, Tools, ToolsCategories, ToolsOptions } from "./Tools";


type ConstrainedTools = {
    category: ToolsCategories;
    tools: {
        [name in keyof ToolsOptions]: ToolsOptions[name];
    };
};

export type Race = {
    name: string;
    abilityScore: Partial<AbilitiesMap>;
    ageStandard: [number, number];
    size: [number, number];
    speed: number;
    darkvision?: number;
    proficiencies?: Partial<{
        Skills: Skills["name"][],
        weapon: WeaponCategories[] | Weapon["EquipmentName"][],
        tools: {
            category: ToolsCategories,
            items: Items[]
        }
        armor: ArmorCategories[],
    }>
    languages: Language[];
    features: {
        [name: string]: string | boolean,
    };
    subRaces?: {
        [subRaceName: string]: Partial<Race>
    },
    spellsKnown?: string,
    numberOfExtraAbility?: number
};

export function PickExtraAbility(this: Race, args1: Ability, args2?: Ability, value?: number): void {
    value = (value !== undefined) ? value : 1;
    const pickedAbilities = (args2 !== undefined) ?
        {
            [args1]: value,
            [args2]: value
        } : {
            [args1]: value
        }
    this.abilityScore = Object.assign(this.abilityScore, pickedAbilities)
}