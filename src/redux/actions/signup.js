import { SIGNUP_API , LOGIN_API} from "./actiontype";

export function signupApi(data) {
    return {
        type: SIGNUP_API,
        payload: data
    }
}

export function loginApi(data){
    return{
        type: LOGIN_API,
        payload:data
    }
}