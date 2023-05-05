import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


//icons
import TweetFooter from './TweetFooter';


const Tweets = ({ image, name, username, tweet, tweetImage, tweetId }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.tweetContainer}>
            <View>
                <Image src={image} style={{ width: 40, height: 40, borderRadius: 50 }} />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Tweet', { tweetId: tweetId })}
                >
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Text style={{ fontWeight: 600 }}>{name}</Text>
                        <Text style={{ color: '#adadad' }}>@{username} - 2h</Text>
                    </View>
                    <Text style={{ color: '#575656' }}>{tweet}</Text>
                    {tweetImage != null &&
                        <View style={styles.tweetImage}>
                            <Image src={tweetImage} style={{
                                width: '100%',
                                aspectRatio: 16 / 10,
                                padding: 10,
                                borderRadius: 10
                            }}
                            />
                        </View>
                    }
                </TouchableOpacity>
                <View style={styles.tweetFooter}>
                    <TweetFooter
                        name={'comment'}
                        data="12"
                    />
                    <TweetFooter
                        name={'retweet'}
                        data="12"
                    />
                    <TweetFooter
                        name={'heart'}
                        data="12"
                    />
                    <TweetFooter
                        name={'chart'}
                        data="12"
                    />
                    <TweetFooter
                        name={'share-google'}
                    />

                </View>
            </View>
        </View>
    )
}

export default Tweets

const styles = StyleSheet.create({
    tweetContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        gap: 10,
        backgroundColor: 'white',
        borderBottomWidth: 0.6,
        borderBottomColor: '#e3e3e3',
        backgroundColor: 'white',
    },
    tweetImage: {
        width: '100%',
        borderColor: '#e3e3e3',
        borderWidth: StyleSheet.hairlineWidth,
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 5,
    },
    tweetFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginRight: 10
    }
})