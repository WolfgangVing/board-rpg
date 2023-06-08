import { ErrorCodes } from "nuxt/dist/app/compat/capi"
import { WeaponProperties } from "../Types/BaseItens"

function AddRange(minRange: number, maxRange: number) {
    if (minRange > maxRange) return console.log("Minimum Range can't be higher than Maximum Range")
}

const LISTOFWEAPONPROPERTIES: {
    [PropertyName: string]: 
    WeaponProperties
} = {
    Ammunition: {
        PropertyName: "Ammunition",
        PropertyDescription: `Vou can use a weapon thal has the
        ammunition property to make a ranged attack only if
        you have ammunition to fire from the weapon. Each
        time you attack with the weapon, you expend one piece
        of ammunition. Drawing the ammunition from a quiver,
        case, or other container is part of the attack. At the
        end of the battle, you can recover half your expended
        ammunition by taking a minute to search the battlefield.
        If you use a weapon that has the ammunition property
        to make a melee attack, you treat the weapon as an
        improvised weapon. A sling must be loaded to deal any damage
        when used in this way.`
    },
    Heavy: {
        PropertyName: "Heavy",
        PropertyDescription: `Small creatures have disadvantage on attack
            rolls with heavy weapons. A heavy weapon's size and
            bulk make it toa large for a Small creature to use
            effectively.`
    },
    Light: {
        PropertyName: "Light",
        PropertyDescription: `A light weapon is small and easy to handle,
            making it ideal for use when fighting with two weapons.
            See the rules for two-weapon fighting in chapter 9.`
    },
    Loading: {
        PropertyName: "Loading",
        PropertyDescription: `Because of the time required to load this
            weapon, you can fire only one piece of ammunition
            from it when you use an action, bonus action, or reaction
            to fire it, regardless of the number of attacks you can
            normally make.`
    },
    Reach: {
        PropertyName: "Reach",
        PropertyDescription: `This weapon adds 5 feet to your reach when
        you attack with it.`
    },
    Special: {
        PropertyName: "Special",
        PropertyDescription: ` A weapon with the special property has
            unusual rules governing its use, explained in the
            weapon's description (see "Special Weapons" later in
            this section).`
    },
    Thrown: {
        PropertyName: "Thrown",
        range: [0, 0],
        PropertyDescription: `If a weapon has the thrown property, you
            can throw the weapon to make a ranged attack. If the
            weapon is a melee weapon, you use the same ability
            modifier for that attack roll and damage roll that you
            would use for a melee attack with the weapon. For
            example, if you throw a handaxe, you use your Strength,
            but if you throw a dagger, you can use either your
            Strength or your Dexterity, since the dagger has the
            finesse property`,
        updateFields: function (updateRange: Partial<WeaponProperties["range"]>) {
            return{
                ...this,
                range: updateRange
            }
        }
    },
    TwoHanded: {
        PropertyName: "TwoHanded",
        PropertyDescription: `This weapon requires two hands to use.`
    },
    Versatile: {
        PropertyName: "Versatile",
        PropertyDescription: `This weapon can be used with one or two
            hands. A damage value in parentheses appears with the
            property the damage when the weapon is used with
            two hands to make a melee attack.`
    },
    Finesse: {
        PropertyName: "Finesse",
        PropertyDescription: `When making an attack with a finesse
            weapon, you use your choice of your Strength or
            Dexterity modifier for the attack and damage rolls.Vou
            must use the same modifier for both rolls.`
    },
}

export { LISTOFWEAPONPROPERTIES }