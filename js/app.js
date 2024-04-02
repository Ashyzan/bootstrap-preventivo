//console.log('funziona')

// Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

// Il prezzo orario per una commissione varia in questo modo:
// se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
// se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
// se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

// prezzo orario sviluppo backend
const prezzoOrarioUno = 20.50 //tipo number

// prezzo orario sviluppo frontend
const prezzoOrarioDue = 15.30 //tipo number

// prezzo orario analisi progettuale
const prezzoOrarioTre = 33.60 //tipo number

let prezzoSelezionato = document.getElementById("job").value; // tipo stringa

console.log(prezzoSelezionato)

let prezzoFinale = '0'

if (prezzoSelezionato === '1') {
    let prezzoFinale = prezzoOrarioUno * 10

    

}
console.log(prezzoFinale, 'il prezzo finale è 205')
//  else if (prezzoSelezionato === 2) {
//     let prezzoFinale = prezzoOrarioDue * 10
    
//     console.log(prezzoFinale, 'il prezzo finale è 153')
// }



//   else if (prezzoSelezionato === 3) {
//     let prezzoFinale = prezzoOrarioTre * 10
//     console.log(prezzoFinale, 'il prezzo finale è 336')
// }


// recupero il tipo di prezzo dal valore del select sul form
    // const name = document.getElementById('name').value;
	// const surname = document.getElementById('surname').value;
	// const age = document.getElementById('age').value;

// L’utente potrebbe decidere di utilizzare un codice 
// promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// creo un array di codici promozionali

// const couponValido = [YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24]

// let couponInserito = // mettere il valore preso dal campo del form codice promozionale

// let scontoValido = couponValido.includes(couponInserito)

// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto 
// del 25% sul prezzo finale.
//Se il codice inserito non è valido, 
// il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

// if ()


// if (trovato === true) {

//     console.log('codice valido')
//     console.log(trovato)


// }
// else {
//     console.log('spiacente, il codice non funziona')
//     console.log(trovato)
// }

// const prezzoFinale = 