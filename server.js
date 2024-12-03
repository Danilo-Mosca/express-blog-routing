// Importo express js
const express = require('express');
// Creo un'istanza del server
const app = express();
// Assegno la porta 3000 al server
const PORT = 3000;
// Importo il router creato sul routers/posts.js
const postsRouter = require('./routers/posts');


// Definisco la cartella pubblica "public" in cui sono contenuti tutti gli assett statici
app.use(express.static('public'));


// Creo la rotta base "/" che ritorna un testo semplice con scritto ”Server del mio blog”
app.get("/", (req, res) => {
    res.send("<h1>Server del mio blog</h1>");
});

// Dopo l'app get della root "/" (perchè le rotte vanno a cascata e altrimenti Express non vedrebbe la rotta principale) indico ad Express Js che esistono rotte con il prefisso "/posts" e le chiamo con il metodo use() così da specificare che il prefisso di queste rotte deve essere "/posts/" (va inserito sempre al plurale)
app.use('/posts', postsRouter);






// Rotta di fallback: se la pagina non è stata trovata restituisco un messaggio 404 personalizzato. E' l'ultima rotta da controllare a cascata
app.get('*', (req, res) => {
    // Se lo stato della richiesta non è stato trovato (risponde con un error 404) allora rispondi con il seguente messaggio
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});

// Metto il server in ascolto su localhost e sulla porta 3000
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});