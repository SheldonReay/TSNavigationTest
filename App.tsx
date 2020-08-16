

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Pressable
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, ParamListBase, RouteProp  } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'


export interface StackNavigationProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string
    > {
        navigation: StackNavigationProp<ParamList, RouteName>;
        route: RouteProp<ParamList, RouteName>
    }


export type RootStackParamList = {
  FirstScreen: undefined;
  SecondScreen: undefined;
};




const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="FirstScreen" component={FirstScreen} />
      <RootStack.Screen name="SecondScreen" component={SecondScreen}/>
    </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
