import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const drawerTitle = [
    {
        image: <FontAwesome name="user-o" size={30} color="black" />,
        title: 'Profile'
    },
    {
        image: <Image
            src={'https://icon-library.com/images/twitter-bird-icon/twitter-bird-icon-11.jpg'}
            style={{ width: 40, height: 40, borderRadius: 50 }}
        />,
        title: 'BlueBird'
    },
    {
        image: <AntDesign name="message1" size={30} color="black" />,
        title: 'Topics'
    },
    {
        image: <FontAwesome name="bookmark-o" size={30} color="black" />,
        title: 'Bookmarks'
    },
    {
        image: <Ionicons name="list" size={30} color="black" />,
        title: 'Lists'
    },
    {
        image: <AntDesign name="addusergroup" size={30} color="black" />,
        title: 'BirdCircle'
    },
]

const DrawerCard = () => {
    return (
        <View style={styles.drawerCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Pressable >
                    <Image
                        source={{ uri: 'https://bcud.unipune.ac.in/root/Images/images/profile.png' }}
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                    />
                </Pressable>
                <Ionicons name="settings-outline" size={24} color="black" />
            </View>

            <View style={styles.userDetails}>
                <Text style={{ fontWeight: '600', fontSize: 18 }}>Piyush Sagar</Text>
                <Text style={{ color: 'gray' }}>@piyush362</Text>
                <Text style={{ color: 'gray' }}>21k Followers   50 Followings</Text>
            </View>

            <View style={{
                gap: 25, paddingVertical: 50, borderBottomColor: 'gray',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
                {drawerTitle.map((item, index) => (
                    <View key={index} style={styles.screentitle}>
                        {item.image}
                        <View style={{ width: 180, }}>
                            <Text style={{ fontSize: 20, fontWeight: 600 }} >{item.title}</Text>
                        </View>

                    </View>
                ))}
            </View>
        </View>
    )
}

export default DrawerCard

const styles = StyleSheet.create({
    drawerCard: {
        padding: 20,
        paddingVertical: 30
    },
    userDetails: {
        paddingVertical: 25,
        gap: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    screentitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})