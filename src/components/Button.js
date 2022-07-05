import { StyleSheet,Pressable } from 'react-native'
import React from 'react'


const Button = () => {
    return (
        <Pressable style={styles.buttonstyle}>
            <Text style={styles.textpress}>Log In</Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
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
    

})


export default Button