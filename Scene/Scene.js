import React from 'react'
import { View, Text, SafeAreaView, Animated } from 'react-native'
import SceneHeader from './SceneHeader/SceneHeader'
import SceneFooter from './Footer/SceneFooter'
import SceneDrawer from './Drawer/SceneDrawer'
import SceneContent from './Content/SceneContent'
import SceneLoading from './Content/SceneLoading'
import SceneTabs from './Content/SceneTabs'
import PropTypes from 'prop-types'

const Scene = props => {
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

        sceneStatus,

        hasHeader,
        hasSubMenu,
        hasFooter,
        hasTabs,
        hasLeftButton,
        hasRightButton,
    } = props
    return (
        <SafeAreaView style={{ height: '100%', width: '100%' }}>
            {hasHeader && <SceneHeader {...props} />}

            <SceneLoading {...props} />
            <Animated.View
                style={{
                    height: '100%',
                    opacity: contentAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1]
                    }),
                    left: contentAnimation.interpolate({
                        inputRange: [0, 0.1, 1],
                        outputRange: [-1000, 0, 0]
                    }),
                    transform: [
                        {
                            scale: contentAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.5, 1]
                            })
                        }

                    ]
                }}>
                {
                    hasTabs ?
                        <SceneTabs {...props} />
                        :
                        <SceneContent {...props} />
                }
            </Animated.View>
            {hasFooter && <SceneFooter {...props} />}
            <SceneDrawer {...props} />
        </SafeAreaView>
    )
}

Scene.propTypes = {
    hasHeader: PropTypes.bool,
    hasSubMenu: PropTypes.bool,
    hasFooter: PropTypes.bool,
    hasTabs: PropTypes.bool,
    hasLeftButton: PropTypes.bool,
    hasRightButton: PropTypes.bool,

    header: PropTypes.string,
    sceneContent: PropTypes.any
}

export default Scene
