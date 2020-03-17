import React from 'react'
import { Animated, View, Text, Dimensions, TouchableOpacity } from 'react-native'

const FadeInView = (props) => {
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
        changeTabAnimation,
        revealTabContentAnimation,
        tabAnimation,
        duration,
        tabCurrent,
        tabs,

        sceneStatus,

        hasHeader,
        hasSubMenu,
        hasFooter,
        hasTabs,
        hasLeftButton,
        hasRightButton,
    } = props
    return (
        <>
            <Animated.View style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height - 100,

                // backgroundColor: 'powderblue',
                transform: [{
                    translateX: changeTabAnimation.interpolate({
                        inputRange: [0, Dimensions.get('window').width],
                        outputRange: [0, -Dimensions.get('window').width]
                    })
                }],
            }}>
                <Animated.View style={{
                    opacity: revealTabContentAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1]
                    })
                }}>
                    {props.children}
                </Animated.View>
                <View style={{ flexDirection: 'row' }}>
                    {
                        props.hasBackButton &&
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => props.fadeToPrevious()}>
                            <Animated.View style={{
                                opacity: revealTabContentAnimation,
                                alignItems: 'center',
                                padding: 20,
                                backgroundColor: 'transparent'
                            }}>
                                <Text>Back</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    }
                    {
                        props.hasSupportButton &&
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => props.supportButtonPress()}><Animated.View style={{
                                opacity: props.revealTabContentAnimation,
                                alignItems: 'center',
                                padding: 20,
                                backgroundColor: 'lightgreen'
                            }}>
                                <Text>{props.supportButtonText}</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    }
                    {
                        props.hasNextButton &&
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => props.fadeToNext()}>
                            <Animated.View style={{
                                opacity: props.revealTabContentAnimation,
                                alignItems: 'center',
                                padding: 20,
                                backgroundColor: 'transparent'
                            }}>
                                <Text>Next</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    }
                </View>
            </Animated.View>
        </>
    );
};

export default FadeInView