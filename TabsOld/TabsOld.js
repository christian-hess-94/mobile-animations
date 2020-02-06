import React, { useState, useEffect } from 'react'
import { Animated, View, Text, Dimensions, Easing } from 'react-native'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import FadeInView from './FadeInView'

const TabsOld = () => {
    const [changeTabAnim, setChangeTabAnim] = useState(new Animated.Value(0))
    const [revealPageContentAnim, setRevealPageContentAnim] = useState(new Animated.Value(1))
    const [page, setPage] = useState(0)
    const duration = 200
    const easing = Easing.in()
    const fadeToNext = () => {
        Animated.sequence([
            Animated.timing(
                revealPageContentAnim,
                {
                    toValue: 0,
                    easing,
                    duration,
                }
            ),
            Animated.timing(
                changeTabAnim,
                {
                    toValue: Dimensions.get('window').width * (page + 1),
                    easing,
                    duration,
                }
            ),
            Animated.timing(
                revealPageContentAnim,
                {
                    toValue: 1,
                    easing,
                    duration,
                }
            ),
        ]).start()
        setTimeout(() => {
            setPage(page + 1)
        }, duration * 2)
    }

    const fadeToPrevious = () => {
        Animated.sequence([
            Animated.timing(
                revealPageContentAnim,
                {
                    toValue: 0,
                    easing,
                    duration,
                }
            ),
            Animated.timing(
                changeTabAnim,
                {
                    toValue: Dimensions.get('window').width * (page - 1),
                    easing,
                    duration,
                }
            ),
            Animated.timing(
                revealPageContentAnim,
                {
                    toValue: 1,
                    easing,
                    duration,
                }
            ),
        ]).start()
        setTimeout(() => {
            setPage(page - 1)
        }, duration * 2)
    }
    return (
        <View>
            <Text style={{ textAlign: 'center' }}>{page + 1}/3</Text>
            <View style={{ flexDirection: 'row' }}>
                <FadeInView
                    // hasNextButton
                    fadeToNext={fadeToNext}
                    fadeToPrevious={fadeToPrevious}
                    changeTabAnim={changeTabAnim}
                    revealPageContentAnim={revealPageContentAnim}
                    page={page}
                >
                    <Tab1 />
                </FadeInView>
                <FadeInView
                    // hasNextButton
                    // hasBackButton
                    fadeToNext={fadeToNext}
                    fadeToPrevious={fadeToPrevious}
                    changeTabAnim={changeTabAnim}
                    revealPageContentAnim={revealPageContentAnim}
                    page={page}
                >
                    <Tab2 />
                </FadeInView>
                <FadeInView
                    // hasBackButton
                    fadeToNext={fadeToNext}
                    fadeToPrevious={fadeToPrevious}
                    changeTabAnim={changeTabAnim}
                    // hasSupportButton
                    // supportButtonText='Done'
                    // supportButtonPress={() => alert('DONE')}
                    revealPageContentAnim={revealPageContentAnim}
                    page={page}
                >
                    <Tab3 />
                </FadeInView>
            </View>
        </View>
    )
}


export default TabsOld
