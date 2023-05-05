import { StyleSheet, Text, View, StatusBar, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const NotificationScreen = ({ navigation }) => {
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
                <Text style={{ fontSize: 18, fontWeight: 600, letterSpacing: 1 }}>Notification</Text>
            </View>

        </SafeAreaView>
    )
}

export default NotificationScreen

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