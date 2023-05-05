import * as React from 'react';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import StackNavigation from './StackNavigation';


const Drawer = createDrawerNavigator();


const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
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