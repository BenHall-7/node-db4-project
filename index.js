const express = require("express");
const status = require("http-status-codes");

const db = require("./data/dbConfig");
const dbHelper = require("./helpers/dbHelper");

const server = express();
server.use(express.json())

server.get("/api/recipes", (req, res) => {
    dbHelper.getRecipes()
        .then(res2 => {
            res.status(status.OK).json(res2);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err});
        })
})

server.get("/api/recipes/:id/ingredients", (req, res) => {
    dbHelper.getIngredients(req.params.id)
        .then(res2 => {
            res.status(status.OK).json(res2);
        })
        .catch(err => {
            res.status(status.BAD_REQUEST).json({error: err});
        })
})

server.get("/api/recipes/:id/steps", (req, res) => {
    dbHelper.getSteps(req.params.id)
        .then(res2 => {
            res.status(status.OK).json(res2);
        })
        .catch(err => {
            res.status(status.BAD_REQUEST).json({error: err});
        })
})

server.get("/api/ingredients/:id/recipes", (req, res) => {
    dbHelper.getRecipesByIngredient(req.params.id)
        .then(res2 => {
            res.status(status.OK).json(res2);
        })
        .catch(err => {
            res.status(status.BAD_REQUEST).json({error: err});
        })
})

server.listen(5000, () => {
    console.log("listening on port 5000");
})