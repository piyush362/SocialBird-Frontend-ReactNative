import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
        'https://avatars.githubusercontent.com/u/62232366?v=4',
}

const NewTweet = () => {
    const navigation = useNavigation();
    const popAction = StackActions.pop(1);

    //state
    const [tweettext, setTweetText] = useState("")

    const onTweetPress = () => {
        if (tweettext === '') return
        console.warn('posting', tweettext)
        navigation.goBack()
    }

    return (
        <View style={styles.tweetContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Entypo name="cross" size={35} color="gray" />
                </Pressable>
                <Pressable onPress={onTweetPress}>
                    <Text style={styles.tweetBtn}>Tweet</Text>
                </Pressable>
            </View>

            <View style={styles.newTweetContainer}>
                <Image
                    source={{ uri: user.image }}
                    style={{ width: 45, height: 45, borderRadius: 50 }}
                />
                <TextInput
                    value={tweettext}
                    onChangeText={(newText) => setTweetText(newText)}
                    placeholder="What's Happining..?"
                    multiline
                    numberOfLines={6}
                    style={{
                        flex: 1,
                        padding: 10,
                        borderRadius: 5,
                        textAlignVertical: 'top',
                    }}

                />
            </View>

        </View>
    )
}

export default NewTweet

const styles = StyleSheet.create({
    tweetBtn: {
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#00acee',
        borderRadius: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1
    },
    tweetContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    newTweetContainer: {
        flexDirection: 'row',
        gap: 15,
        padding: 10,
    }
})