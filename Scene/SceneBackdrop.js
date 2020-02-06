import React from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'

const SceneBackdrop = props => {
    let { reverseAnimation, drawerAppearAnimation, setDrawerShouldAppear } = props
    return (
        <Animated.View
            style={{ opacity: drawerAppearAnimation, backgroundColor: '#888888aa', width: '100%', height: '100%', position: 'absolute' }}>
            <TouchableOpacity
                onPress={() => reverseAnimation(drawerAppearAnimation, setDrawerShouldAppear)}
                style={{ backgroundColor: '#abababab', width: '100%', height: '100%', position: 'absolute', }}
            />
        </Animated.View>
    )
}

export default SceneBackdrop
