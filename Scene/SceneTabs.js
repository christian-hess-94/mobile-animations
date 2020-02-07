import React, { useState } from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'

const SceneTabs = props => {
    let {
        startAnimation,
        reverseAnimation,
        tabAnimation,
        setDrawerShouldAppear,
        headerAppearAnimation,
        setHeaderShouldAppear,
        headerShouldAppear,
        hasHeader,
        hasSubMenu,
        loadingContent,
        vanishTab,
        setTabAnimation,
        setVanishTab,
        tabs,
        currentTab,
        duration
    } = props
    return (
        <Animated.View style={{
            height: '100%',
            opacity: tabAnimation.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [0, vanishTab ? 1 : 0, 0]
            }),
            right: tabAnimation.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [-1000, 0, 1000]
            })
        }}>
            <Text style={{ textAlign: 'center' }}>
                {vanishTab}
            </Text>
            <ScrollView style={{ marginHorizontal: 20, flex: 10 }}>
                <Text style={{ textAlign: 'center' }}>{JSON.stringify(vanishTab)}</Text>
                {tabs[currentTab]}
            </ScrollView>
        </Animated.View>
    )
}

export default SceneTabs
