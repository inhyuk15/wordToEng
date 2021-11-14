import React from "react";
import {View, TouchableOpacity, Text, styleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { MainPage,StudyPage, Review, MyPage, Interest } from "..";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const OnClickPage =({navigation})=>{
    return(
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 70,  },
          }}
          initialRouteName="Scene1"
        >
            <Tab.Screen name="Scene1" component={Scene1} 
                options={{ title: '영상' }}
            />
            <Tab.Screen name="Scene2" component={Scene2} 
                options={{ title: '발음' }}
                navigation = {navigation}
            />
            
        </Tab.Navigator>
    );
}

export default OnClickPage;