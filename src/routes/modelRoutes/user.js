const router = require('express').Router();
//const res = require('express/lib/response');
const passport = require('passport');

const controller = require('../../controller/user.controller');

router.post('/registrar', controller.post);

router.post('/contrasenia', controller.validPassword);

router.get('/getUser/:id', controller.getUser)

router.get('/exito', controller.exito);

router.get('/fallo', controller.fallo);

router.get('/:email', controller.get);

/*router.post('/singUp', passport.authenticate('local-singnup', {
    successRedirect: '/exito',
    failureRedirect: '/fallo',
    passReqToCallback:true
}));

router.post('/singIn', passport.authenticate('local-signin', {
    successRedirect: '/exito',
    failureRedirect: '/fallo',
    failureFlash: true
}));*/



module.exports = router;