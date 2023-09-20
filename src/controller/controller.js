const { MongoCursorInUseError } = require("mongodb");
const models = require("../modells/modells.js");
const { jwt } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { model } = require("mongoose");


const createuser = async function (req, res) {
    let user = req.body
    let data = await models.create(user)

    res.send({ msg: data })
}

const getuserdata = async function (req, res) {
    let id = req.body
    let data1 = await models.find();
    res.send({ msg: data1 })
}
const log = async function (req, res) {
    let logdata = req.body

    let login = logdata.login_at
    let logout = logdata.logout_at

    let user = await models.findOne({
        login_at: login,
        logout_at: logout,

    })

    res.send({ msg: user })

}
const register = async function (req, res) {
    try {
        const { username, password } = req.body
        let hasedpassword = await bcrypt.hash(password, 10)
        let user = new models({ username, password: hasedpassword })

        await user.save();
        res.status(201).json({ msg: "user registered" })
    }

    catch (err) {
        res.status(500).json({ msg: "failed" })
    }

}
const login = async function (req, res) {

    try {
        let { username, password } = req.body
        const user = await models.findOne({ username })
        if (!user) {
            return res.status(404).json({ msg: "user not found" });
        }

        let passwordmatch = await bcrypt.compare(password, user.password);
        if (!passwordmatch) {
            return res.status(401).json({ msg: "Authentication failed" });

        }

        let token = jwt.sign({ userid: userid }, 'your secret key', { expireIn: "1h" });
        res.status(200).json({ token });



    } catch (error) {
        res.status(500).json({ error: 'Login failed' })
    }
}

const update = async function (req, res) {

    let id = req.params.id

    let updateuserdata = req.body

    try {
        let updateuser = await models.findByIdAndUpdate(id, updateuserdata, { new: true })//return the update user)

        if (!updateuser) {
            res.status(404).json({ msg: "Not Found" })
        }
        res.json(updateuser)

    } catch (err) { res.status(500).json(err) }
}

const deleteuser = async function (req, res) {

    try {

        let { userId } = req.params;
        const del = await models.findByIdAndDelete(userId);
        if (!del) {
            res.status(404).json({ msg: "user not found" })
        } res.json({ msg: "user deleted sucessfully" })
    } catch (err) {
        res.status(500).json({ msg: "ERROR" })

    }

}







module.exports.createuser = createuser;
module.exports.getuserdata = getuserdata;
module.exports.log = log;
module.exports.register = register;
module.exports.login = login;
module.exports.update = update;
module.exports.deleteuser = deleteuser;