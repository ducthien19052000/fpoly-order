import { ActionType, getDataGroupSuccess, getDataSuccess } from '../Action/index'
import { fork, put, take, takeLatest } from 'redux-saga/effects'

function* fetchListFood() {
    while (true) {
        yield take(ActionType.GET_DATA)
        const requestGet = yield fetch(`https://website-fpoly-food.herokuapp.com/product/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': '*/*'
            })

        })
        const resp = yield requestGet.json();
        console.log(resp)
        yield put(getDataSuccess(resp.body.content));

    }

}

function* fetchListFoodGroup(id) {
    console.log(id)
    try {
        const respone = yield fetch(`https://website-fpoly-food.herokuapp.com/product/?productName=&status=&size=4&page=0&previous_page=0&categoryId=${id.payload}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': '*/*'

            }),

        })
        const res = yield respone.json();
        console.log(res)
        yield put(getDataGroupSuccess(res.body.content));
    } catch (error) {
        // console.log(error);
    }

}
export default function* watchFoodSagaGetdata() {
    yield fork(fetchListFood);
    yield takeLatest(ActionType.GET_DATA_GROUP_FOOD, fetchListFoodGroup)

}