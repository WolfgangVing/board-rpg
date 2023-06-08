import { AbilitiesMap, ICharacter, SkillsMap } from "../Interfaces/ICharacter";
import { Classes } from "../Types/CharacterClass";
import { Dices } from "../Types/Dices";
import { Skills } from "../Types/Abilities"
import { ICharacterClasses } from "../Interfaces/ICharacterClass";

const SkillsBase: AbilitiesMap = {
    Charisma: 8,
    Constitution: 8,
    Dexterity: 8,
    Intelligence: 8,
    Strength: 8,
    Wisdom: 8
}



export class Character implements ICharacter {
    private _name;
    private _age;
    private _class;
    private _abilities;
    private _die: Dices;
    private _skills: SkillsMap;

    protected function mapSkills(proficiences: ICharacterClasses["proficiences"]["classSkills"]["primary"]): SkillsMap {

    }
    constructor(
        name: string,
        age: number,
        characterClass: ICharacterClasses,
        abilities: AbilitiesMap = SkillsBase,
        // background: Background,
        skills: SkillsMap
    ) {
        this._name = name;
        this._age = age;
        this._class = characterClass;
        this._abilities = abilities;
        this._die = characterClass.die;

        this._skills
    }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }

    public get die(): Dices {
        return this._die;
    }
    public set die({ quantity, type = this._die.type }: Partial<Dices>) {
        if (quantity != undefined && type != undefined) {
            this._die = {
                type,
                quantity
            }
        } else if (quantity != undefined) {
            this._die.quantity = quantity
        }

    }

    public get class(): ICharacterClasses {
        return this._class
    }

    public get abilities(): AbilitiesMap {
        return this._abilities;
    }

    public get skills(): SkillsMap {
        return this._skills;
    }
    public set skills(value: SkillsMap) {
        this._skills = value;
    }
}