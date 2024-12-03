/* Raggruppo tutte le rotte relative a /posts in questo file e mi genero l'oggetto router */

// Prima importo express js
const express = require('express');
// Poi mi creo l'oggetto router istanziando una variabile ad express.Router()
const router = express.Router();

/* Mi creo tutte le rotte necessarie per le risorse: */

// Index
router.get("/", (req, res)=> {
    res.send("Lista completa dei post");
});
// Show
router.get("/:id", (req, res)=> {
    res.send(`Dettagli del post con id ${req.params.id}`);
});
// Store
router.post("/", (req, res)=> {
    res.send("Creazione di un nuovo post");
});
// Update
router.put("/:id", (req, res)=> {
    res.send(`Aggiornamento del post con id ${req.params.id}`);
});
// Modify
router.patch("/:id", (req, res)=> {
    res.send(`Modifica del post con id ${req.params.id}`);
});
// Destroy
router.delete("/:id", (req, res)=> {
    res.send(`Eliminazione del post con id ${req.params.id}`);
});

// Esporto l'istanza di router
module.exports = router;