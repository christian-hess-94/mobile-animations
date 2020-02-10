import React, { useState } from 'react'
import { View, Text, Animated, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import SceneBackdrop from './SceneBackdrop'

const SceneDrawer = props => {
    let {
        startAnimation,
        reverseAnimation,
        delayValue,
        drawerHeader,
        drawerItems,
        drawerItemsAnimation,
        setDrawerItemsShouldAppear,
        drawerAppearAnimation,
        drawerShouldAppear,
        setDrawerShouldAppear,
        drawerItemsShouldAppear
    } = props

    let delay = 1500;


    const [array] = useState(['Resumo de Obras', 'Social', 'Sobre o app'])

    const renderItem = ({ item }) => {
        delay = delay + 1000;
        return <Animated.View style={{
            right: drawerItemsAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [delay, 0]
            }),
            width: '100%'
        }}>
            <TouchableOpacity onPress={() => {
                reverseAnimation(drawerItemsAnimation, setDrawerItemsShouldAppear)
                reverseAnimation(drawerAppearAnimation, setDrawerShouldAppear)
                item.clicked()
            }}>
                <Text style={{ textAlign: 'right', fontSize: 20 }}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    }
    return (
        drawerShouldAppear &&
        <>
            <SceneBackdrop
                {...props}
            />
            <Animated.View style={{
                left: drawerAppearAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-1000, 0]
                }),
                position: 'absolute',
                width: '80%',
                height: '100%',
                backgroundColor: 'white',
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                paddingRight: 30,
            }}>
                <View style={{
                    alignItems: 'flex-end',
                    // backgroundColor: 'red',
                }}>
                    {
                        drawerHeader ?
                            drawerHeader
                            :
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Menu</Text>
                    }
                    {
                        drawerItemsShouldAppear && <FlatList
                            style={{ width: '100%' }}
                            keyExtractor={(item, index) => index.toString()}
                            data={drawerItems}
                            renderItem={renderItem} />
                    }
                </View>
            </Animated.View>
        </>
    )
}

export default SceneDrawer
