// create 3 variables with related theme: D&D Character Generators
// Assign to an object
const yourName = ['Razor Wardell', 'Thalytiera', 'Tharran', 'Renia', 'Saldrel, Eamarter', 'Alelas', 'Tarakrit', 'Reyna']
const race = ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf']
const spec  = ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Demon Hunter', 'Monk']

const character = {
name: yourName,
race: race,
spec: spec
}

const numberGen = num => {
    return Math.floor(Math.random() * num)
}

