import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SpaceCard = () => {
    return (
        <View style={styles.spacecardcontainer}>
            <View style={styles.upperContainer}>
                <View>
                    <Text style={{ color: 'white' }}>LIVE</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 24 }}>Title</Text>
            </View>
            <View style={styles.lowerContainer}>
                <Text style={{ color: 'white' }}>UserName</Text>
                <Text style={{ color: 'white' }}>description</Text>
            </View>
        </View>
    )
}

export default SpaceCard

const styles = StyleSheet.create({
    spacecardcontainer: {
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#7b49de'
    },
    upperContainer: {
        padding: 10,
        backgroundColor: '#8e57fa',
        borderRadius: 10
    },
    lowerContainer: {
        padding: 10,
        backgroundColor: '#7b49de',
        borderRadius: 10
    }
})