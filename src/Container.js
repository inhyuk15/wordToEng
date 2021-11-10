import * as React from 'react';
import {View, Text, Image, styleSheet, TextInput} from 'react-native';
import { Login, Home } from './components';
import OnClickPage from './components/Home/OnClickPage/OnClickPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import search from '../assets/search.png';
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

function LogoTitle() {
  return(
    <SafeAreaView style={{flexDirection:'row', justifyContent:'flex-end', padding : 5, top: 10}}>
      <Text style ={{flex: 1, fontSize:25, bottom : 8, left : 8}}>말트영</Text>
      <TextInput
        editable
        maxLength ={20}
        style={{
          backgroundColor: '#eee', flex:1, right : 60, bottom: 5, padding:5,
          borderRadius:50,
          borderWidth: 3,
          borderColor : '#aaa',
          height : 30
        }}
      />
      <Image
        source={search}
        style={{
          width: 25, height: 25,
          right: 50,
          tintColor: "#5359D1",
        }}
      />
    </SafeAreaView>
  );
}

const Container = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              // title: '말트영'
              headerTitle: (props) => <LogoTitle />
            }}
          />
          <Stack.Screen
            name="OnClickPage"
            component={OnClickPage}
            options={{
              // title: '말트영'
              headerTitle: (props) => <Text>영어 발음 공부하기</Text>
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


export default Container;