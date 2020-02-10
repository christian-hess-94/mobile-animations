import React, { useState } from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'

const SceneSubMenu = props => {
    let {
        startAnimation,
        reverseAnimation,
        drawerAppearAnimation,
        setDrawerShouldAppear,
        subMenuAppearAnimation,
        setSubMenuShouldAppear,
        subMenuShouldAppear,
        subMenuOpenAnimation,
        setSubMenuShouldOpen,
        subMenuShouldOpen,
        hasSubMenu,
        loadingContent,
        subMenuBody,
        openSubMenu,
        setOpenSubMenu,
        subMenuTitleClosed,
        subMenuTitleOpen
    } = props

    const [subMenuHeight, setSubMenuHeight] = useState(0)
    const [titleHeight, setTitleHeight] = useState(0)
    const [onlyOnce, setOnlyOnce] = useState(true)
    // reverseAnimation(subMenuOpenAnimation, setSubMenuShouldOpen)
    if (!subMenuShouldOpen || loadingContent) {
        // alert('oi')
        reverseAnimation(subMenuOpenAnimation, setSubMenuShouldOpen, 200)
    }

    const close = () => {
        reverseAnimation(subMenuOpenAnimation, setSubMenuShouldOpen, 200)
    }
    const open = () => {
        startAnimation(subMenuOpenAnimation, setSubMenuShouldOpen, 200)
    }
    return (
        <Animated.View
            style={{
                alignItems: 'center',
                width: '100%',
                backgroundColor: 'lightgreen',
                height: subMenuOpenAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [titleHeight, subMenuHeight]
                }),
                borderBottomLeftRadius: subMenuOpenAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [25, 0]
                }),
                borderBottomRightRadius: subMenuOpenAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [25, 0]
                }),
            }}>
            <TouchableOpacity
                onLayout={(event) => setTitleHeight(event.nativeEvent.layout.height)}
                style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40
                }}
                onPress={
                    () =>
                        subMenuShouldOpen ?
                            close()
                            // reverseAnimation(subMenuOpenAnimation, setSubMenuShouldOpen)
                            :
                            open()
                    // startAnimation(subMenuOpenAnimation, setSubMenuShouldOpen)
                }
            >
                <Text>{subMenuShouldOpen ? subMenuTitleClosed : subMenuTitleOpen}</Text>
            </TouchableOpacity>
            <Animated.View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: subMenuOpenAnimation.interpolate({
                        inputRange: [0, 0.6, 1],
                        outputRange: [0, 0, 1]
                    })
                }}
            >
                <View
                    onLayout={(event) => setSubMenuHeight(event.nativeEvent.layout.height + titleHeight + 10)}
                >
                    {subMenuBody}
                </View>
            </Animated.View>
        </Animated.View>
    )
}

export default SceneSubMenu
