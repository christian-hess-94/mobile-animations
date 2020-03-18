import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const SceneTabButtons = props => {
    let {
        tabTitles,
        tabCurrent,
        setSceneTitle,
        goToNextTab,
        goToPreviousTab
    } = props
    let minimumTabs = 6
    const changeTab = (tabNumber, tabTitle) => {
        setSceneTitle(tabTitle)
        if (tabNumber > tabCurrent) {
            goToNextTab(tabNumber)
        } else if (tabNumber < tabCurrent) {
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
                                key={tabNumber}
                                style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}
                                onPress={() => changeTab(tabNumber, tabTitle)}
                            >
                                <Text
                                    style={{ textAlign: 'center', fontSize: 20 - tabTitles.length, fontWeight: tabCurrent === tabNumber ? 'bold' : 'normal' }}
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
                    tabTitles.map((tabTitle, tabNumber) => <TouchableOpacity
                        key={tabNumber}
                        onPress={() => changeTab(tabNumber, tabTitle)}
                    >
                        <Text
                            style={{
                                marginHorizontal: 10,
                                marginVertical: 20,
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: tabCurrent === tabNumber ? 'bold' : 'normal'
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
