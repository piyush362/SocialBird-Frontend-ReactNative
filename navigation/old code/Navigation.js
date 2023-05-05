import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//screens
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import SpaceScreen from '../../screens/SpaceScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import MessageScreen from '../../screens/MessageScreen';
import Tweet from '../../screens/Tweet';
import NewTweet from '../../screens/NewTweet';

//icons
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name='Tweet'
            component={Tweet}
            options={{
                headerShown: true,
                title: 'Tweet',
            }}
        />
        <Stack.Screen
            name='NewTweet'
            component={NewTweet}
            options={{
                headerShown: true,
                title: 'NewTweet',
            }}
        />
    </Stack.Navigator>
);

const SearchStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Search'
            component={SearchScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

const SpaceStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Space'
            component={SpaceScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

const NotificationStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Notification'
            component={NotificationScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

const MessageStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='Message'
            component={MessageScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

const BottomTabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: { height: 65, paddingBottom: 10 },
            tabBarIcon: ({ focused }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home-sharp' : 'home-outline';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'md-search-sharp' : 'md-search-outline';
                } else if (route.name === 'Space') {
                    iconName = focused ? 'mic-sharp' : 'mic-outline';
                } else if (route.name === 'Notification') {
                    iconName = focused ? 'bell-fill' : 'bell';
                    return <Octicons name={iconName} size={22} color='black' />;
                } else if (route.name === 'Message') {
                    iconName = focused ? 'mail-sharp' : 'mail-outline';
                }

                return <Ionicons name={iconName} size={24} color='black' />;
            },
        })}
    >
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Search' component={SearchStack} />
        <Tab.Screen name='Space' component={SpaceStack} />
        <Tab.Screen name='Notification' component={NotificationStack} />
        <Tab.Screen name='Message' component={MessageStack} />
    </Tab.Navigator>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen
                    name='Home'
                    component={BottomTabs}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Profile'
                    component={SearchScreen}
                    options={{ title: 'Profile' }}
                />
                <Drawer.Screen
                    name='Settings'
                    component={SpaceScreen}
                    options={{ title: 'Settings' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;






// DrawerNavigator.js

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button
//                 onPress={() => navigation.navigate('Notifications')}
//                 title="Go to notifications"
//             />
//         </View>
//     );
// }

// function NotificationsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button onPress={() => navigation.goBack()} title="Go back home" />
//         </View>
//     );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={HomeScreen} />
//                 <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
