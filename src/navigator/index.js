import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/auth/Login";
import SignUpScreen from "../screens/auth/SignUp";
import OnBoardingScreen from "../screens/onboarding";
import HomeScreen from "../screens/home";
import ResetPasswordScreen from "../screens/auth/ResetPassword";
import SearchScreen from "../screens/home/SearchScreen";
import EventScreen from "../screens/home/EventScreen";
import NotificationScreen from "../screens/home/NotificationScreen";
import ProfileScreen from "../screens/home/ProfileScreen";
import { tabBarOptions } from "../constant/TabBarOptions";
import { ScreenNames } from "../constant/ScreenNames";
import VerificationPage from "../screens/auth/ResetPassword/VerificationPage";

import AsyncStorage from "@react-native-async-storage/async-storage";
import EventDetailScreen from "../screens/home/EventDetail";
import BookingConfirmPage from "../screens/home/EventDetail/BookingConfirmPage";

const Navigator = () => {
  const MainNavigator = createNativeStackNavigator();
  const HomeNavigator = createNativeStackNavigator();
  const AuthNavigator = createNativeStackNavigator();
  const TabNavigator = createBottomTabNavigator();

  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  useEffect(() => {
    userData();
  }, []);

  console.log("user", isUserLoggedIn);
  const userData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");

      if (value !== null) {
        setisUserLoggedIn(true);
        return;
      } else {
        setisUserLoggedIn(false);
      }
    } catch (e) {
      setisUserLoggedIn(false);
    }
  };

  const AuthFlow = () => {
    return (
      <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
        <AuthNavigator.Screen
          name={ScreenNames.onBoarding}
          component={OnBoardingScreen}
        />
        <AuthNavigator.Screen
          name={ScreenNames.signIn}
          component={LoginScreen}
        />
        <AuthNavigator.Screen
          name={ScreenNames.signup}
          component={SignUpScreen}
        />
        <AuthNavigator.Screen
          name={ScreenNames.resetPassword}
          component={ResetPasswordScreen}
        />
        <AuthNavigator.Screen
          name={ScreenNames.verificationPage}
          component={VerificationPage}
        />
      </AuthNavigator.Navigator>
    );
  };

  const BottomFlow = () => {
    return (
      <TabNavigator.Navigator screenOptions={{ headerShown: false }}>
        <TabNavigator.Screen
          options={tabBarOptions.Home}
          name={ScreenNames.homeFlow}
          component={HomeFlow}
        />
        <TabNavigator.Screen
          options={tabBarOptions.Search}
          name={ScreenNames.search}
          component={SearchScreen}
        />
        <TabNavigator.Screen
          options={tabBarOptions.Events}
          name={ScreenNames.event}
          component={EventScreen}
        />
        <TabNavigator.Screen
          options={tabBarOptions.Notification}
          name={ScreenNames.notification}
          component={NotificationScreen}
        />
        <TabNavigator.Screen
          options={tabBarOptions.Profile}
          name={ScreenNames.profile}
          component={ProfileScreen}
        />
      </TabNavigator.Navigator>
    );
  };

  const HomeFlow = () => {
    return (
      <HomeNavigator.Navigator screenOptions={{ headerShown: false }}>
        <HomeNavigator.Screen
          name={ScreenNames.home}
          component={HomeScreen}
        />
        <HomeNavigator.Screen
          name={ScreenNames.eventDetailPage}
          component={EventDetailScreen}
        />
        <HomeNavigator.Screen
          name={ScreenNames.bookingConfirmationPage}
          component={BookingConfirmPage}
        />
      </HomeNavigator.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{ headerShown: false }}>
        <MainNavigator.Screen
          name={ScreenNames.authFlow}
          component={AuthFlow}
        />
        <MainNavigator.Screen
          name={ScreenNames.bottomTabBar}
          component={BottomFlow}
        />
        {/* {isUserLoggedIn ? (
          <>
            <MainNavigator.Screen
              name={ScreenNames.bottomTabBar}
              component={BottomFlow}
            />
            <MainNavigator.Screen
              name={ScreenNames.authFlow}
              component={AuthFlow}
            />
          </>
        ) : (
          <>
            <MainNavigator.Screen
              name={ScreenNames.authFlow}
              component={AuthFlow}
            />
            <MainNavigator.Screen
              name={ScreenNames.bottomTabBar}
              component={BottomFlow}
            />
          </>
        )} */}
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
