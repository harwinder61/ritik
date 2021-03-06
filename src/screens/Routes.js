import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
} from '@react-navigation/stack';

import Login from './Login';
import Signup from './Signup';

const Stack = createStackNavigator();

const Routes = () => {  
    
    return (
        <NavigationContainer>

        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false
            }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            
          />
        </Stack.Navigator>
        </NavigationContainer>

      );
  

}

const styles = StyleSheet.create({})
export default Routes
