import axios from "axios";
export const GET_RUBROS = "getRubros";
export const POST_NEW_RUBRO = "postNewRubro"

export function getRubros() {
    return function(dispatch){
         axios.get('http://localhost:3001/rubros')
        .then((data) => {
            dispatch({
                type: GET_RUBROS,
                payload: data.data
            })
        })
        .catch(e => {
            console.log(e, 'Error en getGames')
        })
    }
    
}

export function postNewRubro(data) {
    return  function (dispatch) {
      axios.post(`http://localhost:3001/rubro`, data)
      .then(e => {
          dispatch({
              type: POST_NEW_RUBRO,
              payload: e
          })
      })
      .catch(e => {
          console.log(e, 'Error en la creacion')
      })
     
    };
}