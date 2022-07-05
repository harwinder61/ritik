import { StyleSheet,View, Image } from 'react-native'
import React from 'react'


const Logo = () => {
    return (
        <View style={styles.maincontainer}>
        <Image
        style={styles.logo}
        source={require('../assets/logo-black.png')} />
        </View>
  )
}

const styles = StyleSheet.create({

    logo: {
        width: 100,
        height: 120,
        backgroundColor: '#ffffff',
  
      },
      maincontainer: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    }

})


export default Logo