import React, { useState } from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'
import Row from '../utils/Row'
import FadeInView from '../TabsOld/FadeInView'

const SceneTabs = props => {
    let {
        tabs,
        currentTab,
    } = props
    return (
        <View>
            <Text style={{ textAlign: 'center' }}>{currentTab + 1}/{tabs.length}</Text>
            <Row>
                {
                    tabs.map(tab =>
                        <FadeInView {...props}>
                            {tab}
                        </FadeInView>)
                }
            </Row>
            {/* <ScrollView style={{ marginHorizontal: 20, flex: 10 }}>
                <View style={{ height: 20 }} />
                {tabs[currentTab]}
                <View style={{ height: 20 }} />
            </ScrollView> */}
        </View>
    )
}

export default SceneTabs
