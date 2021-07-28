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

const findSpec = []

    if (specGeneration === 'Mage'){
        findSpec.push(character.specialisation.mage[numberGen(character.specialisation.mage.length)]);
    } else if (specGeneration === 'Warlock'){
        findSpec.push(character.specialisation.warlock[numberGen(character.specialisation.warlock.length)]);
    } else if (specGeneration === 'Priest'){
        findSpec.push(character.specialisation.priest[numberGen(character.specialisation.priest.length)]);
    } else if (specGeneration === 'Rogue'){
        findSpec.push(character.specialisation.rogue[numberGen(character.specialisation.rogue.length)])
    } else if (specGeneration === 'Death Knight'){
        findSpec.push(character.specialisation.deathKnight[numberGen(character.specialisation.deathKnight.length)])
    } else if (specGeneration === 'Paladin'){
        findSpec.push(character.specialisation.paladin[numberGen(character.specialisation.paladin.length)])
    } else if (specGeneration === 'Shaman'){
        findSpec.push(character.specialisation.shaman[numberGen(character.specialisation.shaman.length)])
    } else if (specGeneration === 'Monk'){
        findSpec.push(character.specialisation.monk[numberGen(character.specialisation.monk.length)])
    } else if (specGeneration === 'Hunter'){
        findSpec.push(character.specialisation.hunter[numberGen(character.specialisation.hunter.length)])
    } else if (specGeneration === 'Demon Hunter'){
        findSpec.push(character.specialisation.demonHunter[numberGen(character.specialisation.demonHunter.length)])
    } else if (specGeneration === 'Druid'){
        findSpec.push(character.specialisation.druid[numberGen(character.specialisation.druid.length)])
    } 
//randomly pick a spec for each class that's picked

const output = `You are ${nameGeneration}, the ${raceGeneration} ${specGeneration}. Your specialisation is ${findSpec.join('')}. Good luck ${nameGeneration} and happy hunting!`
//something to print to the console :) 

console.log(output)
//done!
