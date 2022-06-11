const { Router } = require('express');
const { allProvincias, provDB } = require('../Controllers/Provincias');
const { allRubros } = require('../Controllers/Rubros');
const { allSubRubros } = require('../Controllers/SubRubros');

const { Rubro, Subrubro, Provincia, Localidad  } = require('../db');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/rubros', async (req, res) => {
	try {
		let rubros = await allRubros();
		rubros.length ? res.status(200).send(rubros) : res.status(404);
	} catch (error) {
		console.log('/rubros get', error);
	}
});

router.post('/rubro', async (req, res) => {
	try {
		let { nombre } = req.body;

		let [nuevoRubro] = await Rubro.findOrCreate({
			where: { nombre },
		});
		return res.status(200).send(nuevoRubro);
	} catch (error) {
		console.log(`error post rubro '${error}'`, error);
	}
});

router.get('/SubRubro', async (req, res) => {
	try {
		let SubRubro = await allSubRubros();
		SubRubro.length
			? res.status(200).send(SubRubro)
			: res.status(404).send('error');
	} catch (error) {
		console.log('REVENTO', error);
	}
});

router.post('/SubRubro', async (req, res) => {
	try {
		let { nombre } = req.body;
		let [nuevoSubRubro] = await Subrubro.findOrCreate({
			where: { nombre },
		});
		return res.status(200).send(nuevoSubRubro);
	} catch (error) {
		console.log('REVENTO POST', error);
	}
});

router.get('/provincias', async (req,res, next) => {
    try {
        res.status(200).send(
            await Provincia.findAll({
              attributes: { exclude: ["createdAt", "updatedAt"] },
             
            })
          );
    } catch (error) {
        next(error)
    }
})

module.exports = router;
