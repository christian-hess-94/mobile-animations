import React, { useState } from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'

const SceneSubMenu = props => {
    const {
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
        subMenuBody,

        toggleSubMenu,
    } = props
    const [subMenuBodyHeight, setSubMenuBodyHeight] = useState(0)
    const [subMenuTitleHeight, setSubMenuTitleHeight] = useState(0)
    return (
        <Animated.View style={{
            backgroundColor: 'lightgreen',
            height: subMenuAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [subMenuTitleHeight, subMenuBodyHeight]
            })
        }}>
            <TouchableOpacity onPress={toggleSubMenu}>

                <Text
                    onLayout={(event) => setSubMenuTitleHeight(event.nativeEvent.layout.height)}
                >
                    SceneSubMenuTitle
                </Text>
            </TouchableOpacity>
            <Animated.View
                onLayout={(event) => setSubMenuBodyHeight(event.nativeEvent.layout.height + 30)}
                style={{
                    opacity: subMenuAnimation.interpolate({
                        inputRange: [0, 0.9, 1],
                        outputRange: [0, 0, 1]
                    })
                }}
            >
                {subMenuBody}
            </Animated.View>
        </Animated.View>
    )
}

export default SceneSubMenu
