// richiesta Km ed età all'utente
const km = prompt('Inserire i Km che si vogliono percorrere');
const age = prompt('Inserire eta del passeggero');
console.log(km, age);

const prezzoPerKm = 0.21;


// calcolo il prezzo del biglietto al Km
const prezzoParziale = km * prezzoPerKm;
console.log(prezzoParziale);

// Casistiche di sconto Under e Over
if (age < 18){
   const prezzoScontatoUnder = (prezzoParziale * 20) / 100;
   console.log(prezzoScontatoUnder);
   const prezzoFinale = prezzoParziale - prezzoScontatoUnder;
   console.log(prezzoFinale);
}

if (age > 65){
   const prezzoScontatoUnder = (prezzoParziale * 40) / 100;
   console.log(prezzoScontatoUnder);
   const prezzoFinale = prezzoParziale - prezzoScontatoUnder;
   console.log(prezzoFinale);
}





