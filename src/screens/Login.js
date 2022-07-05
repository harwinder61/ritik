import { StyleSheet, Text, View, TextInput, Pressable, InputAccessoryView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Logo from '../components/Logo';
import Input from '../components/Input';

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState();
const [password, setPassword] = useState();
    const [disabledanimating , setDisabledanimating] = useState()
    const [disabled, setDisabled] = useState(true)
    const [backgroundcolor, setBackgroundcolor] = useState("#a9a9a9")



    
const signinsubmit = async () => {
  // dispatch({SIGNUP_API})
  // return
    setDisabledanimating(true);
    setDisabled(true)
    setBackgroundcolor("#a9a9a9");
  
  
   const result =  await Loginapi({fname,lname,email,username,password,confirmpassword,phone})
   setDisabledanimating(false);
   setDisabled(false)
   setBackgroundcolor("black");
  
   if(result.data.status == 400){
      dropDownAlertRef.alertWithType('error', 'Error', result.data.message);
     
    }
    if(result.data.status == 200){
      dispatch(signupApi(result.data))
      
  
      dropDownAlertRef.alertWithType('success', 'Success', result.data.message);
    }
    
  }

    useEffect(() => {
        if(username && password) {
          setDisabled(false)
          setBackgroundcolor("black");
        }else{
          setDisabled(true);
          setDisabledanimating(false);
          setBackgroundcolor("#a9a9a9");
      
        }
      
        }, [username,password]);


  


 return (
    <View style={{backgroundColor:"white",flex:1}}>
      <Logo/>

      <View style={styles.subcontainer}>
            <Input label="Username" placeholder="Username" onChangeText={(username) => setUsername(username)}></Input>
            <Input label ="Password" placeholder="password" onChangeText={(password) => setPassword(password)} secureTextEntry></Input>
         
        <Pressable backgroundColor={backgroundcolor}  disabled={disabled} onPress={signinsubmit} style={styles.buttonstyle}>
            <Text style={styles.textpress}>Log In</Text>
            <ActivityIndicator animating={disabledanimating} />
        </Pressable>

        <Text style={styles.simpletext}>Or, Sign in With</Text>
    </View>
    <View>
        <Text style={styles.signuptext}>  Dont Have an account?</Text>
        <Text 
        style={styles.signuplink}                    
        onPress={() => navigation.navigate("Signup")}
        > Sign up</Text>

    </View>
   
    
    </View>
     

   
  
  )


 }






const styles = StyleSheet.create({
    subcontainer: {
        backgroundColor: '#ffffff',
        
    },
    input: {
    borderBottomWidth:1,
    borderBottomColor:"gray",
    margin:25,
    },
       simpletext:{
        color: 'black',
        marginTop:5,
        fontSize: 16,
        textAlign: 'center',
     },
        signuptext:{
        textAlign:'center',
        fontsize:17,
        marginTop:6,
        color:'black',
        backgroundColor: 'white',


     },
     buttonstyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      color:'red',
      backgroundColor: 'black',
      margin:25,
      height: 45,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
    },

    textpress:{
        color: 'white',
        justifyContent: 'center',
        height:35,
        marginTop:5,
        fontSize: 20,
        fontWeight: "bold"
     },
  
     signuplink:{
        textAlign:'center',
        fontsize:17,
        fontWeight:'bold',
        marginTop:6,
        color:'black',
        backgroundColor: 'white',


  }
      
  });  



export default Login
