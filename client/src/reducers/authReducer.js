import {FETCH_USER, HANDLE_TOKEN} from "../actions/types";

export default (state = null, action) => {
    switch(action.type){
        case FETCH_USER: return action.payload;
        case HANDLE_TOKEN: return action.payload;
        default: return state
    }
}

