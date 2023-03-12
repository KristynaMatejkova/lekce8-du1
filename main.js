//Catering

const justFood = (pocetOsob) => {
    return `catering od Just Food pro ${pocetOsob} osob za ${pocetOsob * 100} Kč`
}

const yourMama = (pocetOsob) => {
    return `catering od Your Mama pro ${pocetOsob} osob za ${pocetOsob * 300} Kč`
}

const flavourHaven = (pocetOsob) => {
    return `catering od Flavour Haven pro ${pocetOsob} osob za ${pocetOsob * 1000} Kč`
}

const createEvent = (udalost, pocetOsob, catering) => {
    return `Událost ${udalost} s ${catering(pocetOsob)}`
}
/*
//Cvičení: Objednávka

const button = document.querySelector('#btn-order')

const changeTitle = () => {
    button.textContent= 'Objednáno'
}

button.addEventListener('click', changeTitle)

//Kontrola dostupnosti 

const timeIsUp = () => {
    button.textContent= 'Objednat'
    button.disabled=false
}

setTimeout(timeIsUp, 8000)
*/