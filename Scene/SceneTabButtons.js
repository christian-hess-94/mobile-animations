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
        setCurrentTab
    } = props
    let minimumTabs = 6
    return (
        (tabTitles.length <= minimumTabs) ?
            <View style={{ flexDirection: 'row', backgroundColor: 'green', width: '100%' }}>
                {
                    tabTitles.map(
                        (tabTitle, tabNumber) =>
                            <TouchableOpacity onPress={() => setCurrentTab(tabNumber + 1)}>

                                <Text
                                    key={tabNumber}
                                    style={{ flex: 1, margin: 20, textAlign: 'center' }}
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
                            <Text
                                key={tabNumber}
                                style={{ margin: 20, textAlign: 'center' }}
                            >
                                {tabTitle}
                            </Text>
                    )
                }
            </ScrollView>
    )
}

export default SceneTabButtons
