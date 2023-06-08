import { LISTOFARMOR } from "../Resources/ListArmors"
import { LISTOFWEAPONS } from "../Resources/ListWeapons"
import { Ability } from "./Abilities"
import { Dices } from "./Dices"

type ArmorCategories = "Light Armor" | "Medium Armor" | "Heavy Armor" | "Shields"
type WeaponCategories = "Simple Weapons" | "Martial Weapons"

type WeaponsName = keyof typeof LISTOFWEAPONS
type ArmorsName = keyof typeof LISTOFARMOR


type InitialSpellCastersOptions = ["Arcane Focus", "Component's Pouch"]
type InitialSpellCastersOptions1 = "Druid Focus" | "Holy Symbol"
type InitialEquipmentOptions = WeaponsName | ArmorsName | WeaponCategories

type InitialEquipment = {
    1: [[number, InitialEquipmentOptions], [number, InitialEquipmentOptions]]
    2: [[number, InitialEquipmentOptions], [number, InitialEquipmentOptions]] | InitialSpellCastersOptions1
    3: EquipmentPack | [EquipmentPack, EquipmentPack]
    4?: string
}

type EquipmentPack = {
    name: string
    value: number
    items: string
}

type Damage = {
    dice: Dices
    damageType: "bludgeoning" | "piercing" | "slashing"
}

type Cost = [
    number,
    "cp" | "sp" | "ep" | "gp" | "ppc"
]

type PrimitiveEquipment<T = (ArmorCategories | WeaponCategories)> = {
    EquipmentName: string
    EquipmentType: T
    cost: Cost
    weight: number
    modifier?: Ability
}
type Armor = PrimitiveEquipment<ArmorCategories> & {
    caBase: number
    stealthDis: boolean
    limit?: number
    strength?: number
}

type WeaponProperties = {
    PropertyName: string
    PropertyDescription: string
    additional?: Function
    range?: number[]
    updateFields?: Function
}

type Weapon = PrimitiveEquipment<WeaponCategories> & {
    damage?: Damage
    Properties?: {
        [key: string]: Partial<WeaponProperties>
    }
}

export { ArmorCategories, WeaponCategories, InitialEquipment, EquipmentPack as EquipmentPack, Armor, WeaponProperties, Weapon }