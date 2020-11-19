import {applyMiddleware, createStore} from  'redux'
import createSagaMiddleware from  "redux-saga"
import rootReducer from '../reducers/index'
import rootSaga from '../saga/footSaga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store;