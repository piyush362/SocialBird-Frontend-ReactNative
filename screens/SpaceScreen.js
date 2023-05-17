import { StyleSheet, Text, View, StatusBar, Image, TextInput, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import SpaceCard from '../components/SpaceCard';

const SpaceScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.SearchHeader}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                        source={{ uri: 'https://bcud.unipune.ac.in/root/Images/images/profile.png' }}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                    />
                </Pressable>
                <Text style={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}>SocialBird Space</Text>
            </View>

            <ScrollView style={{ paddingHorizontal: 20, paddingTop: 30, }}>
                <Text style={{ fontSize: 24, fontWeight: 700, letterSpacing: .8 }}>Happening Now</Text>
                <Text style={{ color: 'gray' }}>Space going on right now</Text>
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
            </ScrollView>

        </SafeAreaView>
    )
}

export default SpaceScreen

const styles = StyleSheet.create({
    SearchHeader: {
        flexDirection: 'row',
        padding: 10,
        paddingRight: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        gap: 20
    },
})