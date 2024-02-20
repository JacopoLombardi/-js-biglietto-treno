// richiesta Km ed età all'utente
const km = parseInt( prompt('Inserire i Km che si vogliono percorrere'));
const age = parseInt( prompt('Inserire eta del passeggero'));
console.log('Km--->', km, 'eta--->', age);


const prezzoPerKm = 0.21;

// calcolo il prezzo del biglietto al Km + aggiunta della seconda cifra decimale
const prezzoParziale = km * prezzoPerKm;
console.log('prezzoPerKm--->', prezzoParziale);


let prezzoFinale = 0;

// Casistiche di sconto Under e Over
if (age < 18){
   const scontoUnder = (prezzoParziale * 20) / 100;
   prezzoFinale = prezzoParziale - scontoUnder;
}
else if (age > 65){
   const scontoOver = (prezzoParziale * 40) / 100;
   prezzoFinale = prezzoParziale - scontoOver;
}
else{  // age compreso tra 18 e 65 anni 
   prezzoFinale = prezzoParziale;
}

prezzoFinale = prezzoFinale.toFixed(2);
console.log('prezzoFinale--->', prezzoFinale);


// inserisco nell'HTML i valori scelti dall'utente: Km, età e il costo del biglitto parziale
document.getElementById('output-kminseriti').innerHTML += `${km} Km`;
document.getElementById('output-etainserita').innerHTML += `${age}`;
document.getElementById('output-prezzoparziale').innerHTML += `${prezzoParziale}`;


// inserisco nell'HTML il prezzoFinale
document.getElementById('output-prezzofinale').innerHTML += `${prezzoFinale}`;