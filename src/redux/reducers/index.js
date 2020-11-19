import foodReducer from './foodReducer'
import  groupReducer from './group-food'
import cart from './cartReducer'
import userReducer from './userReducer';

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    foodData: foodReducer,
    groupData:groupReducer,
    cartData:cart,
    userData: userReducer
});
export default rootReducer;