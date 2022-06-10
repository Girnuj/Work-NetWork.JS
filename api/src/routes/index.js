const { Router } = require('express');
const { allRubros } = require('../Controllers/Rubros');

const { Rubro } = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/rubros', async (req, res) => {
    try {
        let rubros =  await allRubros();
        rubros.length
        ? res.status(200).send(rubros)
        : res.status(404)
    } catch (error) {
        console.log("/rubros get", error)
    }
})

router.post('/rubro', async (req, res) => {
    try {
        let {
            nombre
        } = req.body;

        let [nuevoRubro] = await Rubro.findOrCreate({
            where: {nombre}
        })
        return res.status(200).send(nuevoRubro);
    } catch (error) {
        console.log(`error post rubro '${error}'` , error)
    }
})


module.exports = router;
