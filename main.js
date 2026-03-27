/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)

const dunkOnTheDutch = (stringBikini) => {
    return `Dunk on the Dutch in your ${stringBikini}.`
}

const bikini = dunkOnTheDutch("pink bikini")
console.log(bikini)

const kathy = hailTheQueen("KATHY BATES")
console.log(kathy)

const dunkOnTheDutch2 = (stringBikini) => {
    return `Dunk on the Dutch in your ${stringBikini}.`
}

const bikini2 = dunkOnTheDutch2("purple bikini")
console.log(bikini2)    