import { CLEAR_ORDER, CREAT_ORDER, FETCH_ORDER } from "../actions/type";

export const orderReducer=(state={},action)=>{
    switch(action.type){
        case CREAT_ORDER:
            return {order:action.data.order};
            case FETCH_ORDER:
                return{
                    ...state,
                    order:action.data.order}

            case CLEAR_ORDER:
                return{order:false};
                default: return state
    }
}