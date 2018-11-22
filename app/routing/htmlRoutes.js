const path = require("path");
const express = require("express");

module.exports = (app) => {
	app.get("/", express.static(path.join(__dirname, '../public/home.html')));
}