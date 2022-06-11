const { Router } = require('express');
const { allRubros } = require('../Controllers/Rubros');
const { allSubRubros } = require('../Controllers/SubRubros');

const { Rubro, Subrubro } = require('../db');

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

module.exports = router;
