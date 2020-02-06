import React from 'react'
import { View, Text, Animated } from 'react-native'

const DropdownMenuBody = (props) => {
    const { openDropdownMenu, closeDropdownMenu, showBodyAnim, showBody, bodyHeight } = props
    return (
        <Animated.View
            style={{
                height: showBodyAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 130, bodyHeight]
                }),
                opacity: showBodyAnim.interpolate({
                    inputRange: [0, 0.8, 1],
                    outputRange: [0, 0, 1]
                })
            }}
        >
            <View style={{ padding: 16, display: 'flex' }}>
                {props.children}
            </View>
        </Animated.View>
    )
}

export default DropdownMenuBody
