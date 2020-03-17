import React, { useState } from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'
import Row from '../utils/Row'
import FadeInView from '../TabsOld/FadeInView'

const SceneTabs = props => {
    let {
        tabs,
        tabCurrent,
    } = props
    return (
        <View>
            <Text style={{ textAlign: 'center' }}>{tabCurrent + 1}/{tabs.length}</Text>
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
                {tabs[tabCurrent]}
                <View style={{ height: 20 }} />
            </ScrollView> */}
        </View>
    )
}

export default SceneTabs
