// create 3 variables with related theme: D&D Character Generators
// Assign to an object
// const yourName = ['Thalytiera', 'Tharran', 'Renia', 'Saldrel', 'Eamarter']
// const race = ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf', 'Worgen']
// const spec  = ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Shaman']
//const specialisation = ['Arcane', 'Frost', 'Fire', 'Blood', 'Unholy', 'Retribution', 'Assasination']

const character = {
    name: ['Thalytiera', 'Tharran', 'Renia', 'Saldrel', 'Eamarter','Tarakrit', 'Rikaul'],
    race: ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf', 'Worgen'],
    spec: ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Shaman'],
}

const numberGen = num => {
    return Math.floor(Math.random() * num)
}


const nameGeneration = character.name[Math.floor(Math.random() * character.name.length)];
const raceGeneration = character.race[Math.floor(Math.random() * character.race.length)];
const specGeneration = character.spec[Math.floor(Math.random() * character.spec.length)];

const output = `You are ${nameGeneration}, the ${raceGeneration} ${specGeneration} `


console.log(output)



