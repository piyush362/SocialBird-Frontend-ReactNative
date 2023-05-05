import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './DraweerNavigation'

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})