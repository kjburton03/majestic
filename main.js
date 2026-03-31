/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const queens = []

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

// const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
// console.log(athena)

// const dunkOnTheDutch = (stringBikini) => {
//     return `Dunk on the Dutch in your ${stringBikini}.`
// }

// const bikini = dunkOnTheDutch("pink bikini")
// console.log(bikini)

// const kathy = hailTheQueen("KATHY BATES")
// console.log(kathy)

// const dunkOnTheDutch2 = (stringBikini) => {
//     return `Dunk on the Dutch in your ${stringBikini}.`
// }

// const bikini2 = dunkOnTheDutch2("purple bikini")
// console.log(bikini2)    

// const ramona = hailTheQueen()
// console.log(ramona)

// const monica = hailTheQueen("Monica Dinglehopper")
// console.log(monica)



const createQueen = (queenID, queenName) => {
    const queenObject = {
        id: queenID,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Daphne Dinglehopper")
createQueen(3, "Monica Dinglehopper")
createQueen(4, "Athena Perez")
createQueen(5, "Kathy Bates")

console.log(queens)

for (const queen of queens) {

        const hailMessage = hailTheQueen(queen.name)  // What should be passed as an argument?
    console.log(hailMessage)
}

