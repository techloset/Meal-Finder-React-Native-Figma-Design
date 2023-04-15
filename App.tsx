import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/loginScreen/LoginScreen'
import OnBoardingScreen from './src/screens/onBoardingScreen/OnBoardingScreen'
import StepOne from './src/screens/stepOneScreen/StepOne'
import StepTwo from './src/screens/stepTwoScreen/StepTwo'
import Notification from './src/screens/notificationScreen/Notification'
const App = () => {
  return (
    <>
    {/* <StepOne></StepOne> */}
    {/* <StepTwo/> */}

    {/* <OnBoardingScreen/> */}
      {/* <LoginScreen /> */}
      <Notification/>
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