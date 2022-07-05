import { takeLatest, put, call } from "redux-saga/effects";
import { Registerapi } from "../../services/Registerapi";
import { SIGNUP_API,LOGIN_API } from "../actions/actiontype";


function* workerSignupApi(action) {
  try {

 
    const result =  yield Registerapi(action.payload)
    console.log(result,"result");
 

  } catch (error) {
    console.log(error,"error")    
  }
}

export function* watcherSignupApi() {
    alert("in watcher")
    yield takeLatest(SIGNUP_API, workerSignupApi);

  }
  