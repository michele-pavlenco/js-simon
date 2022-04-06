/*Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

const randomNumbers = []
console.log(randomNumbers)
while (randomNumbers.length < 5) {
    const createRandomNumber = getRandomInt(1, 100)
    if (!randomNumbers.includes(createRandomNumber)) {
        randomNumbers.push(createRandomNumber)
    }
}
let app = document.getElementById("app")
app.innerHTML = randomNumbers.join(" - ")

setTimeout(() => app.innerHTML = "", 3000)

function cecknumber() {

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let numbers = document.getElementById("numbers")


const userAnswers = []


setTimeout(function () {
    for (let i = 0; i < randomNumbers.length; i++) {
        userAnswers.push(prompt("Inserisci i numeri che hai visto"))
    }
}, 3500)

console.log(userAnswers)

setTimeout(convalidate, 4000)

function convalidate() {

    if (userAnswers[0] == randomNumbers[0]) {
        console.log("esatto")
        document.writeln(`Il primo numero è esatto (${randomNumbers[0]}) -`)
    }
    else if (userAnswers[0] !== randomNumbers[0]) {
        console.log("sbagliato")
        document.writeln(`Il primo numero era ${randomNumbers[0]} -`)
    }

    if (userAnswers[1] == randomNumbers[1]) {
        console.log("esatto")
        document.writeln(`Il secondo numero è esatto (${randomNumbers[1]}) -`)
    }
    else if (userAnswers[1] !== randomNumbers[1]) {
        console.log("sbagliato")
        document.writeln(`Il secondonumero  era ${randomNumbers[1]} -`)
    }

    if (userAnswers[2] == randomNumbers[2]) {
        console.log("esatto")
        document.writeln(`Il terzo numero è esatto (${randomNumbers[2]}) -`)
    }
    else if (userAnswers[2] !== randomNumbers[2]) {
        console.log("sbagliato")
        document.writeln(`Il terzo numero era ${randomNumbers[2]} -`)
    }

    if (userAnswers[3] == randomNumbers[3]) {
        console.log("esatto")
        document.writeln(`Il quarto numero è esatto (${randomNumbers[3]}) -`)
     
    }
    else if (userAnswers[3] !== randomNumbers[3]) {
        console.log("sbagliato")
        document.writeln(`Il quarto numero era ${randomNumbers[3]} -`)
    }

    if (userAnswers[4] == randomNumbers[4]) {
        console.log("esatto")
        document.writeln(`Il quinto numero è esatto (${randomNumbers[4]}) -`)
    }
    else if (userAnswers[4] !== randomNumbers[4]) {
        console.log("sbagliato")
        document.writeln(`Il quinto numero era ${randomNumbers[4]}`)
    }

}









function createInput() {
    let inputOfNumbers = document.createElement("input")
    inputOfNumbers.setAttribute("type", "number")
    numbers.append(inputOfNumbers)
    console.log(createInput)
}



/* 
const userAnswers = []


   setTimeout(function () {
    for (let i = 0; i < randomNumbers.length; i++) {
        userAnswers.push(prompt("Inserisci i numeri che hai visto"))
    }
},3500)

console.log(userAnswers)

// if(userAnswers[0] = randomNumbers[0]){
//     console.log("esatto")
// }
// else if (userAnswers[0] != randomNumbers[0]){
//     console.log("sbagliato")}


function createInput() {
    let inputOfNumbers = document.createElement("input")
    inputOfNumbers.setAttribute("type", "number")
    active.append(inputOfNumbers)
    console.log(createInput)
} */