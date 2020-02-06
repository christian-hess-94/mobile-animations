import React, { useState } from 'react'
import { View, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'

const PopUp = props => {
    let { children, duration, forward, from, to } = props
    let easing = Easing.in()
    const [popUpAnim] = useState(new Animated.Value(from ? from : 0))
    switch (forward) {
        case true:
            Animated.timing(popUpAnim, {
                toValue: to ? to : 1,
                duration: duration ? duration : 1000,
                easing
            }).start()
            break;
        case false:
            Animated.timing(popUpAnim, {
                toValue: from ? from : 0,
                duration: duration ? duration : 1000,
                easing
            }).start()
            break;
    }
    let animation = {
        transform: [
            {
                scale: popUpAnim,
            }
        ],
        opacity: popUpAnim.interpolate({
            inputRange: [0, 0.8, 1],
            outputRange: [0, 0, 1]
        })
    }
    return (
        <Animated.View style={animation}>
            {children}
        </Animated.View>
    )
}

PopUp.propTypes = {
    duration: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    forward: PropTypes.bool, //mount, unmount
}

export default PopUp
