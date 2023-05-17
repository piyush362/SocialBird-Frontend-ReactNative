import { StyleSheet, Text, View, Image, StatusBar, FlatList, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { tweets } from '../assets/data/tweets'
import { Entypo } from '@expo/vector-icons';

//components
import TweetsCard from '../components/TweetsCard'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = ({ navigation }) => {

    // const navigation = useNavigation()

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View>
                <View style={styles.homeHeader}>
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image
                            source={{ uri: 'https://avatars.githubusercontent.com/u/62232366?v=4' }}
                            style={{ width: 40, height: 40, borderRadius: 50 }}
                        />
                    </Pressable>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 70, gap: 10 }}>
                        <Image
                            src={'https://icon-library.com/images/twitter-bird-icon/twitter-bird-icon-11.jpg'}
                            style={{ width: 40, height: 40, borderRadius: 50 }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: 600, letterSpacing: 1, color: '#098ee0' }}>SocialBird</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginBottom: 50 }}>
                {
                    tweets.map((item, index) => (
                        <TweetsCard
                            key={index}
                            id={item.id}
                            tweetId={item.id}
                            tweet={item.content}
                            username={item.user.username}
                            name={item.user.name}
                            image={item.user.image}
                            tweetImage={item.image ? item.image : null}
                        />
                    ))
                }
            </ScrollView>
            <Pressable onPress={() => navigation.navigate('NewTweet')} style={styles.newTweetBtn}>
                <Entypo name="plus" size={24} color="white" />
            </Pressable>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e3e3e3',
        backgroundColor: 'white',
        padding: 10
    },
    newTweetBtn: {
        position: 'absolute',
        right: 15,
        bottom: 70,
        backgroundColor: '#00acee',
        padding: 15,
        borderRadius: 50

    }
})
