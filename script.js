// create 3 variables with related theme: D&D Character Generators
// Assign to an object
const yourName = ['Thalytiera', 'Tharran', 'Renia', 'Saldrel, Eamarter']
const race = ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf']
const spec  = ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin']

const character = {
name: yourName,
race: race,
spec: spec
}

const numberGen = num => {
    return Math.floor(Math.random() * num)
}

const messageCreation = object => {
    let finalMessage = {};
    for(let item in character){
        let randomIdx = numberGen(item.length);
        finalMessage[item] = character[item][randomIdx];
    }
    return finalMessage
}

const generateMessage = () => {
    let finalMessage = messageCreation();
    console.log(`You are ${finalMessage.name}, the ${finalMessage.race} ${finalMessage.spec}`)

}
generateMessage()
