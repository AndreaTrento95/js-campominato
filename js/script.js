/* **Consegna**
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

//---------------------------------------------------------- SVOLGIMENTO -----------------------------------------------------------------------


// VARIABILI
var limite = 100;
var numero_bombe = 16;
var tentavi_max = limite - numero_bombe;
var arr_bombe_generate = bombsGenerator(numero_bombe, limite); // array di bombe generate dalla funzione entro i parametri descritti
var arr_giocate = []; // è l'array dentro cui ci metterò tutti i numeri validi giocati dall'utente
var vittoria = false; // variabile flag per interrompere il ciclo


// creo il ciclo di gioco che si interromperà unicamente quando l'utente avrà vinto o perso
while( vittoria === false){
    // chiedo all'utente di inserire un numero
    var num_utente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));

    if(arr_giocate.includes(num_utente) === true){
        alert("Hai già inserito questo numero!\nRiprova!");  
    }else if(arr_bombe_generate.includes(num_utente) === true){
        alert("HAI PERSO!");
        console.log("Hai fatto " + (arr_giocate.length + 1)+ " tentativi..." + "\nIl numero bomba è stato il numero "+ num_utente);
        vittoria = true;
    }else if(num_utente > limite){
        alert("Il numero inserito è superiore a quello concesso!<br>Riprova!");
    }else if(num_utente < 1){
        alert("Il numero inserito è inferiore a 1.\nRiprova!");
    }else if(isNaN(num_utente) === true){
        alert("Il carattere inserito non è un numero!<br>Riprova!");
    }else{ // se non si è verificata nessuna delle condizioni sopracitate allora posiziono il numero all'interno dell'array (arr_giocate).
        arr_giocate.push(num_utente);
        
        // controllo se il numero delle giocate corrisponde ai tentativi max, quindi setto la condizione di vittoria!
        if(arr_giocate.length === tentavi_max){
            alert("HAI VINTO!\nNon ci posso credere...");
            vittoria = true;
        }
    }

}





// ------------ FUNCTION --------------------

// Creo una funzione che generi numeri random compresi tra 1 e un max
function randomGenerator(max){
    var number = Math.floor(Math.random() * max) + 1;
    return number;
}

// Creo una funzione che generi 16 bombe e che le ponga all'interno di un'array
function bombsGenerator(numBombs, max){
    var arr_bombe = [];
    
    // creo un ciclo while che mi crei 16 bombe.
    while(arr_bombe.length < numBombs){
        var bomb = randomGenerator(max);

        // scrivo la condizione secondo cui se il valore della bomba non è presente nell'array viene aggiunto, in caso contrario 
        if(arr_bombe.includes(bomb) === false){
            arr_bombe.push(bomb);
        }
    }
    return arr_bombe;
}
