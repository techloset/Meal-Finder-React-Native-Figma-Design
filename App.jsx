import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/loginScreen/LoginScreen'
import OnBoardingScreen from './src/screens/onBoardingScreen/OnBoardingScreen'
import StepOne from './src/screens/stepOneScreen/StepOne'
import StepTwo from './src/screens/stepTwoScreen/StepTwo'
import Notification from './src/screens/notificationScreen/Notification'
import Feedback from './src/screens/feedabackScreen/Feedback'
import UpgradeScreen from './src/screens/upgradeScreen/UpgradeScreen'
import HomeScreen from './src/screens/homeScreen/HomeScreen'
import RecipeScreen from './src/screens/recipeScreen/RecipeScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
    {/* <StepOne></StepOne> */}
    {/* <StepTwo/> */}

    {/* <OnBoardingScreen/> */}
      {/* <LoginScreen /> */}
      {/* <Notification/> */}
      {/* <Feedback></Feedback> */}
      {/* <UpgradeScreen/> */}
      {/* <HomeScreen/> */}
      <NavigationContainer  >
      <Stack.Navigator initialRouteName='Notification' screenOptions={{headerShown:false}} >
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="UpgradeScreen" component={UpgradeScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  bg:{
    flex:1,
    backgroundColor:'#E5E5E5'
  }
})