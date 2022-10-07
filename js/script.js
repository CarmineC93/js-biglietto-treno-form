//Recuperiamo l'input e lo salviamo in una variabile
const userKmsInput = document.getElementById("user-kms");
console.log(userKmsInput);

const userAgeInput = document.getElementById("user-age");
console.log(userAgeInput);

const preferenceInput = document.getElementById("preference");
console.log(preferenceInput);

//Salviamo l'elemento bottone Procedi in una variabile
const submitBtn = document.getElementById("submit");

//Salviamo l'elemento bottone Acquista in una variabile per farlo apparire quando si clicca su Procedi
const buyBtn = document.getElementById("buy");

//Salviamo in una variabile l'elemento in cui verrà indicato il prezzo
const ticketPriceSpace = document.querySelector("h2");

//usiamo i dati forniti dall'utente per calcolare il prezzo del suo biglietto ad ogni click sul button.
submitBtn.addEventListener("click", function() {
    //richiamiamo i valori inseriti negli elementi input
    const userKms = userKmsInput.value;
    const userAge = userAgeInput.value;
    const preference = preferenceInput.value;

    //salviamo il prezzo standard del biglietto nella sua variabile
    const baseRate = 0.21;
    let ticketPrice = userKms * baseRate;
    let finalTicket = ticketPrice;
    document.getElementById("reduction").innerHTML = ` `;

    //aggiungiamo fasce di età
    if (userAge < 18) {
        finalTicket = ticketPrice - (ticketPrice * 0.2);
        document.getElementById("reduction").innerHTML = `Ti è già stato applicato uno sconto di <span class="text-success"> ${(ticketPrice * 0.2).toFixed(2)}€ </span>.`;
        } else if (userAge >= 65) { 
                finalTicket = ticketPrice - (ticketPrice * 0.4);
                document.getElementById("reduction").innerHTML = `Ti è già stato applicato uno sconto di <span class="text-success"> ${(ticketPrice * 0.4).toFixed(2)}€ </span>.`;
                };
    
    if (preference === "vip") {
        finalTicket *= 2;
        document.getElementById("congrats").innerHTML = `<span class="text-success">Complimenti! Ti aspetta una nuova esperienza di viaggio VIP! </span> <p><em>*La password per il wi-fi sarà distribuita a bordo del treno.</em></p>`;
    }           

    let euroTicket = finalTicket.toFixed(2);
    ticketPriceSpace.innerHTML = `Il prezzo del tuo biglietto è di: <span class="text-success"> ${euroTicket}€</span>.`;

    //facciamo apparire tasto Acquista
    buyBtn.classList.remove("d-none");
    buyBtn.classList.add("d-block");

    //ripuliamo gli input dopo ogni click sul button
    userAgeInput.value = " ";
    userKmsInput.value = " ";
})

//cliccando sul bottone Acquista verrà restituito un codice biglietto
buyBtn.addEventListener("click", function() {
    const ticketNumber = "IT" + (Math.floor(Math.random()*100000)+1);
    document.getElementById("ticket-number").innerHTML = `Grazie per averci scelto! Il numero del tuo bigletto è:  <span class="text-success"> ${ticketNumber}</span>.`;

})



