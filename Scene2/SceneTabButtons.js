import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const SceneTabButtons = props => {
    let {
        tabTitles,
        currentTab,
        setSceneTitle,
        goToNextTab,
        goToPreviousTab
    } = props
    let minimumTabs = 6
    const changeTab = (tabNumber, tabTitle) => {
        setSceneTitle(tabTitle)
        if (tabNumber > currentTab) {
            goToNextTab(tabNumber)
        } else if (tabNumber < currentTab) {
            goToPreviousTab(tabNumber)
        }
    }
    return (
        tabTitles.length <= minimumTabs ?
            <View style={{ flexDirection: 'row', backgroundColor: 'green', width: '100%' }}>
                {
                    tabTitles.map(
                        (tabTitle, tabNumber) =>
                            <TouchableOpacity
                                style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}
                                key={tabNumber}
                                onPress={() => changeTab(tabNumber, tabTitle)}
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
                                onPress={() => changeTab(tabNumber, tabTitle)}
                            >
                                <Text
                                    style={{
                                        marginHorizontal: 10,
                                        marginVertical: 20,
                                        textAlign: 'center',
                                        fontSize: 15,
                                        fontWeight: currentTab === tabNumber ? 'bold' : 'normal'
                                    }}
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
