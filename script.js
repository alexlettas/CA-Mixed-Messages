// create 3 variables with related theme: D&D Character Generators
// Assign to an object
const yourName = ['Thalytiera', 'Tharran', 'Renia', 'Saldrel', 'Eamarter']
const race = ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf', 'Worgen']
const spec  = ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Shaman']
//const specialisation = ['Arcane', 'Frost', 'Fire', 'Blood', 'Unholy', 'Retribution', 'Assasination']

const character = {
    name: yourName,
    race: race,
    spec: spec,
}

const numberGen = num => {
    return Math.floor(Math.random() * num)
}


const nameGeneration = character.name[numberGen(character.name.length)];
const raceGeneration = character.race[numberGen(character.race.length)];
const specGeneration = character.spec[numberGen(character.spec.length)];

const output = `You are ${nameGeneration}, the ${raceGeneration} ${specGeneration} `


console.log(output)



