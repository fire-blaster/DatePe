import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NAV } from '../constants/navigators';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <View>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={NAV.LOGIN} component={Login} />
                    <Stack.Screen name={NAV.REGISTER} component={Register} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default RootNavigation