import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import home from "./screens/home";
import profile from "./screens/profile";
import recents from "./screens/recents";

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initalRoute='home'
          activeColor="#02ad94"
          inactiveColor="#dedede"
          barStyle={{ backgroundColor: '#000' }}
        >
          <Tab.Screen
            name="Home"
            component={home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={28}/>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={28} />
              ),
            }}
          />
          <Tab.Screen
            name="Recents"
            component={recents}
            options={{
              tabBarLabel: 'Recents',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={28} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({

})

