// create 3 variables with related theme: D&D Character Generators
// Assign to an object
const yourName = ['Thalytiera', 'Tharran', 'Renia', 'Saldrel', 'Eamarter']
const race = ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf', 'Worgen']
const spec  = ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Shaman', 'Monk', 'Hunter', 'Demon Hunter', 'Druid']
//defining core character + class

const mageSpec = ['Arcane', 'Frost', 'Fire']
const warlockSpec = ['Destruction', 'Demonology', 'Affliction']
const priestSpec = ['Shadow', 'Holy', 'Discipline']
const rogueSpec = ['Assassination', 'Outlaw', 'Subtlety']
const deathKnightSpec = ['Blood','Frost', 'Unholy']
const paladinSpec = ['Protection, Retribution', 'Holy']
const shamanSpec = ['Elemental', 'Enhancement', 'Restoration']
const monkSpec = ['Brewmaster', 'Mistweaver', 'Windwalker']
const hunterSpec = ['Beast Mastery', 'Marksmanship', 'Survival']
const demonHunterSpec = ['Vengeance', 'Havoc']
const druidSpec = ['Balance', 'Feral', 'Guardian', 'Restoration']

//defining specialisation of each spec


const character = {
    name: yourName,
    race: race,
    spec: spec,
    specialisation: {
        mage: mageSpec,
        warlock: warlockSpec,
        priest: priestSpec,
        rogue: rogueSpec,
        deathKnight: deathKnightSpec,
        paladin: paladinSpec,
        shaman: shamanSpec,
        monk: monkSpec,
        hunter: hunterSpec,
        demonHunter: demonHunterSpec,
        druid: druidSpec
    }
}
//combining all class components into an object

const numberGen = num => {
    return Math.floor(Math.random() * num)
}
//number generator to randomly select values from each item in character object

const nameGeneration = character.name[numberGen(character.name.length)];
const raceGeneration = character.race[numberGen(character.race.length)];
const specGeneration = character.spec[numberGen(character.spec.length)];
//assigning a variable for each core character component

const output = `You are ${nameGeneration}, the ${raceGeneration} ${specGeneration} `
//something to print to the console :) 

console.log(output)
//done!


