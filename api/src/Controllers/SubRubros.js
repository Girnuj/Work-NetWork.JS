const { Subrubro, Rubro } = require('../db');

const allSubRubros = async () => {
	try {
		return await Subrubro.findAll({
			include: [
				{
					model: Rubro,
					attributes: ['nombre'],
					through: {
						attributes: [],
					},
				},
			],
		});
	} catch (error) {
		console.log('REVENTO', error);
	}
};
module.exports = { allSubRubros };
