const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

/*
Snack 1 - Filtra e Modifica
Crea una funzione che somma due numeri.
*/

// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
const longBooks = books.filter(book => book.pages >= 300);
// console.log(longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
const longBooksTitles = longBooks.map(book => book.title);
// console.log(longBooksTitles);

// Stampa in console ogni titolo nella console.
// console.log(books.map(book => book.title));



// Snack 2 - Il primo libro scontato

// Creare un array (availableBooks) che contiene tutti i libri disponibili.
const availableBooks = books.filter(book => book.available === true);
// console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20%
// (mantieni lo stesso formato e arrotonda al centesimo)
const discountedBooks = availableBooks.map(book => ({ ...book, price: parseFloat(book.price) - (parseFloat(book.price) * 20 / 100).toFixed(2) + "€" }));
// console.log(discountedBooks);


// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find(book => book.price.split(".").length === 1);
// console.log(fullPricedBook);



// Snack 3 - Ordinare gli Autori

// Creare un array (authors) che contiene gli autori dei libri.
const authors = books.map(book => book.author);
// console.log(authors);

// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
const areAuthorsAdults = authors.every(author => author.age >= 18);
// console.log(areAuthorsAdults);

// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
if (areAuthorsAdults) {
    authors.sort((a, b) => a.age - b.age) //crescente
} else {
    authors.sort((a, b) => b.age - a.age) //decrescente
}
// console.log(authors);



// Snack 4 - Calcola l’età media

// Creare un array (ages) che contiene le età degli autori dei libri.
const ages = books.map(book => book.author.age);
// console.log(ages);

// Calcola la somma delle età (agesSum) usando reduce.
const agesSum = ages.reduce((acc, curr) => acc + curr, 0)
// console.log(agesSum);

// Stampa in console l’età media degli autori dei libri.
// console.log(agesSum / ages.length);



// Snack 5 (Bonus) - Raccogli i libri
// Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(),
// per creare una funzione (getBooks) che a partire da un array di id (ids),
// ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19]

const url = "http://localhost:5000/books/"

const fetchJson = async (url) => {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}

const getBooks = (list) => {
    const promises = list.map(id => fetchJson(`${url}${id}`))
    return Promise.all(promises)
}

// getBooks([2, 13, 7, 21, 19])
//     .then(data => console.log(data))
//     .catch(error => console.error(error))



// Snack 6(Bonus) - Ordina i libri

// Crea una variabile booleana(areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
const areThereAvailableBooks = books.some(book => book.available);
// console.log(areThereAvailableBooks);

// Crea un array(booksByPrice) con gli elementi di books ordinati in base al prezzo(crescente).
const booksByPrice = books.sort((a, b) => parseInt(a.price) - parseInt(b.price))
// console.log(booksByPrice);

// Ordina l’array booksByPrice in base alla disponibilità(prima quelli disponibili), senza creare un nuovo array.
booksByPrice.sort((a, b) => b.available - a.available)
// console.log(booksByPrice);



// Snack 7 (Bonus) - Analizza i tag

// Usa reduce per creare un oggetto (tagCounts) che conta quante volte ogni tag viene usato tra i libri.
