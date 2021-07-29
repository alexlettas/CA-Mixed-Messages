//A Wow Character + Class Generator
//By Alex Lettas

const yourName = ['Thalytiera', 'Tharran', 'Renia', 'Saldrel', 'Eamarter']
const race = ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf', 'Worgen']
const spec  = ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Shaman', 'Monk', 'Hunter', 'Demon Hunter', 'Druid']
//defining core character + class

const mageSpec = ['Arcane', 'Frost', 'Fire']
const warlockSpec = ['Destruction', 'Demonology', 'Affliction']
const priestSpec = ['Shadow', 'Holy', 'Discipline']
const rogueSpec = ['Assassination', 'Outlaw', 'Subtlety']
const deathKnightSpec = ['Blood','Frost', 'Unholy']
const paladinSpec = ['Protection', 'Retribution', 'Holy']
const shamanSpec = ['Elemental', 'Enhancement', 'Restoration']
const monkSpec = ['Brewmaster', 'Mistweaver', 'Windwalker']
const hunterSpec = ['Beast Mastery', 'Marksmanship', 'Survival']
const demonHunterSpec = ['Vengeance', 'Havoc']
const druidSpec = ['Balance', 'Feral', 'Guardian', 'Restoration']

//defining specialization of each spec


const character = {
    name: yourName,
    race: race,
    spec: spec,
    specialization: {
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

const nameGeneration = character.name[numberGen(character.name.length)]
const raceGeneration = character.race[numberGen(character.race.length)]
const specGeneration = character.spec[numberGen(character.spec.length)]
//assigning a variable for each core character component

let findSpec = ''
//a variable which will be allocated a spec based on the switch statements below

 switch(specGeneration){
     case 'Mage':
         findSpec = character.specialization.mage[numberGen(character.specialization.mage.length)]
         break;
    case 'Warlock':
        findSpec = character.specialization.warlock[numberGen(character.specialization.warlock.length)]
        break;
        case 'Priest':
        findSpec = character.specialization.priest[numberGen(character.specialization.priest.length)]
        break;
        case 'Rogue':
        findSpec = character.specialization.rogue[numberGen(character.specialization.rogue.length)]
        break;
        case 'Death Knight':
        findSpec = character.specialization.deathKnight[numberGen(character.specialization.deathKnight.length)]
        break;
        case 'Paladin':
        findSpec = character.specialization.paladin[numberGen(character.specialization.paladin.length)]
        break;
        case 'Shaman':
        findSpec = character.specialization.shaman[numberGen(character.specialization.shaman.length)]
        break;
        case 'Monk':
        findSpec = character.specialization.monk[numberGen(character.specialization.monk.length)]
        break;
        case 'Hunter':
        findSpec = character.specialization.hunter[numberGen(character.specialization.hunter.length)]
        break;
        case 'Demon Hunter':
        findSpec = character.specialization.demonHunter[numberGen(character.specialization.demonHunter.length)]
        break;
        case 'Druid':
        findSpec = character.specialization.druid[numberGen(character.specialization.druid.length)]
                                                    
 }
//randomly pick a spec for each class that's picked



const output = `You are ${nameGeneration}, the ${raceGeneration} ${specGeneration}. 
Your specialization is: ${findSpec}. 

Good luck ${nameGeneration} and happy hunting!`
//something to print to the console :) 

console.log(output)
//done!
