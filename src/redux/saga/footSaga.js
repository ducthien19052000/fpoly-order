import { all } from 'redux-saga/effects';
import watchCategorySagaGetdata from './categorySaga';
import watchFoodSagaGetdata from './foodSaga';
import watchUserSagaGetData from './userSaga';


function* rootSaga() {
    yield all([
        watchFoodSagaGetdata(),
        watchCategorySagaGetdata(),
        watchUserSagaGetData()
    ]
    )
};
export default rootSaga;
