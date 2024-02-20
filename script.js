// richiesta Km ed età all'utente
const km = parseInt( prompt('Inserire i Km che si vogliono percorrere'));
const age = parseInt( prompt('Inserire eta del passeggero'));
console.log('Km--->', km, 'eta--->', age);


const prezzoPerKm = 0.21;

// calcolo il prezzo del biglietto al Km + aggiunta della seconda cifra decimale
let prezzoParziale = km * prezzoPerKm;
prezzoParziale = prezzoParziale.toFixed(2);

console.log('prezzoPerKm--->', prezzoParziale);


let prezzoFinale = 0;

// Casistiche di sconto Under e Over
if (age < 18){
   let scontoUnder = (prezzoParziale * 20) / 100;
   scontoUnder = scontoUnder.toFixed(2);
   prezzoFinale = prezzoParziale - scontoUnder;
}
else if (age > 65){
   let scontoOver = (prezzoParziale * 40) / 100;
   scontoOver = scontoOver.toFixed(2);
   prezzoFinale = prezzoParziale - scontoOver;
}
else{  // age compreso tra 18 e 65 anni 
   prezzoFinale = prezzoParziale;
}

console.log('prezzoFinale--->', prezzoFinale);


// inserisco nell'HTML il prezzoFinale
document.getElementById('output-prezzofinale').innerHTML += `${prezzoFinale}`;


// inserisco i valori scelti dall'utente: Km e età
document.getElementById('output-kminseriti').innerHTML += `${km} Km`;
document.getElementById('output-etainserita').innerHTML += `${age}`;
document.getElementById('output-prezzoparziale').innerHTML += `${prezzoParziale}`;