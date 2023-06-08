import { Armor, ArmorCategories } from "../Types/BaseItens"

const Padded: Armor = {
    EquipmentName: "Padded",
    EquipmentType: "Light Armor",
    cost: [5, "gp"],
    caBase: 11,
    modifier: "Dexterity",
    stealthDis: true,
    weight: 3.63
}
const Leather: Armor = {
    EquipmentName: "Leather",
    EquipmentType: "Light Armor",
    cost: [10, "gp"],
    caBase: 11,
    modifier: "Dexterity",
    weight: 4.53,
    stealthDis: false,
}

const StuddedLeather: Armor = {
    EquipmentName: "StuddedLeather",
    EquipmentType: "Light Armor",
    cost: [45, "gp"],
    caBase: 12,
    modifier: "Dexterity",
    weight: 5.9,
    stealthDis: false,
}

const Hide: Armor = {
    EquipmentName: "Hide",
    EquipmentType: "Light Armor",
    cost: [10, "gp"],
    caBase: 12,
    modifier: "Dexterity",
    weight: 5.4,
    stealthDis: false,
    limit: 2,
}

const Chain_Shirt: Armor = {
    EquipmentName: "Chain Shirt",
    EquipmentType: "Light Armor",
    cost: [50, "gp"],
    caBase: 13,
    modifier: "Dexterity",
    weight: 9,
    stealthDis: false,
    limit: 2,
}

const Scale_Mail: Armor = {
    EquipmentName: "Scale Mail",
    EquipmentType: "Light Armor",
    cost: [50, "gp"],
    caBase: 14,
    modifier: "Dexterity",
    weight: 20.4,
    stealthDis: true,
}

const Breastplate: Armor = {
    EquipmentName: "Breastplate",
    EquipmentType: "Medium Armor",
    cost: [400, "gp"],
    caBase: 14,
    modifier: "Dexterity",
    stealthDis: false,
    weight: 9,
    limit: 2
}

const Half_Plate: Armor = {
    EquipmentName: "Half plate",
    EquipmentType: "Medium Armor",
    cost: [750, "gp"],
    caBase: 15,
    modifier: "Dexterity",
    weight: 18.14,
    stealthDis: true,
}
const Ring_Mail: Armor = {
    EquipmentName: "Ring mail",
    EquipmentType: "Heavy Armor",
    cost: [30, "gp"],
    caBase: 14,
    stealthDis: false,
    weight: 18.14,
}

const Chain_Mail: Armor = {
    EquipmentName: "Chain Mail",
    EquipmentType: "Heavy Armor",
    cost: [75, "gp"],
    caBase: 16,
    strength: 13,
    stealthDis: true,
    weight: 24.9,
}
const Splint: Armor = {
    EquipmentName: "Splint",
    EquipmentType: "Heavy Armor",
    cost: [200, "gp"],
    caBase: 17,
    strength: 15,
    stealthDis: true,
    weight: 27.2,
}

const Plate: Armor = {
    EquipmentName: "Plate",
    EquipmentType: "Heavy Armor",
    cost: [1500, "gp"],
    caBase: 18,
    strength: 15,
    stealthDis: true,
    weight: 29.5,
}


export const LISTOFARMOR = {
    Half_Plate,
    Breastplate,
    Scale_Mail,
    Chain_Shirt,
    Hide,
    StuddedLeather,
    Leather,
    Padded,
    Ring_Mail,
    Chain_Mail,
    Splint,
    Plate,
}