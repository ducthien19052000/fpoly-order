import {ActionType, getDataSuccess} from '../Action/userAction'
import {fork, put, take} from 'redux-saga/effects'


function* fetchUser(){
    while(true){
        const isLogin = localStorage.getItem('accessToken')
   if(isLogin){
    yield take(ActionType.GET_USER)
    const requestGet = yield fetch(`https://website-fpoly-food.herokuapp.com/user/me`,{
            method: 'GET',
            headers: new Headers({
                'Accept' : '*/*',
                'Authorization': `Bearer ${isLogin}`
                
            })
        })
    const resp = yield requestGet.json();
        console.log(resp)
        yield put(getDataSuccess(resp));
   }
     

    }
   
}
export default function* watchUserSagaGetData(){
    yield fork(fetchUser);

}