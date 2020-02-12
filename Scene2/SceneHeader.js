import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import SceneSubMenu from './SceneSubMenu'
import Row from '../utils/Row'
import Column from '../utils/Column'

const SceneHeader = props => {
    let {
        startAnimation,
        reverseAnimation,
        drawerAppearAnimation,
        setDrawerShouldAppear,
        headerAppearAnimation,
        setHeaderShouldAppear,
        headerShouldAppear,
        hasHeader,
        hasSubMenu,
        loadingContent,
        sceneTitle,
        drawerShouldAppear,
        drawerItemsAnimation,
        setDrawerItemsShouldAppear,
        hasLeftButton,
        hasRightButton,
        leftButtonText,
        rightButtonText
    } = props

    const [headerHeight, setHeaderHeight] = useState(0)
    const [onlyOnce, setOnlyOnce] = useState(true)
    if (loadingContent && headerShouldAppear && onlyOnce) {
        setOnlyOnce(false)
        reverseAnimation(headerAppearAnimation, setHeaderShouldAppear)
        setTimeout(() => setOnlyOnce(true), 500)
    } else {
        startAnimation(headerAppearAnimation, setHeaderShouldAppear)
        setTimeout(() => setOnlyOnce(true), 500)
    }

    return (
        <Animated.View
            onLayout={(event) => setHeaderHeight(event.nativeEvent.layout.height + 30)}
            style={{
                backgroundColor: 'green',
                top: headerAppearAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-300, 0]
                }),
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
            }}>
            <View>
                <Row>
                    <Column flex={2}>
                        {
                            hasLeftButton &&
                            <TouchableOpacity onPress={() => {
                                startAnimation(drawerAppearAnimation, setDrawerShouldAppear)
                                startAnimation(drawerItemsAnimation, setDrawerItemsShouldAppear, 650)
                            }}>
                                <Text style={{ marginVertical: 20 }}>{leftButtonText}</Text>
                            </TouchableOpacity>
                        }
                    </Column>
                    <Column flex={6}>
                        <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>{sceneTitle}</Text>
                    </Column>
                    <Column flex={2}>
                        {
                            hasRightButton &&
                            <TouchableOpacity onPress={() => reverseAnimation(headerAppearAnimation, setHeaderShouldAppear)}>
                                <Text style={{ marginVertical: 20 }}>{rightButtonText}</Text>
                            </TouchableOpacity>
                        }
                    </Column>
                </Row>
            </View>
            {
                hasSubMenu &&
                <SceneSubMenu
                    headerHeight={headerHeight}
                    {...props}
                />
            }
        </Animated.View>
    )
}

export default SceneHeader
