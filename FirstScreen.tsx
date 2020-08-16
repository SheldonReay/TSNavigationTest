import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SecondScreen from './SecondScreen'
import { StackNavigationProps, RootStackParamList} from './App'
interface FirstScreenProps {}

const FirstScreen = ({navigation}: StackNavigationProps<RootStackParamList, "FirstScreen">) => 
{
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Pressable onPress={() => navigation.navigate("SecondScreen")}>
              <Text style={{ fontSize: 50, fontWeight: '500' }}>Hello</Text>
            </Pressable>
          </View>
    );
}

export default FirstScreen