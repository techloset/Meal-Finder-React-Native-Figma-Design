import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ChatScreen from '../screens/chatScreen/ChatScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
  widthPixel,
} from '../utils/ResponsiveDesign';
import LinearGradient from 'react-native-linear-gradient';
const Tab = createBottomTabNavigator();
const Meal = () => {
  return <></>;
};
const Grocery = () => {
  return <></>;
};
const TabNavigation = () => {
  return (
    <>

{/* <Vie></Vie> */}
            {/* gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%) */}
            <LinearGradient colors={['rgba(255, 255, 255, 0)','#FFFFFF']}  
            
             style={{ height: 36,position:'absolute',bottom:pixelSizeVertical(45),
           width: '100%', zIndex: 100 }}/>
      <View style={{ flex: 1 }}>
      <Tab.Navigator
        activeColor=""
        initialRouteName="Home"
        screenOptions={{
          
          
          tabBarStyle: {
            paddingTop: pixelSizeVertical(7),
            height: pixelSizeVertical(45),
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 0,
          
          },

          tabBarItemStyle: {flex: 1, justifyContent: 'space-between'},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              return (
                <Image
                style={styles.icon}
                  source={require('../assets/images/t.png')}
                  />
                );
            },
            tabBarLabel: () => {
              return <Text style={styles.label}>Today</Text>;
            },
          }}
          />

        <Tab.Screen
          name="Meal"
          component={Meal}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              return (
                <Image
                style={styles.icon}
                source={require('../assets/images/meal.png')}
                />
                  );
            },
            tabBarLabel: () => {
              return <Text style={styles.label}>Meal Plan</Text>;
            },
          }}
        />
        <Tab.Screen
          name="Grocery"
          component={Grocery}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              return (
                <Image
                  style={styles.icon}
                  source={require('../assets/images/grocery.png')}
                  />
                );
            },
            tabBarLabel: () => {
              return <Text style={styles.label}>Grocery List</Text>;
            },
          }}
          />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
              return (
                <>
                  {focused && (
                    <View
                      style={{
                        backgroundColor: 'rgba(255, 53, 56, 1)',
                        marginLeft: -30,
                        marginBottom: -2,
                        borderRadius: 100,
                        width: widthPixel(5.5),
                        height: heightPixel(5.5),
                      }}></View>
                  )}
                  <Image
                    style={styles.icon}
                    source={require('../assets/images/chat.png')}
                  />
                </>
              );
            },
            tabBarLabel: () => {
              return <Text style={styles.label}>{`Chat`}</Text>;
            },
          }}
          />
      </Tab.Navigator>
    </View>
              </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  icon: {
    width: widthPixel(16),
    height: heightPixel(16),
    resizeMode: 'contain',
    marginBottom: pixelSizeVertical(2),
  },
  label: {
    fontSize: fontPixel(9),
    fontFamily: 'SF-Pro-Display-Medium',
    color: 'black',
  },
});
