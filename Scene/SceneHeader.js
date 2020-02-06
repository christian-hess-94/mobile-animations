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
        loadingContent
    } = props

    const [headerHeight, setHeaderHeight] = useState(0)

    hasHeader && headerShouldAppear && startAnimation(headerAppearAnimation, setHeaderShouldAppear)
    if (loadingContent && headerShouldAppear) {
        reverseAnimation(headerAppearAnimation, setHeaderShouldAppear)
    } else {
        startAnimation(headerAppearAnimation, setHeaderShouldAppear)
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
                        <Row>
                            <Column>
                                <TouchableOpacity onPress={() => {
                                    startAnimation(drawerAppearAnimation, setDrawerShouldAppear)
                                }}>
                                    <Text style={{ marginVertical: 20 }}>LeftButton</Text>
                                </TouchableOpacity>
                            </Column>
                        </Row>
                    </Column>
                    <Column flex={6}>
                        <Text style={{ marginVertical: 20 }}>Header</Text>
                    </Column>
                    <Column flex={2}>
                        <TouchableOpacity onPress={() => reverseAnimation(headerAppearAnimation, setHeaderShouldAppear)}>
                            <Text style={{ marginVertical: 20 }}>RightButton</Text>
                        </TouchableOpacity>
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
