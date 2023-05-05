import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import Tweet from '../screens/Tweet';
import NewTweet from '../screens/NewTweet';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Feed"
                component={BottomNavigation}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Tweet'
                component={Tweet}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name='NewTweet'
                component={NewTweet}
                options={{
                    title: 'NewTweet',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})