import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

const SceneTabControls = props => {
    const {
        headerAnimation,
        subMenuAnimation,
        loadingAnimation,
        contentAnimation,
        footerAnimation,
        drawerAnimation,
        drawerBackdropAnimation,
        drawerItemsAnimation,
        drawerHeaderAnimation,
        duration,
        tabs,
        tabCurrent,
        changeTab,

        sceneStatus,

        hasHeader,
        hasSubMenu,
        hasFooter,
        hasTabs,
        hasLeftButton,
        hasRightButton,
    } = props
    let minimumTabs = 6
    return (
        <>
            {
                tabs.length <= minimumTabs ?
                    <View style={{ flexDirection: 'row', backgroundColor: 'green', width: '100%' }}>
                        {
                            tabs.map(
                                (tab, tabNumber) => (
                                    <TouchableOpacity
                                        style={{ flex: 1, marginHorizontal: 10, marginVertical: 10 }}
                                        key={tabNumber}
                                        onPress={() => changeTab(tabNumber, tab.title)}
                                    >
                                        <Image source={tab.icon ? tab.icon : require('../../images/missing_icon.png')}
                                            style={{
                                                tintColor: tabCurrent === tabNumber ? 'white' : 'lightgray',
                                                alignSelf: 'center',
                                                height: tabCurrent === tabNumber ? 30 : 25,
                                                width: tabCurrent === tabNumber ? 30 : 25,
                                            }} />
                                        <Text
                                            style={{
                                                color: tabCurrent === tabNumber ? 'white' : 'lightgray',
                                                textAlign: 'center',
                                                fontSize: 20 - tabs.length,
                                                fontWeight: tabCurrent === tabNumber ? 'bold' : 'normal'
                                            }}
                                        >
                                            {tab.title}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            )
                        }
                    </View>
                    :
                    <ScrollView horizontal style={{ backgroundColor: 'green', width: '100%' }}>
                        {
                            tabs.map((tab, tabNumber) => (
                                <TouchableOpacity
                                    style={{
                                        marginHorizontal: 20,
                                        marginVertical: 10,
                                    }}
                                    key={tabNumber}
                                    onPress={() => changeTab(tabNumber, tab.title)}
                                >
                                    <Image source={tab.icon ? tab.icon : require('../../images/missing_icon.png')}
                                        style={{
                                            tintColor: tabCurrent === tabNumber ? 'white' : 'lightgray',
                                            alignSelf: 'center',
                                            height: tabCurrent === tabNumber ? 30 : 25,
                                            width: tabCurrent === tabNumber ? 30 : 25,
                                        }} />
                                    <Text
                                        style={{
                                            color: tabCurrent === tabNumber ? 'white' : 'lightgray',
                                            textAlign: 'center',
                                            fontSize: 20,
                                            fontWeight: tabCurrent === tabNumber ? 'bold' : 'normal'
                                        }}
                                    >
                                        {tab.title}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
            }
        </>
    )
}

export default SceneTabControls
