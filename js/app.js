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

// L’utente potrebbe decidere di utilizzare un codice 
// promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.


// richiamo il form

const form = document.getElementById("form-preventivo");
// console.log(form);

  
// attivare ascolto sul submit del form
form.addEventListener('submit', function () {

    event.preventDefault()

    let prezzoSelezionato = document.getElementById("job").value; // tipo number
    //console.log(prezzoSelezionato)

    let prezzoJob = 0
    

    if (prezzoSelezionato === '1') {
        
        prezzoJob = 20.50 * 10

    }
    //console.log(jobRequest, prezzofinale, 'il prezzo finale è 205')
    else if (prezzoSelezionato === '2') {
        
        prezzoJob = 15.30 * 10

    }
    //console.log(prezzofinale, 'il prezzo finale è 153')


    else if (prezzoSelezionato === '3') {
        
        prezzoJob = 33.60 * 10
    }


    else {
        
        prezzoJob = 0

    }
   // console.log('il prezzo selezionato è di €', prezzoJob)

    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const textarea = document.getElementById('textarea').value;
    const promocode = document.getElementById('promocode').value;
    const privacy = document.getElementById('privacy').checked;

    
    // console.log(nome, cognome, email, job, textarea, promocode, privacy);

    // creo un array di codici promozionali

    const couponValido = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

    let couponInserito = document.getElementById("promocode").value; // tipo string

    let sconto = 0
    // Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto 
    // del 25% sul prezzo finale.

    let prezzoFinale = prezzoJob - sconto


    // c'è il coupon inserito? SI NO

    if (couponInserito != '') {

        // se si, lo sconto è valido?

        if (couponValido.includes(couponInserito)) {

            sconto = prezzoJob * 0.25
            prezzoFinale = prezzoJob - sconto
            //document.getElementById("result").innerHTML = `<h3>€€ ${prezzoFinale.toFixed(2) }</h3>`
            //prezzoFinale.toFixed(2)
            //console.log(prezzoFinale , typeof prezzoFinale  )

            const prezzoStringa = prezzoFinale.toFixed(2)
            const stringaBold = prezzoStringa.split("." , 2)
            console.log(stringaBold [1])
            document.getElementById("result").innerHTML = `<h3 style="font-weight: bold; display:inline;">€ ${stringaBold [0] }</h3><p style="display:inline;">,${stringaBold [1] } </p>`

        }

        else {

            sconto = 0
            prezzoFinale = prezzoJob - sconto
            //document.getElementById("result").innerHTML = `<h3>€ ${prezzoFinale.toFixed(2)} </h3><h5 style="color:red;">Attenzione: il codice che hai inserito non è valido </h5>`
            const prezzoStringa = prezzoFinale.toFixed(2)
            const stringaBold = prezzoStringa.split("." , 2)
            console.log(stringaBold [1])
            document.getElementById("result").innerHTML = `<h3 style="font-weight: bold; display:inline;">€ ${stringaBold [0] }</h3><p style="display:inline;">,${stringaBold [1] } </p><h5 style="color:red;">Attenzione: il codice che hai inserito non è valido </h5>`
        }
            // .toLocaleString("it-IT", { style: "currency", currency: "EUR" })

    }

    else {

        //document.getElementById("result").innerHTML = `<h3>€ ${prezzoFinale.toFixed(2)}</h3>`
        const prezzoStringa = prezzoFinale.toFixed(2)
            const stringaBold = prezzoStringa.split("." , 2)
            console.log(stringaBold [1])
            document.getElementById("result").innerHTML = `<h3 style="font-weight: bold; display:inline;">€ ${stringaBold [0] }</h3><p style="display:inline;">,${stringaBold [1] } </p>`
    }

    // // resetto il form
    // document.getElementById('nome').value = ''
    // document.getElementById('cognome').value = ''
    // document.getElementById('email').value = ''
    // document.getElementById('job').value = ''
    // document.getElementById('textarea').value = ''
    // document.getElementById('promocode').value = ''
    // document.getElementById('privacy').checked = false
    // ADD validation




})