import { FETCH_STAGIAIRES } from "../actions/type"


export const stagiairesRducer=(state={},action)=>{
    switch(action.type){
        case FETCH_STAGIAIRES:
            return{
                ...state,
                stagiaires:action.data.stagiaires}

            default: return state
    }
}