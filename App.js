import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import firebase from "firebase";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

var firebaseConfig = {
  apiKey: "AIzaSyBM7DjEZCtH-CeQn0kp6VPN3FSru9BrA-4",
  authDomain: "myapp-9f9b9.firebaseapp.com",
  projectId: "myapp-9f9b9",
  storageBucket: "myapp-9f9b9.appspot.com",
  messagingSenderId: "90010114903",
  appId: "1:90010114903:web:44a00a25600eb9c50dbc12",
  measurementId: "G-J07DPETDV0"
};

firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
    }
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="chatbubble" size={24} color={tintColor} />
    }
  },
 
  Post: {
    screen:PostScreen ,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-add-circle" size={24} color={tintColor} />
    }
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
    }
  }, 
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="person" size={24} color={tintColor} />
    }
  },
  
 

})

/*const AppStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageScreen,
  Notification: NotificationScreen,
  Post: PostScreen,
  Profile: ProfileScreen,
})*/

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
)