import { GET_RUBROS, POST_NEW_RUBRO } from "../Actions/Actions";

const initialState = {
    Rubros: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {

        case GET_RUBROS:
            return{
                ...state,
                Rubros: action.payload
            }

        case POST_NEW_RUBRO:
            return{
                ...state,
                Rubros: [...state.Rubros, action.payload]
            }

        default:
            return state;
    }
}