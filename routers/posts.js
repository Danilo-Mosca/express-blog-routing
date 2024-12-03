/* Raggruppo tutte le rotte relative a /posts in questo file e mi genero l'oggetto router */

// Prima importo express js
const express = require('express');
// Poi mi creo l'oggetto router istanziando una variabile ad express.Router()
const router = express.Router();

/* Mi creo tutte le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete) necessarie per le risorse: */

// Nome rotta: Index
router.get("/", (req, res)=> {
    res.send("Lista completa dei post");
});
// Nome rotta: Show
router.get("/:id", (req, res)=> {
    res.send(`Dettagli del post con id ${req.params.id}`);
});
// Nome rotta: Store
router.post("/", (req, res)=> {
    res.send("Creazione di un nuovo post");
});
// Nome rotta: Update
router.put("/:id", (req, res)=> {
    res.send(`Aggiornamento del post con id ${req.params.id}`);
});
// Nome rotta: Modify
router.patch("/:id", (req, res)=> {
    res.send(`Modifica del post con id ${req.params.id}`);
});
// Nome rotta: Destroy
router.delete("/:id", (req, res)=> {
    res.send(`Eliminazione del post con id ${req.params.id}`);
});

// Esporto l'istanza di router
module.exports = router;