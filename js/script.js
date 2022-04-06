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
let active = document.getElementById("numbers")


const userAnswers = []
console.log(userAnswers)

   setTimeout(function () {
    for (let i = 0; i < randomNumbers.length; i++) {
        userAnswers.push(prompt(" numeri che hai visto"))
    }
},3500)

if(userAnswers[0] = randomNumbers[0]){
    console.log("esatto")
}


function createInput() {
    let inputOfNumbers = document.createElement("input")
    inputOfNumbers.setAttribute("type", "number")
    active.append(inputOfNumbers)
    console.log(createInput)
}