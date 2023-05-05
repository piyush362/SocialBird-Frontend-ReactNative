import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './navigation/old code/StackNavigator';
import Navigation from './navigation/old code/Navigation';
import AppNavigation from './navigation/AppNavigation';


export default function App() {
  return (
    <>
      {/* <StackNavigator /> */}
      {/* <Navigation /> */}
      <AppNavigation />
    </>
  );
}

const styles = StyleSheet.create({

});
