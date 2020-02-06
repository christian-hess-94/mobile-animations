import React, { useState } from 'react'
import { View, Text, Animated } from 'react-native'
import SceneBackdrop from './SceneBackdrop'

const SceneDrawer = props => {
    let { startAnimation, reverseAnimation, drawerAppearAnimation, drawerShouldAppear } = props
    return (
        drawerShouldAppear &&
        <>
            <SceneBackdrop
                {...props}
            />
            <Animated.View style={{
                left: drawerAppearAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-1000, 0]
                }), position: 'absolute', width: '80%', height: '100%', backgroundColor: 'white'
            }}>
                <Text>Drawer</Text>
            </Animated.View>
        </>
    )
}

export default SceneDrawer
