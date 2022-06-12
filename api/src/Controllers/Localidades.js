//como la api solo tiene un limite de peticiones guardo localidades en la base de datos de apoco
const {Provincia, Localidad} = require("../db");
const { default: axios } = require("axios");
const e = require("express");


const localidadesChubut = async () => {
    try {
        let chub = await Localidad.count();
        if(chub == 0){
            const chubLo = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=chubut&campos=nombre&max=90`);
            const infoChu = await chubLo.data?.localidades.map(el => {
                return {
                    nombre: el.nombre
                }
            });
            await infoChu.map(async(el) => {
                await Localidad.create({
                    nombre: el.nombre
                })
            })
            return infoChu
        }
    } catch (error) {
        console.log("error localidadesChubut", error)
    }
}

const localidadesMendoza = async () => {
    try {
        const mendlo = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=mendoza&campos=nombre&max=213`)
        const infoMen = await mendlo.data?.localidades.map(el => {
            return {
                nombre: el.nombre
            }
        })
        await infoMen.map(async(e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
        return infoMen
    } catch (error) {
        console.log("error localidadesMendoza", error)
    }
}

module.exports = {
    localidadesChubut,
    localidadesMendoza
}