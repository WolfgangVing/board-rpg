<template setup>
  <div>
    <h1>Hi</h1>
    <Sheet />
  </div>
</template>

<script setup>
import { Dagger } from "~/Library/Resources/ListWeapons";
import { Character } from '~/Library/Classes/Character';
import { Warlock } from "~/Library/Resources/ListOfClasses"


const character = new Character("Wolfgang", 30, Warlock, {
  Charisma: 18,
  Constitution: 10,
  Dexterity: 14,
  Intelligence: 14,
  Strength: 8,
  Wisdom: 13
})
</script>
