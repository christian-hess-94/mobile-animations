import React from 'react'
import { View, Text, ActivityIndicator, Animated, Dimensions } from 'react-native'

const SceneLoading = props => {
    let {
        sceneContent,
        headerAnimation,
        subMenuAnimation,
        loadingAnimation,
        contentAnimation,
        footerAnimation,
        drawerAnimation,
        drawerBackdropAnimation,
        drawerItemsAnimation,
        drawerHeaderAnimation,
        duration,

        sceneStatus,

        hasHeader,
        hasSubMenu,
        hasFooter,
        hasTabs,
        hasLeftButton,
        hasRightButton,
    } = props
    return (
        <Animated.View
            style={{
                zIndex: loadingAnimation,
                position: 'absolute',
                height: '100%',
                width: '100%',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                opacity: loadingAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                }),
                left: loadingAnimation.interpolate({
                    inputRange: [0, 0.1, 1],
                    outputRange: [-1000, 0, 0]
                }),
                transform: [
                    {
                        scale: loadingAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1.5, 2]
                        })
                    }

                ]
            }}>
            <ActivityIndicator size='large' />
        </Animated.View>
    )
}

export default SceneLoading
