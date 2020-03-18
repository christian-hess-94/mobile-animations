import React from 'react'
import { View, Text, Dimensions, Animated } from 'react-native'
import Row from '../../utils/Row'
import FadeInView from '../../TabsOld/FadeInView'

const SceneTabs = props => {
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
        tabAnimation,
        duration,
        tabCurrent,
        tabs,

        sceneStatus,

        hasHeader,
        hasSubMenu,
        hasFooter,
        hasTabs,
        hasLeftButton,
        hasRightButton,
    } = props
    return (
        <Row>
            {
                tabs.map((tab, tabNumber) =>
                    <FadeInView key={tabNumber} {...props}>
                        {tab.content}
                    </FadeInView>)
            }
        </Row>
    )
}

export default SceneTabs
