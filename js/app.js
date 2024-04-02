//console.log('funziona')

// Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

// Il prezzo orario per una commissione varia in questo modo:
// se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
// se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
// se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

// prezzo orario sviluppo backend
//const prezzoOrarioUno = 20.50 //tipo number

// prezzo orario sviluppo frontend
//const prezzoOrarioDue = 15.30 //tipo number

// prezzo orario analisi progettuale
//const prezzoOrarioTre = 33.60 //tipo number

let prezzoSelezionato = parseFloat(document.getElementById("job").value); // tipo number
//console.log(prezzoSelezionato)

let prezzoJob = 0
//let jobRequest = false

if (prezzoSelezionato === 1) {
    // jobRequested = true
    prezzoJob = 20.50 * 10

}
//console.log(jobRequest, prezzofinale, 'il prezzo finale è 205')
else if (prezzoSelezionato === 2) {
    //  jobRequested = true
    prezzoJob = 15.30 * 10

}
//console.log(prezzofinale, 'il prezzo finale è 153')


else if (prezzoSelezionato === 3) {
    // jobRequested = true
    prezzoJob = 33.60 * 10
}


else {
    // jobRequested = false
    prezzoJob = 0

}
console.log('il prezzo selezionato è di €', prezzoJob)


// L’utente potrebbe decidere di utilizzare un codice 
// promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// creo un array di codici promozionali

const couponValido = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

let couponInserito = document.getElementById("promocode").value; // tipo number
let scontoValido = couponValido.includes(couponInserito)
let sconto = 0
// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto 
// del 25% sul prezzo finale.

let prezzoFinale = prezzoJob - sconto

if (scontoValido===true) {
    sconto = prezzoJob * 0.25
    prezzoFinale = prezzoJob - sconto
    document.getElementById("result").innerHTML = prezzoFinale + ' €'

}

else {

    document.getElementById("result").innerHTML = prezzoFinale + ' €' + ' sconto non applicabile'


}




// console.log( 'lo sconto è di', sconto)
// console.log('il prezzo finale è di ' ,prezzoFinale)

//Se il codice inserito non è valido, 
// il sito deve informare l’utente che il codice non è valido 
//e il prezzo finale viene calcolato senza applicare sconti.

