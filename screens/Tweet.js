import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { tweets } from '../assets/data/tweets';
import { EvilIcons } from '@expo/vector-icons';

const actionBtn = ['comment', 'retweet', 'heart', 'chart', 'share-google']

const Tweet = ({ route }) => {
    const { tweetId } = route.params;
    const tweet = tweets.find(tweet => tweet.id === tweetId);


    return (
        <View style={styles.tweetContainer}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Image src={tweet?.user.image} style={{ width: 40, height: 40, borderRadius: 50 }} />
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{tweet?.user.name}</Text>
                    <Text style={{ fontSize: 14, color: 'gray' }}>@{tweet?.user.username}</Text>
                </View>
            </View>
            <View style={styles.tweetcontent}>
                <Text style={{ fontSize: 18 }}>{tweet.content}</Text>
            </View>
            {tweet.image != null &&
                <View >
                    <Image
                        source={{ uri: tweet.image }}
                        style={{
                            width: '100%',
                            aspectRatio: 16 / 10,
                            padding: 10,
                            borderRadius: 10
                        }}
                    />
                </View>
            }
            <Text style={{
                color: 'gray',
                borderColor: '#e3e3e3',
                borderBottomWidth: 0.5,
                paddingVertical: 12
            }}>{tweet.createdAt}</Text>
            <View style={{
                flexDirection: 'row', gap: 20, paddingVertical: 8, borderColor: '#e3e3e3',
                borderBottomWidth: 0.5,
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{`${tweet.numberOfRetweets} `}<Text style={{ color: 'gray', fontWeight: 400 }}>Retweets</Text></Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{`${tweet.numberOfComments} `}<Text style={{ color: 'gray', fontWeight: 400 }}>Quotes</Text></Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{`${tweet.numberOfLikes} `}<Text style={{ color: 'gray', fontWeight: 400 }}>Likes</Text></Text>
            </View>
            <View style={styles.tweetFooter}>
                {/* <EvilIcons name={name} size={20} color="gray" /> */}
                {actionBtn.map(item => (
                    <EvilIcons name={item} size={28} color="gray" />
                ))}
            </View>
        </View >
    )
}

export default Tweet

const styles = StyleSheet.create({
    tweetContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        gap: 10,
        backgroundColor: 'white',
        borderBottomWidth: 0.6,
        borderBottomColor: '#e3e3e3',
        backgroundColor: 'white',
    },
    tweetcontent: {
        width: '100%',
        // backgroundColor: 'red',
        marginVertical: 5
    },
    tweetFooter: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderColor: '#e3e3e3',
        borderBottomWidth: 0.5,
        paddingVertical: 10
    }
})