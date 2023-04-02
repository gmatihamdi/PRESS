import { FETCH_STAGIAIRES } from "./type"

export const fetchStagiaires = () => {
    return(dispatch)=>{
        fetch('/api/stagiaires').then(res=>res.json()).then(data=>{
            dispatch({
                type:FETCH_STAGIAIRES,
                data:data
            })
        })
    }
}