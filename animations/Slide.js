import React, { useState } from 'react'
import { View, Animated } from 'react-native'
import PropTypes from 'prop-types'

const Slide = props => {
    let { children, duration, goToThe, forward, from, to } = props
    const [slideAnim] = useState(new Animated.Value(0))
    switch (forward) {
        case true:
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: duration ? duration : 1000
            }).start()
            break;
        case false:
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: duration ? duration : 1000
            }).start()
            break;
    }
    let animation = {}
    switch (goToThe) {
        case 'left':
            animation = {
                left: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [from ? from : 1000, to ? to : 0]
                })
            }
            break;
        case 'right':
            animation = {
                right: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [from ? from : 1000, to ? to : 0]
                })
            }
            break;
        case 'top':
            animation = {
                top: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [from ? from : 1000, to ? to : 0]
                })
            }
            break;
        case 'bottom':
            animation = {
                bottom: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [from ? from : 1000, to ? to : 0]
                })
            }
            break;
    }

    return (
        <Animated.View style={animation}>
            {children}
        </Animated.View>
    )
}
Slide.propTypes = {
    duration: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    goToThe: PropTypes.string,
    forward: PropTypes.bool, //mount, unmount
}
export default Slide
