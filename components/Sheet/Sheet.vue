<template>
    <div class="player-sheet">
        <h1>{{ character.name }}</h1>
        <div class="ability">
            <div class="stat">
                <label>Strength:</label>
                <span>{{ character.abilities.Strength }}</span>
            </div>
            <div class="stat">
                <label>Dexterity:</label>
                <span>{{ character.abilities.Dexterity }}</span>
            </div>
            <div class="stat">
                <label>Constitution:</label>
                <span>{{ character.abilities.Constitution }}</span>
            </div>
            <div class="stat">
                <label>Intelligence:</label>
                <span>{{ character.abilities.Intelligence }}</span>
            </div>
            <div class="stat">
                <label>Wisdom:</label>
                <span>{{ character.abilities.Wisdom }}</span>
            </div>
            <div class="stat">
                <label>Charisma:</label>
                <span>{{ character.abilities.Charisma }}</span>
            </div>
        </div>
        <!-- <div class="skills">
            <h2>Skills</h2>
            <ul>
                <li v-for="skill in character.skills" :key="skill.name">
                    {{ skill.name }}: {{ skill.value }}
                </li>
            </ul>
        </div> -->
        <!-- Add more sections as needed -->
    </div>
</template>
  
<script setup>
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
