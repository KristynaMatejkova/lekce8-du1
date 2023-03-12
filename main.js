//Catering

/*

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem.
 Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí
  zprávu ve smyslu*/

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