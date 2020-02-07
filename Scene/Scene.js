import React, { useState } from 'react'
import { View, Animated, SafeAreaView, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import SceneFooter from './SceneFooter'
import SceneHeader from './SceneHeader'
import SceneBackdrop from './SceneBackdrop'
import SceneTabButtons from './SceneTabButtons'
import SceneDrawer from './SceneDrawer'
import SceneTabs from './SceneTabs'

const Scene = props => {
    let { hasHeader, hasFooter, hasTabs, hasSubMenu, sceneBody, loadingContent, tabs, header } = props
    let duration = 500

    const [loadingShouldAppear, setLoadingShouldAppear] = useState(false)
    const [loadingAppearAnimation] = useState(new Animated.Value(0))

    const [contentAppearAnimation] = useState(new Animated.Value(0))

    const [drawerShouldAppear, setDrawerShouldAppear] = useState(false)
    const [drawerAppearAnimation] = useState(new Animated.Value(0))

    const [headerShouldAppear, setHeaderShouldAppear] = useState(true)
    const [headerAppearAnimation] = useState(new Animated.Value(0))

    const [subMenuShouldAppear, setSubMenuShouldAppear] = useState(true)
    const [subMenuAppearAnimation] = useState(new Animated.Value(0))

    const [subMenuShouldOpen, setSubMenuShouldOpen] = useState(false)
    const [subMenuOpenAnimation] = useState(new Animated.Value(0))

    const [footerShouldAppear, setFooterShouldAppear] = useState(true)
    const [footerAppearAnimation] = useState(new Animated.Value(0))

    const [tabsShouldAppear, setTabsShouldAppear] = useState(true)
    const [tabsAppearAnimation] = useState(new Animated.Value(0))

    const [vanishTab, setVanishTab] = useState(1)//1, 0
    const [tabAnimation, setTabAnimation] = useState(new Animated.Value(0))

    const [sceneTitle, setSceneTitle] = useState(header)
    const startAnimation = (animation, set, duration2, to) => {
        !!set && set(true)
        Animated.timing(animation, {
            toValue: to ? to : 1,
            duration: duration2 ? duration2 : duration
        }).start()
    }
    const reverseAnimation = (animation, set, duration2, to) => {
        Animated.timing(animation, {
            toValue: to ? to : 0,
            duration: duration2 ? duration2 : duration
        }).start()
        setTimeout(() => {
            !!set && set(false)
        }, duration2 ? duration2 : duration)
    }
    if (loadingContent) {
        startAnimation(contentAppearAnimation) //some com content
        setTimeout(() => { startAnimation(loadingAppearAnimation, setLoadingShouldAppear) }, duration) //espera e faz loading aparecer
    } else {
        reverseAnimation(loadingAppearAnimation, setLoadingShouldAppear) //some com loading
        setTimeout(() => { reverseAnimation(contentAppearAnimation) }, duration) //espera e faz content aparecer
    }

    return (
        <SafeAreaView style={{ height: '100%', width: '100%' }}>
            {
                hasHeader && !loadingShouldAppear &&
                <SceneHeader
                    {...props}
                    startAnimation={startAnimation}
                    reverseAnimation={reverseAnimation}
                    drawerAppearAnimation={drawerAppearAnimation}
                    headerAppearAnimation={headerAppearAnimation}
                    subMenuAppearAnimation={subMenuAppearAnimation}
                    footerAppearAnimation={footerAppearAnimation}
                    tabsAppearAnimation={tabsAppearAnimation}
                    subMenuOpenAnimation={subMenuOpenAnimation}
                    tabAnimation={tabAnimation}


                    drawerShouldAppear={drawerShouldAppear}
                    headerShouldAppear={headerShouldAppear}
                    subMenuShouldAppear={subMenuShouldAppear}
                    subMenuShouldOpen={subMenuShouldOpen}
                    footerShouldAppear={footerShouldAppear}
                    tabsShouldAppear={tabsShouldAppear}
                    vanishTab={vanishTab}
                    sceneTitle={sceneTitle}

                    setDrawerShouldAppear={setDrawerShouldAppear}
                    setHeaderShouldAppear={setHeaderShouldAppear}
                    setSubMenuShouldAppear={setSubMenuShouldAppear}
                    setSubMenuShouldOpen={setSubMenuShouldOpen}
                    setFooterShouldAppear={setFooterShouldAppear}
                    setTabsShouldAppear={setTabsShouldAppear}
                    setVanishTab={setVanishTab}
                    setTabAnimation={setTabAnimation}
                    setSceneTitle={setSceneTitle}
                />
            }
            {
                loadingShouldAppear ?
                    <Animated.View style={{
                        height: Dimensions.get('window').height - 16,
                        width: Dimensions.get('window').width - 16,
                        position: 'absolute',
                        justifyContent: 'center',
                        opacity: loadingAppearAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        }),
                        transform: [
                            {
                                scale: loadingAppearAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 2]
                                })
                            }
                        ]
                    }}>
                        <ActivityIndicator
                            size='large'
                        />
                    </Animated.View>
                    :
                    <Animated.View style={{
                        flex: 1,
                        opacity: contentAppearAnimation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0]
                        }),
                        transform: [
                            {
                                scale: contentAppearAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 0.5]
                                })
                            }
                        ]
                    }}>
                        {
                            hasTabs ?
                                <SceneTabs {...props}

                                    startAnimation={startAnimation}
                                    reverseAnimation={reverseAnimation}
                                    drawerAppearAnimation={drawerAppearAnimation}
                                    headerAppearAnimation={headerAppearAnimation}
                                    subMenuAppearAnimation={subMenuAppearAnimation}
                                    footerAppearAnimation={footerAppearAnimation}
                                    tabsAppearAnimation={tabsAppearAnimation}
                                    subMenuOpenAnimation={subMenuOpenAnimation}
                                    tabAnimation={tabAnimation}


                                    drawerShouldAppear={drawerShouldAppear}
                                    headerShouldAppear={headerShouldAppear}
                                    subMenuShouldAppear={subMenuShouldAppear}
                                    subMenuShouldOpen={subMenuShouldOpen}
                                    footerShouldAppear={footerShouldAppear}
                                    tabsShouldAppear={tabsShouldAppear}
                                    vanishTab={vanishTab}
                                    sceneTitle={sceneTitle}

                                    setDrawerShouldAppear={setDrawerShouldAppear}
                                    setHeaderShouldAppear={setHeaderShouldAppear}
                                    setSubMenuShouldAppear={setSubMenuShouldAppear}
                                    setSubMenuShouldOpen={setSubMenuShouldOpen}
                                    setFooterShouldAppear={setFooterShouldAppear}
                                    setTabsShouldAppear={setTabsShouldAppear}
                                    setVanishTab={setVanishTab}
                                    setTabAnimation={setTabAnimation}
                                    setSceneTitle={setSceneTitle}
                                />
                                :
                                <ScrollView style={{ marginHorizontal: 20, flex: 10 }}>
                                    <View style={{ height: 10 }} />
                                    {sceneBody}
                                    <View style={{ height: 10 }} />
                                </ScrollView>
                        }

                    </Animated.View>
            }

            {
                hasFooter && !loadingShouldAppear &&
                <SceneFooter
                    {...props}
                    startAnimation={startAnimation}
                    reverseAnimation={reverseAnimation}
                    drawerAppearAnimation={drawerAppearAnimation}
                    headerAppearAnimation={headerAppearAnimation}
                    subMenuAppearAnimation={subMenuAppearAnimation}
                    footerAppearAnimation={footerAppearAnimation}
                    tabsAppearAnimation={tabsAppearAnimation}
                    subMenuOpenAnimation={subMenuOpenAnimation}
                    tabAnimation={tabAnimation}


                    drawerShouldAppear={drawerShouldAppear}
                    headerShouldAppear={headerShouldAppear}
                    subMenuShouldAppear={subMenuShouldAppear}
                    subMenuShouldOpen={subMenuShouldOpen}
                    footerShouldAppear={footerShouldAppear}
                    tabsShouldAppear={tabsShouldAppear}
                    vanishTab={vanishTab}
                    sceneTitle={sceneTitle}

                    setDrawerShouldAppear={setDrawerShouldAppear}
                    setHeaderShouldAppear={setHeaderShouldAppear}
                    setSubMenuShouldAppear={setSubMenuShouldAppear}
                    setSubMenuShouldOpen={setSubMenuShouldOpen}
                    setFooterShouldAppear={setFooterShouldAppear}
                    setTabsShouldAppear={setTabsShouldAppear}
                    setVanishTab={setVanishTab}
                    setTabAnimation={setTabAnimation}
                    setSceneTitle={setSceneTitle}
                />
            }

            <SceneDrawer
                {...props}
                startAnimation={startAnimation}
                reverseAnimation={reverseAnimation}
                drawerAppearAnimation={drawerAppearAnimation}
                headerAppearAnimation={headerAppearAnimation}
                subMenuAppearAnimation={subMenuAppearAnimation}
                footerAppearAnimation={footerAppearAnimation}
                tabsAppearAnimation={tabsAppearAnimation}
                subMenuOpenAnimation={subMenuOpenAnimation}
                tabAnimation={tabAnimation}


                drawerShouldAppear={drawerShouldAppear}
                headerShouldAppear={headerShouldAppear}
                subMenuShouldAppear={subMenuShouldAppear}
                subMenuShouldOpen={subMenuShouldOpen}
                footerShouldAppear={footerShouldAppear}
                tabsShouldAppear={tabsShouldAppear}
                vanishTab={vanishTab}
                sceneTitle={sceneTitle}

                setDrawerShouldAppear={setDrawerShouldAppear}
                setHeaderShouldAppear={setHeaderShouldAppear}
                setSubMenuShouldAppear={setSubMenuShouldAppear}
                setSubMenuShouldOpen={setSubMenuShouldOpen}
                setFooterShouldAppear={setFooterShouldAppear}
                setTabsShouldAppear={setTabsShouldAppear}
                setVanishTab={setVanishTab}
                setTabAnimation={setTabAnimation}
                setSceneTitle={setSceneTitle}
            />

        </SafeAreaView >
    )
}

export default Scene
