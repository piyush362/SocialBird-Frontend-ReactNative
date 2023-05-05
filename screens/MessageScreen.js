import { StyleSheet, Text, View, StatusBar, Image, TextInput, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const MessageScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <View style={styles.SearchHeader}>
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                        source={{ uri: 'https://bcud.unipune.ac.in/root/Images/images/profile.png' }}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                    />
                </Pressable>
                <TextInput style={styles.searchTweet} placeholder='Search Direch Messages'
                    placeholderTextColor="#595858"
                    textAlign="center"
                    textAlignVertical="center"
                />
                <Ionicons name="settings-outline" size={24} color="black" />
            </View>

        </SafeAreaView>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    SearchHeader: {
        flexDirection: 'row',
        padding: 10,
        paddingRight: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchTweet: {
        padding: 3,
        backgroundColor: '#edebeb',
        width: '70%',
        borderRadius: 20
    }
})