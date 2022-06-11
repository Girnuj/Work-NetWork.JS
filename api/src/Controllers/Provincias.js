const {Provincia, Localidad} = require("../db");
const { default: axios } = require("axios");




const allProvincias = async () => {
    try {
        let prov = await Provincia.count()
        if(prov === 0){
            const provInfoApi = await axios.get(`https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre`);
            const provInfo = await provInfoApi.data?.provincias.map(el => {
                return {
                    nombre: el.nombre,
                    id: el.id
                }
            });
           await provInfo.map(async (e) => {
                // console.log(e);
                // console.log(e.nombre);
               await Provincia.create({  
                            id: e.id,
                            nombre: e.nombre
                          })
            })
            return provInfo
        }
               
    } catch (error) {
        console.log('error en allprovincias',error)
    }
}

// const provDB = async () => {
//     return await Provincia.findAll({
//         include:[
//            {
//                model: Localidad,
//                attributes: ["nombre"],
//                through: {
//                    attributes: []
//                }
//            }
//         ]
//     })
  
// }


module.exports = {
    allProvincias,
    // provDB
}