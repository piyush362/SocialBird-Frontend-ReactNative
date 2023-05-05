import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';


const TweetFooter = ({ name, data }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <EvilIcons name={name} size={20} color="gray" />
            {data && <Text style={{ color: 'gray', fontSize: 12 }}>{data}</Text>}
        </View>
    )
}

export default TweetFooter

const styles = StyleSheet.create({})