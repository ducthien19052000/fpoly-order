import {ActionType, getDataSuccess} from '../Action/categoryAction'
import {fork, put, take} from 'redux-saga/effects'

function* fetchListCategory(){
    while(true){
      yield take(ActionType.GET_DATE_CATEGORY)
        const requestGet = yield fetch(`https://website-fpoly-food.herokuapp.com/category/`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
            })
                
        })
        const resp = yield requestGet.json();
     
            yield put(getDataSuccess(resp.body.content));

    }
   
}
export default function* watchCategorySagaGetdata(){
    yield fork(fetchListCategory);

}