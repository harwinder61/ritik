import { SIGNUP_API } from "../actions/actiontype";

const initialState = {
  
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    phone: "",


}

const signupReducers = (state = initialState,action) =>{


    switch(action.type){
    case SIGNUP_API:
        return{
            ...state,
            userData: action.data,
            
            
        }
    default:
    return state;

    }
}




export default signupReducers
