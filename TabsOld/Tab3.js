import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Tab3 = () => {
    const fadeToNext = () => {
        Animated.timing(
            changeTabAnim,
            {
                toValue: 1000,
                duration: 1000,
            }
        ).start();
    }
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Tab3</Text>
        </View>
    )
}

export default Tab3
