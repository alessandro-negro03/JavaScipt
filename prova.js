const util = require("util")
const fs = require("fs")

const carica_file = util.promisify(fs.readFile)

const testi = ["./testoA.txt","./testoB.txt","./testoC.txt"]
const promise = Promise.allSettled([
    carica_file(testi[0]).then((data) => data.toString()),
    carica_file(testi[1]).then((data) => data.toString()),
    carica_file(testi[2]).then((data) => data.toString())
])

.then((results) => console.log("risultato: "+results[0].value+" "+results[1].value+" "+results[2].value+""))