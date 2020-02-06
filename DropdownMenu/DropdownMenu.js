import React, { useState } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import DropdownMenuBody from './DropdownMenuBody'
import DropdownMenuTitle from './DropdownMenuTitle'

const DropdownMenu = props => {
    const { openDropdownMenu, closeDropdownMenu, showBodyAnim, showBody, dropdownMenuBody } = props
    const [bodyHeight, setBodyHeight] = useState(0)

    return (
        <Animated.View style={{
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
            backgroundColor: 'lightgreen',
            borderColor: 'transparent',
            zIndex: 2
        }}>
            <DropdownMenuTitle
                openDropdownMenu={openDropdownMenu}
                closeDropdownMenu={closeDropdownMenu}
                showBodyAnim={showBodyAnim}
                showBody={showBody} />
            <DropdownMenuBody
                openDropdownMenu={openDropdownMenu}
                closeDropdownMenu={closeDropdownMenu}
                showBodyAnim={showBodyAnim}
                showBody={showBody}
                bodyHeight={bodyHeight}>
                <View
                    onLayout={(event) => setBodyHeight(event.nativeEvent.layout.height + 30)}>
                    {dropdownMenuBody}
                </View>
            </DropdownMenuBody>
        </Animated.View>
    )
}

export default DropdownMenu
