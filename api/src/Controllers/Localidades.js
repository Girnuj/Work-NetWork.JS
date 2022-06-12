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

const localidadesMisiones = async() => {
    try {
        const misilo = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=misiones&campos=nombre&max=140`)
        const infoMisi = misilo.data?.localidades.map(el => {
            return {
                nombre: el.nombre
            }
        })
        await infoMisi.map(async(e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log("error localidadesMisiones ", error)
    }
}

const lolcalidadesSalta = async() => {
    try {
        const saltlo = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=salta&campos=nombre&max=147`)
        const infoSalt = saltlo.data?.localidades.map( el => {
            return {
                nombre: el.nombre
            }
        })
        await infoSalt.map(async (e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log("error en lolcalidadesSalta",error)
    }
}

const localidadesNeuquen = async () => {
    try {
        const neulo = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=neuquen&campos=nombre&max=61`)
        const infoNeu = await neulo.data?.localidades.map( el => {
            return {
                nombre: el.nombre
            }
        })
        await infoNeu.map(async(el) => {
            await Localidad.create({
                nombre: el.nombre
            })
        })
    } catch (error) {
        console.log("error localidadesNeuquen ", error)
    }
}

const localidadesSantaFe = async () => {
    try {
        const santa = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=Santa%20Fe&campos=nombre&max=386`)
        const infosanta = await santa.data?.localidades.map(el => {
            return {
                nombre: el.nombre
            }
        })
        await infosanta.map(async(el) => {
            await Localidad.create({
                nombre: el.nombre
            })
        })
    } catch (error) {
        console.log(`error localidadesSantaFe ${error}`)
    }
}

const localidadesSanLuis = async () => {
    try {
        const sanluis = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=San%20Luis&campos=nombre&max=93`)
        const infosan = await sanluis.data?.localidades.map(el => {
            return {
                nombre: el.nombre
            }
        })
        await infosan.map(async(el) => {
            await Localidad.create({
                nombre: el.nombre
            })
        })
    } catch (error) {
        console.log(`error localidadesSanLuis ${error}`)
    }
}

const localidadesStaCruz = async() => {
    try {
        const stacruz = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=Santa%20cruz&campos=nombre&max=27`)
        const infosata = await stacruz.data?.localidades.map(e => {
            return {
                nombre: e.nombre
            }
        })
        await infosata.map(async(e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log("error en localidadesStaCruz", error)
    }
}

const localidadesCatamarca = async () => {
    try {
        const cata = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=catamarca&campos=nombre&max=182`)
        const catainfo = await cata.data?.localidades.map((e) => {
            return {
                nombre: e.nombre
            }
        });
        await catainfo.map(async(e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log('error en localidadesCatamarca',error)
    }
} 

const localidadesSanJuan = async () => {
    try {
        const juan = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=San%20Juan&campos=nombre&max=99`)
        const infojuan = await juan.data?.localidades.map(e => {
            return {
                nombre: e.nombre
            }
        })
        await infojuan.map(async(e) =>{
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log("error en localidadesSanJuan", error)
    }
}

const LocalidadesEntreRios = async () => {
    try {
        const entre = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=entre%20rios&campos=nombre&max=176`)
        const infoentre = await entre.data?.localidades.map(e => {
            return {
                nombre: e.nombre
            }
        })
        await infoentre.map(async(e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const LocalidadesRioNegro = async () => {
    try {
        const rio = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=rio%20negro&campos=nombre&max=162`)
        const inforio = await rio.data?.localidades.map(e => {
            return {
                nombre: e.nombre
            }
        })
        await inforio.map(async(e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const cordoba = async () => {
    try {
        const cba = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=cordoba&campos=nombre&max=568`)
        const infocba = await cba.data?.localidades.map(r => {
            return {
                nombre: r.nombre
            }
        })
        await infocba.map(async(e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const LaRioja = async () => {
    try {
        const Lario = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=La%20Rioja&campos=nombre&max=92`)
        const infola = await Lario.data?.localidades.map(e => {
            return {
                nombre: e.nombre
            }
        })
        await infola.map(async (en) => {
            await Localidad.create({
                nombre: en.nombre
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const LaPampa = async () => {
    try {
        const lapa = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=La%20pampa&campos=nombre&max=89`)
        const infolapa = await lapa.data?.localidades.map(e =>{
            return {
                nombre: e.nombre
            }
        })
        await infolapa.map(async (e) => {
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const SantiagoDlSt = async () => {
    try {
        const santi = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=santiago%20del%20estero&campos=nombre&max=165`)
        const infosanti = await santi.data?.localidades.map(e => {
            return {
                nombre: e.nombre
            }
        })
        await infosanti.map(async(e) =>{
            await Localidad.create({
                nombre: e.nombre
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const Corrientes = async() => {
    const corri = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=Corrientes&campos=nombre&max=77`)
    const info = await corri.data?.localidades.map(el => {
        return {
            nombre: el.nombre
        }
    })
    await info.map(async(el) => {
        await Localidad.create({
            nombre: el.nombre
        })
    })
}

const Tucuman = async() => {
    const tucu = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=tucuman&campos=nombre&max=113`)
    const info = await tucu.data?.localidades.map(e => {
        return{
            nombre: e.nombre
        }
    })
    await info.map(async(e) => {
        await Localidad.create({
            nombre: e.nombre
        })
    })
}

const Chaco = async () => {
    const chaco = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=chaco&campos=nombre&max=91`)
    const info = await chaco.data?.localidades.map(e => {
        return {
            nombre: e.nombre
        }
    })
    await info.map(async(e) => {
        await Localidad.create({
            nombre: e.nombre
        })
    })
}

const Formosa = async () => {
    const form = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=Formosa&campos=nombre&max=64`)
    const infor = await form.data?.localidades.map( el => {
        return {
            nombre: el.nombre
        }
    })
    await infor.map(async(e)=>{
        await Localidad.create({nombre: e.nombre})
    })
}

const jujuy = async () => {
    const juju = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=Jujuy&campos=nombre&max=161`)
    const info = await juju.data?.localidades.map(e => {
        return {
            nombre: e.nombre
        }
    })
    await info.map(async(e) => {
        await Localidad.create({nombre: e.nombre})
    })
}

module.exports = {
    localidadesChubut,
    localidadesMendoza,
    localidadesMisiones,
    lolcalidadesSalta,
    localidadesNeuquen,
    localidadesSantaFe,
    localidadesSanLuis,
    localidadesStaCruz,
    localidadesCatamarca,
    localidadesSanJuan,
    LocalidadesEntreRios,
    LocalidadesRioNegro,
    cordoba,
    LaRioja,
    LaPampa,
    SantiagoDlSt,
    Corrientes,
    Tucuman,
    Chaco,
    Formosa,
    jujuy
}