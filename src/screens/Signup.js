import { Text, StyleSheet, View, Pressable, ActivityIndicator } from 'react-native'
import React, { useState , useEffect , useRef} from 'react'
import Logo from '../components/Logo'
import Input from '../components/Input'
import { useNavigation } from '@react-navigation/native'
import { Registerapi } from '../services/Registerapi'
import DropdownAlert from 'react-native-dropdownalert'
import { useSelector , useDispatch } from 'react-redux'
import { SIGNUP_API } from '../redux/actions/actiontype'
import { signupApi } from '../redux/actions/signup'




const Signup = () => {  

  const signupstate = useSelector(state => state)


let dropDownAlertRef = useRef();

const [fname, setFirstname] = useState();
const [lname, setLastname] = useState();
const [disabled, setDisabled] = useState();
const [disabledanimating , setDisabledanimating] = useState();
const [backgroundcolor, setBackgroundcolor] = useState();

const [email, setEmail] = useState();
const [username, setUsername] = useState();
const [password, setPassword] = useState();
const [confirmpassword, setConfirmpassword] = useState();
const [phone, setPhone] = useState();


const navigation = useNavigation();
const dispatch = useDispatch(); 

const signupsubmit = async () => {
// dispatch({SIGNUP_API})
// return

  setDisabledanimating(true);
  setDisabled(true)
  setBackgroundcolor("#a9a9a9");
  alert("xx")
console.log("====");
 const result =  await dispatch(signupApi({fname,lname,email,username,password,confirmpassword,phone}))
 console.log(result,"result");
 setDisabledanimating(false);
 setDisabled(false)
 setBackgroundcolor("black");

//  if(result.data.status == 400){
//     dropDownAlertRef.alertWithType('error', 'Error', result.data.message);
   
//   }
//   if(result.data.status == 200){
//     dispatch(signupApi(result.data))
    

//     dropDownAlertRef.alertWithType('success', 'Success', result.data.message);
//   }

//  setDisabledanimating(false);
//  setDisabled(false)
//  setBackgroundcolor("black");

//  if(result.data.status == 400){
//     dropDownAlertRef.alertWithType('error', 'Error', result.data.message);
   
//   }
//   if(result.data.status == 200){
//     dispatch(signupApi(result.data))
    

//     dropDownAlertRef.alertWithType('success', 'Success', result.data.message);
//   }
  
}

  useEffect(() => {
  if(fname && lname && email && username && password && confirmpassword && phone) {
    setDisabled(false)
    setBackgroundcolor("black");
  }else{
    setDisabled(true);
    setDisabledanimating(false);
    setBackgroundcolor("#a9a9a9");

  }

  }, [fname,lname,email,username,password,confirmpassword,phone]);


    return (
      <View  style={{backgroundColor:"white",flex:1}} >
        <View>
        <Logo />
      </View>
      <View>
      <View>
        <Input
         label="First Name"
         onChangeText={(fname) => setFirstname(fname)}
         placeholder="First Name"
        />
        <Input 
         label="Last Name"
         onChangeText={(lname) => setLastname(lname)}
         placeholder="Last Name"
        />
        </View>
        </View>

        <View>
       <Input label="Email" onChangeText={(email) => setEmail(email)}  placeholder="Email"></Input>
        <Input label="Username" onChangeText={(username) => setUsername(username)}  placeholder="Username"></Input>
        <Input label="Password" onChangeText={(password) => setPassword(password)} secureTextEntry placeholder="Password"></Input>
        <Input label="Confirm Password" secureTextEntry onChangeText={(confirmpassword) => setConfirmpassword(confirmpassword)}  placeholder="Confirm Password"></Input>
        <Input label="Phone Number" onChangeText={(phone) => setPhone(phone)} placeholder="Phone Number"></Input>
      </View>


      <View>
        <Pressable backgroundColor={backgroundcolor}  disabled={disabled} onPress={signupsubmit} style={styles.buttonstyle}>
            <Text style={styles.textpress}>Sign Up</Text>
            <ActivityIndicator animating = {disabledanimating} />
        </Pressable>
      </View>
      <Text style={styles.simpletext}>Already Have an account?<Text onPress={() => navigation.navigate("Login")}>Login</Text></Text>
      

      <DropdownAlert
        ref={(ref) => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
      />
       </View>
    )
  

}

const styles = StyleSheet.create({
  buttonstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:'red',
    margin:25,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
       simpletext:{
        color: 'black',
        marginTop:5,
        fontSize: 16,
        textAlign: 'center',
     },

  textpress:{
      color: 'white',
      justifyContent: 'center',
      height:35,
      marginTop:5,
      fontSize: 20,
      fontWeight: "bold"
   },
   container: {
    flex: 1,
  },
  item: {
    width: '40%', // is 50% of container
  
  }


})

export default Signup
