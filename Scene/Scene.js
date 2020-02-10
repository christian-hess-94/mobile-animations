import React, { useState } from 'react'
import { View, Animated, SafeAreaView, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import SceneFooter from './SceneFooter'
import SceneHeader from './SceneHeader'
import SceneDrawer from './SceneDrawer'
import SceneTabs from './SceneTabs'

const Scene = props => {
    let { hasHeader, hasFooter, hasTabs, hasSubMenu, sceneBody, loadingContent, tabs, header } = props
    let duration = 500
    //HEADER
    const [sceneTitle, setSceneTitle] = useState(header)

    const [headerShouldAppear, setHeaderShouldAppear] = useState(true)
    const [headerAppearAnimation] = useState(new Animated.Value(0))
    //BODY/CONTENT
    const [loadingShouldAppear, setLoadingShouldAppear] = useState(false)

    const [loadingAppearAnimation] = useState(new Animated.Value(0))
    const [contentAppearAnimation] = useState(new Animated.Value(0))
    //SUBMENU
    const [subMenuShouldAppear, setSubMenuShouldAppear] = useState(true)
    const [subMenuAppearAnimation] = useState(new Animated.Value(0))

    const [subMenuShouldOpen, setSubMenuShouldOpen] = useState(false)
    const [subMenuOpenAnimation] = useState(new Animated.Value(0))
    //FOOTER
    const [footerShouldAppear, setFooterShouldAppear] = useState(true)
    const [footerAppearAnimation] = useState(new Animated.Value(0))
    //TABS
    const [changeTabAnim] = useState(new Animated.Value(0))
    const [revealTabContentAnim] = useState(new Animated.Value(1))
    const [currentTab, setCurrentTab] = useState(0)
    //DRAWER
    const [drawerShouldAppear, setDrawerShouldAppear] = useState(false)
    const [drawerAppearAnimation] = useState(new Animated.Value(0))

    const [drawerItemsShouldAppear, setDrawerItemsShouldAppear] = useState(true)
    const [drawerItemsAnimation] = useState(new Animated.Value(0))


    const startAnimation = (animation, set, duration2, to) => {
        // console.log('animation')
        !!set && set(true)
        Animated.timing(animation, {
            toValue: to ? to : 1,
            duration: duration2 ? duration2 : duration
        }).start()
    }

    const reverseAnimation = (animation, set, duration2, to) => {
        // console.log('animation')
        Animated.timing(animation, {
            toValue: to ? to : 0,
            duration: duration2 ? duration2 : duration
        }).start()
        setTimeout(() => {
            !!set && set(false)
        }, duration2 ? duration2 : duration)
    }

    const goToNextTab = (tabToGo) => {
        setCurrentTab(tabToGo)
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    revealTabContentAnim,
                    {
                        toValue: 0,
                        // easing,
                        duration,
                    }
                ),
                Animated.timing(
                    changeTabAnim,
                    {
                        toValue: Dimensions.get('window').width * (tabToGo),
                        // easing,
                        duration,
                    }
                )
            ]),
            Animated.timing(
                revealTabContentAnim,
                {
                    toValue: 1,
                    // easing,
                    duration: duration / 2,
                }
            ),
        ]).start()
        // setTimeout(() => {
        //     setCurrentTab(tabToGo)
        // }, duration * 2)
    }

    const goToPreviousTab = (tabToGo) => {

        setCurrentTab(tabToGo)
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    revealTabContentAnim,
                    {
                        toValue: 0,
                        // easing,
                        duration,
                    }
                ),
                Animated.timing(
                    changeTabAnim,
                    {
                        toValue: Dimensions.get('window').width * (tabToGo),
                        // easing,
                        duration,
                    }
                )
            ]),
            Animated.timing(
                revealTabContentAnim,
                {
                    toValue: 1,
                    // easing,
                    duration: duration / 2,
                }
            ),
        ]).start()
        // setTimeout(() => {
        //     setCurrentTab(tabToGo)
        // }, duration * 2)
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
                    subMenuOpenAnimation={subMenuOpenAnimation}
                    changeTabAnim={changeTabAnim}
                    revealTabContentAnim={revealTabContentAnim}
                    drawerItemsAnimation={drawerItemsAnimation}

                    drawerShouldAppear={drawerShouldAppear}
                    headerShouldAppear={headerShouldAppear}
                    subMenuShouldAppear={subMenuShouldAppear}
                    subMenuShouldOpen={subMenuShouldOpen}
                    footerShouldAppear={footerShouldAppear}
                    sceneTitle={sceneTitle}
                    drawerItemsShouldAppear={drawerItemsShouldAppear}
                    currentTab={currentTab}
                    goToNextTab={goToNextTab}
                    goToPreviousTab={goToPreviousTab}

                    setDrawerShouldAppear={setDrawerShouldAppear}
                    setHeaderShouldAppear={setHeaderShouldAppear}
                    setSubMenuShouldAppear={setSubMenuShouldAppear}
                    setSubMenuShouldOpen={setSubMenuShouldOpen}
                    setFooterShouldAppear={setFooterShouldAppear}
                    setSceneTitle={setSceneTitle}
                    setDrawerItemsShouldAppear={setDrawerItemsShouldAppear}
                    setCurrentTab={setCurrentTab}
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
                                    subMenuOpenAnimation={subMenuOpenAnimation}
                                    changeTabAnim={changeTabAnim}
                                    revealTabContentAnim={revealTabContentAnim}
                                    drawerItemsAnimation={drawerItemsAnimation}

                                    drawerShouldAppear={drawerShouldAppear}
                                    headerShouldAppear={headerShouldAppear}
                                    subMenuShouldAppear={subMenuShouldAppear}
                                    subMenuShouldOpen={subMenuShouldOpen}
                                    footerShouldAppear={footerShouldAppear}
                                    sceneTitle={sceneTitle}
                                    drawerItemsShouldAppear={drawerItemsShouldAppear}
                                    currentTab={currentTab}
                                    goToNextTab={goToNextTab}
                                    goToPreviousTab={goToPreviousTab}

                                    setDrawerShouldAppear={setDrawerShouldAppear}
                                    setHeaderShouldAppear={setHeaderShouldAppear}
                                    setSubMenuShouldAppear={setSubMenuShouldAppear}
                                    setSubMenuShouldOpen={setSubMenuShouldOpen}
                                    setFooterShouldAppear={setFooterShouldAppear}
                                    setSceneTitle={setSceneTitle}
                                    setDrawerItemsShouldAppear={setDrawerItemsShouldAppear}
                                    setCurrentTab={setCurrentTab}
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
                    subMenuOpenAnimation={subMenuOpenAnimation}
                    changeTabAnim={changeTabAnim}
                    revealTabContentAnim={revealTabContentAnim}
                    drawerItemsAnimation={drawerItemsAnimation}

                    drawerShouldAppear={drawerShouldAppear}
                    headerShouldAppear={headerShouldAppear}
                    subMenuShouldAppear={subMenuShouldAppear}
                    subMenuShouldOpen={subMenuShouldOpen}
                    footerShouldAppear={footerShouldAppear}
                    sceneTitle={sceneTitle}
                    drawerItemsShouldAppear={drawerItemsShouldAppear}
                    currentTab={currentTab}
                    goToNextTab={goToNextTab}
                    goToPreviousTab={goToPreviousTab}

                    setDrawerShouldAppear={setDrawerShouldAppear}
                    setHeaderShouldAppear={setHeaderShouldAppear}
                    setSubMenuShouldAppear={setSubMenuShouldAppear}
                    setSubMenuShouldOpen={setSubMenuShouldOpen}
                    setFooterShouldAppear={setFooterShouldAppear}
                    setSceneTitle={setSceneTitle}
                    setDrawerItemsShouldAppear={setDrawerItemsShouldAppear}
                    setCurrentTab={setCurrentTab}
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
                subMenuOpenAnimation={subMenuOpenAnimation}
                changeTabAnim={changeTabAnim}
                revealTabContentAnim={revealTabContentAnim}
                drawerItemsAnimation={drawerItemsAnimation}

                drawerShouldAppear={drawerShouldAppear}
                headerShouldAppear={headerShouldAppear}
                subMenuShouldAppear={subMenuShouldAppear}
                subMenuShouldOpen={subMenuShouldOpen}
                footerShouldAppear={footerShouldAppear}
                sceneTitle={sceneTitle}
                drawerItemsShouldAppear={drawerItemsShouldAppear}
                currentTab={currentTab}
                goToNextTab={goToNextTab}
                goToPreviousTab={goToPreviousTab}

                setDrawerShouldAppear={setDrawerShouldAppear}
                setHeaderShouldAppear={setHeaderShouldAppear}
                setSubMenuShouldAppear={setSubMenuShouldAppear}
                setSubMenuShouldOpen={setSubMenuShouldOpen}
                setFooterShouldAppear={setFooterShouldAppear}
                setSceneTitle={setSceneTitle}
                setDrawerItemsShouldAppear={setDrawerItemsShouldAppear}
                setCurrentTab={setCurrentTab}
            />

        </SafeAreaView >
    )
}

export default Scene
