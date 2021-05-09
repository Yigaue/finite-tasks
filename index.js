// import express from "express";

// import consign from "consign";

const express = require('express');

const consign = require("consign");

const app = express();
const PORT  = 3000;

app.set("json spaces", 4);
// app.get("/", (req, res) => res.send("hello world"));
consign()
    .include("routes")
    .into(app);

app.listen(PORT, () => console.log(`Task Manager listening on port ${PORT}`));