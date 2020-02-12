import React from 'react'
import { View, Text, Animated } from 'react-native'
import SceneTabControls from './SceneTabControls'

const SceneFooter = props => {
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

        sceneStatus,

        hasHeader,
        hasSubMenu,
        hasFooter,
        hasTabs,
        hasLeftButton,
        hasRightButton,
        footerBody,
    } = props
    return (
        <Animated.View style={{
            backgroundColor: 'lightgreen',
            position: 'absolute',
            width: '100%',
            bottom: footerAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-300, 0]
            }),
        }}>
            {footerBody}
            {hasTabs && <SceneTabControls {...props} />}
        </Animated.View>
    )
}

export default SceneFooter
