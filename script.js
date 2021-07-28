// create 3 variables with related theme: D&D Character Generators
// Assign to an object
// const yourName = ['Thalytiera', 'Tharran', 'Renia', 'Saldrel', 'Eamarter']
// const race = ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf', 'Worgen']
// const spec  = ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Shaman']
//const specialisation = ['Arcane', 'Frost', 'Fire', 'Blood', 'Unholy', 'Retribution', 'Assasination']

const character = {
name: ['Thalytiera', 'Tharran', 'Renia', 'Saldrel', 'Eamarter'],
race: ['Nightborne', 'Orc', 'Blood Elf', 'Human', 'Draenei', 'Undead', 'Dwarf', 'Worgen'],
spec: ['Mage', 'Warlock', 'Priest', 'Rogue', 'Death Knight', 'Paladin', 'Shaman'],
}

const numberGen = num => {
    return Math.floor(Math.random() * num)
}

const messageCreation = () => {
    for(let item in character){
        if (item === character.name){
            console.log(character.name)
        }
    } 
}

// const generateMessage = () => {
//     let finalMessage = messageCreation();
//     console.log(`You are ${finalMessage.name}, the ${finalMessage.race} ${finalMessage.spec}`)
    



 //generateMessage()


messageCreation()
