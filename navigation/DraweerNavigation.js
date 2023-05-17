import * as React from 'react';
import { View, Text } from 'react-native';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import StackNavigation from './StackNavigation';
import DrawerCard from '../components/DrawerCard';


const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
    return (
        <View>
            <DrawerCard />
        </View>
    );
}


const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen name='Home' component={StackNavigation} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;