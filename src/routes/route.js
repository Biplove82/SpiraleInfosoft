// const express = require('express');
var router = require("express").Router();
const modells = ("../modells/modells.js");
// const controller=require("../controller/controller");
const { createuser, getuserdata, log, register, login, update, deleteuser } = require("../controller/controller");

const { createsalary, getsalary, deletesalary, update_salary } = require("../controller/salarycontroller.js");

router.post("/createuser", createuser);
router.get("/getuserdata", getuserdata);
router.get("/log", log);
router.post("/register", register);
router.post("/login", login);
router.put("/update/:id", update);
router.delete("/deleteuser/:userid", deleteuser);

//salaryscema API.

router.post("/createsalary", createsalary);
router.get("/getsalary", getsalary);
router.put("/update_salary/:id3", update_salary);
router.delete("/deletesalary/:userid", deletesalary);


module.exports = router;