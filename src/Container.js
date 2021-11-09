import * as React from 'react';
import {View, Text} from 'react-native';
import { Login, Home } from './components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const Container = () =>{
    return(
        <NavigationContainer
            initialRouteName = "Login"
        >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


export default Container;