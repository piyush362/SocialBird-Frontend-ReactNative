import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//icons
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


// screens
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import SpaceScreen from '../../screens/SpaceScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import MessageScreen from '../../screens/MessageScreen';
import Tweet from '../../screens/Tweet';
import NewTweet from '../../screens/NewTweet';

import DraweerNavigation from '../DraweerNavigation';

const StackNavigator = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { height: 65, paddingBottom: 10 },

                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: () => false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (<Ionicons name="home-sharp" size={24} color="black" />) : (
                                <Ionicons name="home-outline" size={24} color="black" />)
                    }} />

                <Tab.Screen
                    name='Search'
                    component={SearchScreen}
                    options={{
                        tabBarLabel: () => false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (<Ionicons name="md-search-sharp" size={26} color="black" />) : (<Ionicons name="md-search-outline" size={24} color="black" />)
                    }} />

                <Tab.Screen
                    name='Space'
                    component={SpaceScreen}
                    options={{
                        tabBarLabel: () => false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="mic-sharp" size={24} color="black" />)
                                : (<Ionicons name="mic-outline" size={24} color="black" />)
                    }} />

                <Tab.Screen
                    name='Notification'
                    component={NotificationScreen}
                    options={{
                        tabBarLabel: () => false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (<Octicons name="bell-fill" size={22} color="black" />) : (<Octicons name="bell" size={22} color="black" />)
                    }} />

                <Tab.Screen
                    name='Message'
                    component={MessageScreen}
                    options={{
                        tabBarLabel: () => false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (<Ionicons name="mail-sharp" size={24} color="black" />) : (<Ionicons name="mail-outline" size={24} color="black" />)
                    }} />

            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
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
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})