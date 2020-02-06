import React, { useState } from 'react'
import { View, Text, Animated } from 'react-native'
import SceneTabButtons from './SceneTabButtons'

const SceneFooter = props => {
    let {
        startAnimation,
        reverseAnimation,
        drawerAppearAnimation,
        setDrawerShouldAppear,
        footerAppearAnimation,
        setFooterShouldAppear,
        footerShouldAppear,
        hasFooter,
        loadingContent,
        hasTabs,
        footerBody
    } = props

    const [footerHeight, setFooterHeight] = useState(0)


    hasFooter && footerShouldAppear && startAnimation(footerAppearAnimation, setFooterShouldAppear)
    if (loadingContent) {
        reverseAnimation(footerAppearAnimation, setFooterShouldAppear)
    } else {
        startAnimation(footerAppearAnimation, setFooterShouldAppear)
    }
    return (
        <Animated.View
            onLayout={(event) => setFooterHeight(event.nativeEvent.layout.height + 30)}
            style={{
                width: '100%',
                bottom: footerAppearAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0]
                }),
            }}>
            {
                !!footerBody &&
                <View style={{
                    width: '100%',
                    backgroundColor: 'lightgreen',
                    alignItems: 'center',
                }}>
                    {footerBody}
                </View>
            }
            {
                hasTabs &&
                <SceneTabButtons {...props} />
            }
        </Animated.View>
    )
}

export default SceneFooter
