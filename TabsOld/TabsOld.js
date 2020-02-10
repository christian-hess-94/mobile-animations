import React, { useState, useEffect } from 'react'
import { Animated, View, Text, Dimensions, Easing, TouchableOpacity } from 'react-native'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Row from '../utils/Row'
import FadeInView from './FadeInView'

const TabsOld = () => {
    const [changeTabAnim] = useState(new Animated.Value(0))
    const [revealTabContentAnim] = useState(new Animated.Value(1))
    const [currentTab, setCurrentTab] = useState(0)
    const duration = 500
    const easing = Easing.in()
    const goToNextTab = (tabToGo) => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    revealTabContentAnim,
                    {
                        toValue: 0,
                        easing,
                        duration,
                    }
                ),
                Animated.timing(
                    changeTabAnim,
                    {
                        toValue: Dimensions.get('window').width * (tabToGo),
                        easing,
                        duration,
                    }
                )
            ]),
            Animated.timing(
                revealTabContentAnim,
                {
                    toValue: 1,
                    easing,
                    duration: duration / 2,
                }
            ),
        ]).start()
        setTimeout(() => {
            setCurrentTab(tabToGo)
        }, duration * 2)
    }

    const goToPreviousTab = (tabToGo) => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    revealTabContentAnim,
                    {
                        toValue: 0,
                        easing,
                        duration,
                    }
                ),
                Animated.timing(
                    changeTabAnim,
                    {
                        toValue: Dimensions.get('window').width * (tabToGo),
                        easing,
                        duration,
                    }
                )
            ]),
            Animated.timing(
                revealTabContentAnim,
                {
                    toValue: 1,
                    easing,
                    duration: duration / 2,
                }
            ),
        ]).start()
        setTimeout(() => {
            setCurrentTab(tabToGo)
        }, duration * 2)
    }
    const changeTab = (tabToGo) => {
        if (tabToGo > currentTab) {
            goToNextTab(tabToGo)
        } else if (tabToGo < currentTab) {
            goToPreviousTab(tabToGo)
        }
    }
    return (
        <View>
            <Text style={{ textAlign: 'center' }}>{currentTab + 1}/{tabs.length}</Text>
            <View style={{ flexDirection: 'row' }}>
                <FadeInView
                    // hasNextButton
                    goToNextTab={goToNextTab}
                    goToPreviousTab={goToPreviousTab}
                    changeTabAnim={changeTabAnim}
                    revealTabContentAnim={revealTabContentAnim}
                    currentTab={currentTab}
                >
                    <Tab1 />
                </FadeInView>
                <FadeInView
                    // hasNextButton
                    // hasBackButton
                    goToNextTab={goToNextTab}
                    goToPreviousTab={goToPreviousTab}
                    changeTabAnim={changeTabAnim}
                    revealTabContentAnim={revealTabContentAnim}
                    currentTab={currentTab}
                >
                    <Tab2 />
                </FadeInView>
                <FadeInView
                    // hasBackButton
                    goToNextTab={goToNextTab}
                    goToPreviousTab={goToPreviousTab}
                    changeTabAnim={changeTabAnim}
                    // hasSupportButton
                    // supportButtonText='Done'
                    // supportButtonPress={() => alert('DONE')}
                    revealTabContentAnim={revealTabContentAnim}
                    currentTab={currentTab}
                >
                    <Tab3 />
                </FadeInView>
            </View>
            <Row>
                <TouchableOpacity
                    onPress={() => changeTab(0)}
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ textAlign: 'center' }}>Tab1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => changeTab(1)}
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ textAlign: 'center' }}>Tab2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => changeTab(2)}
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ textAlign: 'center' }}>Tab3</Text>
                </TouchableOpacity>
            </Row>
        </View>
    )
}


export default TabsOld
