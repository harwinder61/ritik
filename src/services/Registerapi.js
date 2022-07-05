import reactNativeAxios from "react-native-axios";
import { baseUrl } from "../config"


export const Registerapi = async (payload) => { 

    console.log(payload,"payload")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")



   return fetch(`${baseUrl}users/register`, { 
    method: 'POST', 
    headers: {
        Accept: 'application/json',
    'Content-Type': 'application/json'
        
    },
    body: JSON.stringify(payload),
    })
    .then((response) => response.json())
    .then((json) => {
        return json
    
    })
      .catch(function (error) {
        console.log(error,"error");
      });



 }

 