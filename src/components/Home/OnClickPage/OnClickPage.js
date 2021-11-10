import React from "react";
import {View, TouchableOpacity, Text, styleSheet} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { MainPage,StudyPage, Review, MyPage, Interest } from "..";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const OnClickPage =()=>{
    return(
        <View>
            <Text>hi</Text>
        </View>
    );
}

export default OnClickPage;