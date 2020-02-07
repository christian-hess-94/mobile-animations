import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const SceneTabButtons = props => {
    let {
        tabs,
        tabTitles,
        startAnimation,
        reverseAnimation,
        drawerAppearAnimation,
        setDrawerShouldAppear,
        footerAppearAnimation,
        setFooterShouldAppear,
        footerShouldAppear,
        hasFooter,
        loadingContent,
        hasTabs,
        footerBody,
        setCurrentTab,
        currentTab,
        vanishTab,
        setVanishTab,
        tabAnimation,
        setSceneTitle,
    } = props
    let minimumTabs = 6

    const duration = 150
    const setTab = (tabTitle, touchedTabNumber) => {
        if (touchedTabNumber > currentTab) {
            startAnimation(tabAnimation, undefined, duration, 1)
            setTimeout(() => {
                setVanishTab(0)
                setCurrentTab(touchedTabNumber)
                setSceneTitle(tabTitle)
                startAnimation(tabAnimation, undefined, 10, -1)
                setTimeout(() => {
                    setVanishTab(1)
                    reverseAnimation(tabAnimation, undefined, duration, 0)
                }, duration)
            }, duration)
        } else if (touchedTabNumber < currentTab) {
            startAnimation(tabAnimation, undefined, duration, -1)
            setTimeout(() => {
                setVanishTab(0)
                setCurrentTab(touchedTabNumber)
                setSceneTitle(tabTitle)
                startAnimation(tabAnimation, undefined, 10, 1)
                setTimeout(() => {
                    setVanishTab(1)
                    reverseAnimation(tabAnimation, undefined, duration, 0)
                }, duration)
            }, duration)
        } else {
            // setVanishTab('same')
        }
    }
    return (
        (tabTitles.length <= minimumTabs) ?
            <View style={{ flexDirection: 'row', backgroundColor: 'green', width: '100%' }}>
                {
                    tabTitles.map(
                        (tabTitle, tabNumber) =>
                            <TouchableOpacity
                                style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}
                                key={tabNumber}
                                onPress={() => setTab(tabTitle, tabNumber)}
                            >
                                <Text
                                    style={{ textAlign: 'center', fontSize: 20 - tabTitles.length, fontWeight: currentTab === tabNumber ? 'bold' : 'normal' }}
                                >
                                    {tabTitle}
                                </Text>
                            </TouchableOpacity>
                    )
                }
            </View>
            :
            <ScrollView horizontal style={{ backgroundColor: 'green', width: '100%' }}>
                {
                    tabTitles.map(
                        (tabTitle, tabNumber) =>
                            <TouchableOpacity
                                key={tabNumber}
                                onPress={() => setTab(tabTitle, tabNumber)}
                            >
                                <Text
                                    style={{ marginHorizontal: 10, marginVertical: 20, textAlign: 'center', fontSize: 15, fontWeight: currentTab === tabNumber ? 'bold' : 'normal' }}
                                >
                                    {tabTitle}
                                </Text>
                            </TouchableOpacity>
                    )
                }
            </ScrollView>
    )
}

export default SceneTabButtons
