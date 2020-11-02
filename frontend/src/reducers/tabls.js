import { GET_TABL_LIST, DELETE_TABL, ADD_TABL, TOGGLE_TABL} from '../action/types'

const initialState = {
    tabls: []
};

export default function (state = initialState, action){
    switch (action.type){
        case GET_TABL_LIST:
            return {
                ...state,
                tabls: action.playload
            };
        case DELETE_TABL:
            return {
                ...state,
                tabls: state.tabls.filter(tabl => tabl.id != action.playload)
            };
        case TOGGLE_TABL:
            return {
                ...state,
                tabls: [...state.tabls]
            };
        case ADD_TABL:
            return {
                ...state,
                tabls: [...state.tabls, action.playload]
            };
        default:
            return state;
    }
};
