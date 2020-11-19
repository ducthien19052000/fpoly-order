import {ActionType} from '../Action/categoryAction'

const list ={
    lists: []
}

const groupReducer = (state=list,action) => {
    switch (action.type){
        case ActionType.GET_DATE_CATEGORY:{
            return {...state}
        }
      
        case  ActionType.GET_DATE_CATEGORY_SUCCESS: {
        
            return {...state, lists: action.payload.map((el, index) => ({...el, key: index}))}
          }
        case ActionType.GET_DATE_CATEGORY_ERROR:{
            return {...state}
        }
        default:
            return state;
    }
}

export default groupReducer;