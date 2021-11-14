import React from "react";
import {View, TouchableOpacity, Text, styleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { MainPage,StudyPage, Review, MyPage, Interest } from ".";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const Home = ({navigation})=>{
    // const userInfo = useSelector(state=> state.userInfo);
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarItemStyle: { width: 70,  },
          }}
          initialRouteName="StudyPage"
          headerLeft
        >
            <Tab.Screen name="MainPage" component={MainPage} 
                options={{ title: '홈', 
                }}
            />
            <Tab.Screen name="StudyPage" component={StudyPage} 
                options={{ title: '학습' }}
                navigation = {navigation}
            />
            <Tab.Screen name="Review" component={Review} 
                options={{ title: '복습' }}
            />
            <Tab.Screen name="Interest" component={Interest} 
                options={{ title: '관심' }}
            />
            <Tab.Screen name="MyPage" component={MyPage} 
                options={{ title: '마이 페이지' }}
            />
        </Tab.Navigator>
    );
}

export default Home;