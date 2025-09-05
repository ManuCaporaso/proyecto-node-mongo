const router = require('express').Router();

//router.get('/', (req, res) => {  res.send('¡Hola, mundo! Esta es la ruta raíz.');}); 

router.use('/users', require('./user'));

module.exports = router;    