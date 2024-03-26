import React,{useState} from 'react'
import Navigator from './src/navigator'
import LoginScreen from './src/screens/auth/Login'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SignUpScreen from './src/screens/auth/SignUp';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {


  let [fontsLoaded] = useFonts({
    'Actor-Regular': require('./assets/fonts/Actor-Regular.ttf'),

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }


  
  return (
   <Provider store={store}>
    <Navigator/>
   </Provider>
  );
}

 