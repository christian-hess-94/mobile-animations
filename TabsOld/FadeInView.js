import React from 'react'
import { Animated, View, Text, Dimensions, TouchableOpacity } from 'react-native'

const FadeInView = (props) => {
    return (
        <>
            <Animated.View style={{
                width: Dimensions.get('window').width,
                backgroundColor: 'powderblue',
                transform: [{
                    translateX: props.changeTabAnim.interpolate({
                        inputRange: [0, Dimensions.get('window').width],
                        outputRange: [0, -Dimensions.get('window').width]
                    })
                }],
            }}>
                <Animated.View style={{
                    height: props.revealPageContentAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 100]
                    }),
                    opacity: props.revealPageContentAnim
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
                                opacity: props.revealPageContentAnim,
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
                                opacity: props.revealPageContentAnim,
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
                                opacity: props.revealPageContentAnim,
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