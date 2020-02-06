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
        setOpenSubMenu
    } = props

    const [subMenuHeight, setSubMenuHeight] = useState(0)
    const [titleHeight, setTitleHeight] = useState(0)
    // reverseAnimation(subMenuOpenAnimation, setSubMenuShouldOpen)
    if (!openSubMenu || loadingContent) {
        setOpenSubMenu(true)
        reverseAnimation(subMenuOpenAnimation, setSubMenuShouldOpen, 200)
    }

    const close = () => {
        setOpenSubMenu(false)
        reverseAnimation(subMenuOpenAnimation, setSubMenuShouldOpen, 200)
    }
    const open = () => {
        setOpenSubMenu(true)
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
                <Text>SubMenuTitle {JSON.stringify(openSubMenu)}</Text>
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
