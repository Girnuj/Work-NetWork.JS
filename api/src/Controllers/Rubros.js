const e = require("express");
const {Rubro , Subrubro} = require("../db");

const allRubros = async () => {
    try {
        return await Rubro.findAll({
            include: [{
                model: Subrubro,
                attributes: ["nombre"],
                through: {
                    attributes: []
                }
            }]
        })
    } catch (error) {
        console.log("AllRubros error", error)
    }
}

module.exports = {
    allRubros
}