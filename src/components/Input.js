import { StyleSheet,TextInput } from 'react-native'
import React from 'react'

const Input =({label,value,placeholder,secureTextEntry,onChangeText}) =>{

    return(
          <TextInput
              style={[styles.input,styles.subcontainer]}
              underlineColorAndroid = "transparent"
              placeholder={placeholder}
              label={label}
              value={value}
              secureTextEntry = {secureTextEntry}
              onChangeText ={onChangeText}
              
             />

    )

}


const styles = StyleSheet.create({

    subcontainer: {
        backgroundColor: '#ffffff',
    },
    input: {
    backgroundColor:'#ffffff',
    borderBottomWidth:1,
    borderBottomColor:"gray",
    margin:12,
    },

})

export default Input
