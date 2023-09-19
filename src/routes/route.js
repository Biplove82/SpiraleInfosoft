// const express = require('express');
var router = require("express").Router();
const modells=("../modells/modells.js");
// const controller=require("../controller/controller");
const {createuser, getuserdata, log, register, login, update, deleteuser}=require("../controller/controller");



router.post("/createuser",createuser);
router.get("/getuserdata",getuserdata);
router.get("/log",log);
router.post("/register",register);
router.post("/login",login);
router.put("/update",update);
router.delete("/deleteuser",deleteuser);

module.exports = router;