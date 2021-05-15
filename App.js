import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux'
import { Provider } from 'react-redux'
import * as Font from 'expo-font'
import AppLoading  from 'expo-app-loading'
import TechsNavigator from './navigation/TechsNavigator'
import {enableScreens} from 'react-native-screens'
import techsReducer from './store/reducers/techs'

enableScreens()

const rootReducer = combineReducers({
  techs:techsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
 
export default function App() {
  const [loaded,setLoaded] = useState(false)

  if(!loaded){
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={()=>setLoaded(true)} 
              onError={(err) => console.log(err)}/>
  }
  
  return (
    <Provider store={store} >
      <TechsNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
