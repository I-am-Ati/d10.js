/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

console.log(sum); // Questo stamperà "30" nella console

let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

console.log("La somma di", num1, "e", num2, "è:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 18);
console.log("Il numero casuale è 18", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Atdhe",
  surname: "Lusha",
  age: 25
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

let me = {
  name: "Atdhe",
  surname: "Lusha",
  age: 25
};

console.log("Prima della rimozione:", me);

delete me.age;

console.log("Dopo la rimozione:", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

let me = {
  name: "Atdhe",
  surname: "Lusha",
  age: 25
};

me.skills = ["JavaScript"];

me.skills.push("Java");

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

let me = {
  name: "Atdhe",
  surname: "Lusha",
  age: 25,
  skills: ["JavaScript"]
};

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

let me = {
  name: "Atdhe",
  surname: "Lusha",
  age: 25,
  skills: ["JavaScript"]
};

me.skills.splice(1, 1);

// Funzioni

function nomeFunzione(parametri) {
  // Corpo della funzione: qui va il codice che la funzione eseguirà
  // ...
  // Opzionalmente, puoi restituire un valore:
  return risultato;
}

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1=10; num2(5)), number {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1; 
  }
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (par) {
  arr = par-split(" ");
  
  const capitalizedWord = [1;
  for (let i = 0; 1 < arr. length; i++) 1
  const Arr = arr[il. charAt(0). toUpperCase();
  const Capitalized = arr[il. slice (1);
  capitalizedWord-push (Arr + Capitalized);
  return capitalizedword;
  }
  
  console. log(splitMe("Es.3", "Ciao, io sono Atdhe"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const miaStringa = "Ciao, io mi chiamo Atdhe!";

const nuovaStringa1 = deleteOne(miaStringa, true);
console.log(nuovaStringa1); 

const nuovaStringa2 = deleteOne(miaStringa, false);
console.log(nuovaStringa2);


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

consoLe. Log ("ESERCIZIO 5");

const onlyLetters = (string) => {
  const newArr = string split(" ");
  for (let i = 0; i < newArr. Length; i++) {
    if (lisNaN(newArr[1])) {
      newArr. splice (i, 1);
    }
  }
  return newArr. join(" ");
}

  console. log(onlyLetters("HO 2 macchine"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

isThisAnEmail(.com) {
  // Espressione regolare per validare un indirizzo email (semplificata)
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(gmail.com);
}

const email1 = "atdhe.lusha@esempio.com";
const email2 = "mirko32@hotmail";
const email3 = "pippo@onlus.co.uk";

console.log(isThisAnEmail(email1)); // Output: true
console.log(isThisAnEmail(email2)); // Output: false (manca il TLD)
console.log(isThisAnEmail(email3)); // Output: true

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

whatDayIsIt() {
  const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const oggi = new Date(18);
  const 
 giornoSettimanaNumero = oggi.getDay();
  return giorniSettimana[giornoSettimanaNumero];
}

const giornoCorrente = whatDayIsIt();
console.log("Oggi è Venerdì" + giornoCorrente);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numRolls) {
  let sum = 0;
  let values = [];

  for (let i = 0; i < numRolls; i++) {
    const roll = dice(); 
    sum += roll;
    values.push(roll);
  }

  return {
    sum: sum,
    values: values
  };
}

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console. Log ("ESERCIZIO 9");
  const howManyDays = (date) => {
  const inputDate = new Date(date); // Data immessa in input

  const currDate = new Date(); // Data corrente presa dal sistema
  
  const dateElapsedMilliseconds = currDate.getTime() - inputDate.getTime();

  const dateElapsed= Math. floor(
    dateElapsedMilliseconds / (1000 * 60 * 60 * 24) //Metodo trovato su internet per riconvertire La differenza trovata in millisecondi e riportarla in giorni approssimando per difetto
);
return dateElapsed;
};

console.Log(
  "Sono trascorsi:",
  howManyDays ("2024-06-18"),
  "giorni dalla data immessa"
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console. Log ("ESERCIZIO 10");
  const isTodayMyBirthday = (date) => {
  const inputDate = new Date (date); // Data immessa in input
  const currDate = new Date(); // Data corrente presa dal sistema
  const dateMonth = inputDate.getMonth();

  if (dateMonth === currDate.getDate() && dateDay === currDate.getDate()) {
    return true;
  } else {
    console. Log("Il giorno immesso non corrisponde al mio compleanno");
return false;
  }
} 

isTodayMyBirthday ("2024-10-18");

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console. Log ("ESERCIZIO 12");
  
const newestMovie(movies) {
    
    if (!movies.length) {
      return null;
    }
  
    let newest = movies[0];
  
    for (const movie of movies) {
      if (new Date(movie.releaseDate) > new Date(newest.releaseDate)) {
        newest = movie;
      }
    }
  
    return newest;
  }

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console. Log ("ESERCIZIO 13");

const movies = [
  { title: "Il Padrino", releaseDate: "1972-03-15" },
  { title: "Interstellar", releaseDate: "2014-11-07" },
  { title: "Inception", releaseDate: "2010-07-16" }
];

const newest = newestMovie(movies);
console.log(newest); 

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console. Log ("ESERCIZIO 14");

const years = [];

  for (const movie of movies) {
    years.push(new Date(movie.releaseDate).getFullYear());
  }


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console. Log ("ESERCIZIO 15");

  const onlyInLastMillennium(movies) {
    const lastMillenniumMovies = movies.filter(movie => {
      const releaseYear = new Date(movie.releaseDate).getFullYear();
      return releaseYear < 2000;
    });
  
    return lastMillenniumMovies;
  }

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console. Log ("ESERCIZIO 16");

  const sumAllTheYears(movies) {
  let totalYears = 0;

  movies.forEach(movie => {
    totalYears += new Date(movie.releaseDate).getFullYear();
  });

  return totalYears;
}
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console. Log ("ESERCIZIO 17");

  const searchByTitle (movies, searchTerm) {
    const results = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return results;
  }

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console. Log ("ESERCIZIO 18");

  const searchAndDivide (movies, searchTerm) {

    const match = [];
    const unmatch = [];
  
    movies.forEach (movie => {

      const lowerCaseTitle = movie.title.toLowerCase();
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
      if (lowerCaseTitle.includes(lowerCaseSearchTerm)) {
        match.push(movie);
      } else {

        unmatch.push(movie);
      }
    });
  
    return { match, unmatch };
  }

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console. Log ("ESERCIZIO 19");

  const removeIndex (movies, index) {

    if (index < 0 || index >= movies.length) {
      console.error("Indice non valido");
      return movies; 
    }
  
    movies.splice(index, 1);
  
    return movies;
  }

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console. Log ("ESERCIZIO 20");

  const container = selezionaContainer();

  if (container) {
    container.innerHTML = "Questo è il nuovo contenuto del container";
  
    container.classList.add('rosso');
  } else {
    console.error("Elemento con ID 'container' non trovato");
  }
  
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console. Log ("ESERCIZIO 21");

const tutteLeCelle = selezionaTuttiTdBdellaPagina();

tutteLeCelle.forEach(cella => {
  cella.textContent = 'Nuovo contenuto';
  cella.style.backgroundColor = 'lightblue';
});

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console. Log ("ESERCIZIO 22");

function stampaContenutoCelle() {

  const tutteLeCelle = document.querySelectorAll('td');

  tutteLeCelle.forEach(cella => {
    console.log(cella.textContent);
  });
} 

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console. Log ("ESERCIZIO 23");

function coloraLinkInRosso() {

  const tuttiILink = document.querySelectorAll('a');

  tuttiILink.forEach(link => {
    link.style.backgroundColor = 'red';
  });
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console. Log ("ESERCIZIO 24");

function aggiungiElementoAllaLista(nuovoElemento) {

  const miaLista = document.getElementById('myList');

  const nuovoItem = document.createElement('li');

  nuovoItem.textContent = nuovoElemento;

  miaLista.appendChild(nuovoItem);

}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console. Log ("ESERCIZIO 25");

function svuotaLista() {
  const miaLista = document.getElementById('myList');

  while (miaLista.firstChild) {
    miaLista.removeChild(miaLista.firstChild);
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console. Log ("ESERCIZIO 26");

function aggiungiClasseATutteLeRighe() {
  const tutteLeRighe = document.querySelectorAll('tr');

  tutteLeRighe.forEach(riga => {
    riga.classList.add('test');
  });
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  
  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
