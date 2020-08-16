import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StackNavigationProps, RootStackParamList} from './App'
interface SecondScreen {}

const SecondScreen = ({navigation}: StackNavigationProps<RootStackParamList, "SecondScreen">) => 
{
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Pressable onPress={() => navigation.navigate("FirstScreen")}>
              <Text style={{ fontSize: 50, fontWeight: '500' }}>Second Screen</Text>
            </Pressable>
          </View>
    );
}

export default SecondScreen