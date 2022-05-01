const userModelo = require('../models/user');
const User = require('../models/user');


const controller = {}

controller.post = async (req, res) => {

    //console.log("por que");
    //res.json(req.body.password);
    //res.json("hola");
    //res.json(userModelo);
    const ususario = new userModelo();
    ususario.email = req.body.email
    ususario.password = ususario.encryptPassword(req.body.password);
    ususario.save();
    res.json(ususario);
    //const user = await userModelo.create(req.body);
    //user.password = User.encryptPassword(user.password);
    //user.save();
    //res.json(user);
}


controller.validPassword = async(req, res) => {
    console.log(req.body);
    const email = req.body.email
    const password = req.body.password
    const ususario = await userModelo.findOne({'email': email});
    //res.json(ususario)
    
    if (ususario.comparePassword(password)) {
        res.json(ususario);
    }else{
        res.json(null);
    }
}

controller.getUser = async (req, res) => {
    const id = req.params.id
    //console.log(req.params);
    const user = await userModelo.findById(id);
    //console.log(user)
    res.json(user);
}

controller.get = async (req, res) =>{
    const email = req.params.email
    
    const user = await userModelo.findOne({'email': email})
    //console.log(user);
    res.json(user)
}

controller.exito = async (req, res) => {
    res.json('exito');
}

controller.fallo = async (req, res) => {
    res.json('fallo');
}

module.exports = controller;