import React from 'react'
import { View, Text, Animated, TouchableOpacity } from 'react-native'
import SceneSubMenu from './SceneSubMenu'
import Row from '../../utils/Row'
import Column from '../../utils/Column'

const SceneHeader = props => {

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
        header,
        leftButtonPressed,
        rightButtonPressed,
    } = props
    return (
        <Animated.View style={{
            backgroundColor: 'green',
            top: headerAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-300, 0]
            })
        }}>
            <Row>
                <Column flex={2}>
                    <TouchableOpacity style={{ width: '100%' }} onPress={leftButtonPressed}>
                        <Text>Botão Esq</Text>
                    </TouchableOpacity>
                </Column>
                <Column flex={8}>
                    <Text>{header}</Text>
                </Column>
                <Column flex={2}>

                    <TouchableOpacity style={{ width: '100%' }} onPress={rightButtonPressed}>
                        <Text>Botão Dir</Text>
                    </TouchableOpacity>
                </Column>

            </Row>
            <SceneSubMenu {...props} />
        </Animated.View>
    )
}

export default SceneHeader
