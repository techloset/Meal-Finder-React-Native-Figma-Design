import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import OnBoardingScreen from '../screens/onBoardingScreen/OnBoardingScreen';
import StepOne from '../screens/stepOneScreen/StepOne';
import StepTwo from '../screens/stepTwoScreen/StepTwo';
import Notification from '../screens/notificationScreen/Notification';
import Feedback from '../screens/feedabackScreen/Feedback';
import UpgradeScreen from '../screens/upgradeScreen/UpgradeScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import RecipeScreen from '../screens/recipeScreen/RecipeScreen';
import PreparationScreen from '../screens/preparationScreen/PreparationScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import SettingScreen from '../screens/settingScreen/SettingScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="StepOne" component={StepOne} />
          <Stack.Screen name="StepTwo" component={StepTwo} />
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Feedback" component={Feedback} />
          <Stack.Screen name="UpgradeScreen" component={UpgradeScreen} />
          <Stack.Screen name="Tabs" component={TabNavigation} />

          <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
          <Stack.Screen
            name="PreparationScreen"
            component={PreparationScreen}
          />
          <Stack.Screen name="SettingScreen" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
