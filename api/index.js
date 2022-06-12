//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { localidadesChubut, localidadesMendoza, localidadesMisiones, lolcalidadesSalta, localidadesNeuquen, localidadesSantaFe, localidadesSanLuis, localidadesStaCruz, localidadesCatamarca, localidadesSanJuan, LocalidadesEntreRios, LocalidadesRioNegro, cordoba, LaRioja, LaPampa, SantiagoDlSt, Corrientes, Tucuman, Chaco, Formosa, jujuy } = require('./src/Controllers/Localidades.js');
const { allProvincias } = require('./src/Controllers/Provincias.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {

  allProvincias();
  localidadesChubut();
  localidadesMendoza();
  localidadesMisiones();
  lolcalidadesSalta(); 
  localidadesNeuquen();
  localidadesSantaFe();
  localidadesSanLuis();
  localidadesStaCruz();
  localidadesCatamarca();
  localidadesSanJuan();
  LocalidadesEntreRios();
  LocalidadesRioNegro();
  cordoba();
  LaRioja();
  LaPampa();
  SantiagoDlSt();
  Corrientes();
  Tucuman();
  Chaco();
  Formosa();
  jujuy();

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
