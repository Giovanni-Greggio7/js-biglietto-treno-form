// Dati da ricavare dal form
const fullName = document.getElementById("fullName")
const kmtr = document.getElementById("kmtr")
const età = document.getElementById("età")
const btn = document.getElementById("btn")

console.log(fullName.value)

// Dati da stampare nell'HTML
const name = document.getElementById("name")
const offerta = document.getElementById("offerta")
const carrozza = document.getElementById("carrozza")
const codice = document.getElementById("codice")
const prezzoFinale = document.getElementById("prezzoFinale")

// Variabili presenti
const costo = 0.21;
const numeroCarrozza = Math.floor(Math.random()* 10) + 1;
const numeroCodice = Math.floor(Math.random()* 999999) + 100000;

btn.addEventListener('click', function(event) {
    // console.log(fullName.value, kmtr.value, età.value)

    const kilometri = parseFloat(kmtr.value)
    const prezzoBiglietto = kilometri * costo;
    console.log(prezzoBiglietto)

    // const tuoBiglietto = document.getElementById(tuoBiglietto)

    const scontoMinorenni = prezzoBiglietto * 0.8;
    const scontoOver65 = prezzoBiglietto * 0.6;
    

    name.innerHTML = fullName.value
    carrozza.innerHTML = numeroCarrozza
    codice.innerHTML = numeroCodice

    if (età.value == "minorenne"){
        prezzoFinale.innerHTML = `${scontoMinorenni.toFixed(2)}€`
    } else if (età.value == "over65") {
        prezzoFinale.innerHTML = `${scontoOver65.toFixed(2)}€`
    } else {
        prezzoFinale.innerHTML = `${prezzoBiglietto.toFixed(2)}€`
    }

    tuoBiglietto.classList.remove('hidden')
    tuoBiglietto.classList.add('show')

})

























// // PRIMA OPERAZIONE

// let start = price * kmtr

// console.log( `Il prezzo base é ${start.toFixed(2)}€` )

// // CONDIZIONI

// if ( età < 18 ){

//     let final = start * sc1;

//     // alert( `Il prezzo per la tua età é ${final.toFixed(2)}€` )

// } else if ( età > 65 ) {

//         let final = start * sc2
    
//         // alert( `Il prezzo per la tua età é ${final.toFixed(2)}€` )

// } else {

//     let final = start

//     // alert( `Il prezzo per la tua età é ${final.toFixed(2)}€` )
// }









