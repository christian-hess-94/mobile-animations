import React from 'react'
import { View, Text, Animated, TouchableOpacity, FlatList } from 'react-native'
import SceneDrawerBackdrop from './SceneDrawerBackdrop'
import styled from 'styled-components/native'
const SceneDrawer = props => {
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
        drawerItems,

        sceneStatus,

        hasHeader,
        hasSubMenu,
        hasFooter,
        hasTabs,
        hasLeftButton,
        hasRightButton,
        closeMenu,
        drawerTitle
    } = props
    let delay = 1000
    const renderItem = ({ item }) => {
        delay = delay + 1000;
        return <Animated.View style={{
            right: drawerItemsAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [delay, 0]
            }),
            width: '100%'
        }}>
            <TouchableOpacity onPress={() => item.pressed()}>
                <Text style={{ textAlign: 'right', fontSize: 20 }}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    }
    return (
        <>
            <Animated.View style={{
                zIndex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: drawerAnimation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 0, 1]
                }),
                right: drawerAnimation.interpolate({
                    inputRange: [0, 0.1, 1],
                    outputRange: [-1000, 0, 0]
                }),
                backgroundColor: '#888888aa',
            }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#abababab', width: '100%', height: '100%', position: 'absolute', }} onPressIn={() => closeMenu()}>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{
                zIndex: 2,
                position: 'absolute',
                width: '80%',
                height: '100%',
                backgroundColor: 'white',
                left: drawerAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-1000, 0]
                }),
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                zIndex: 10,
            }}>
                <View style={{
                    alignItems: 'flex-end',
                    padding: 20,
                }}>
                    <Text>{drawerTitle}</Text>
                    <FlatList
                        style={{ width: '100%' }}
                        keyExtractor={(item, index) => index.toString()}
                        data={drawerItems}
                        renderItem={renderItem} />
                </View>
            </Animated.View>

        </>
    )
}

export default SceneDrawer
