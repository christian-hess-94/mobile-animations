import React, { useState } from 'react'
import { View, Animated } from 'react-native'
import PropTypes from 'prop-types'

const Fade = props => {
    let { children, duration, forward, from, to } = props
    const [fadeAnim] = useState(new Animated.Value(from ? from : 0))
    switch (forward) {
        case true:
            Animated.timing(fadeAnim, {
                toValue: to ? to : 1,
                duration: duration ? duration : 1000
            }).start()
            break;
        case false:
            Animated.timing(fadeAnim, {
                toValue: from ? from : 0,
                duration: duration ? duration : 1000
            }).start()
            break;
    }
    let animation = {
        opacity: fadeAnim
    }
    return (
        <Animated.View style={animation}>
            {children}
        </Animated.View>
    )
}

Fade.propTypes = {
    duration: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    forward: PropTypes.bool, //mount, unmount
}

export default Fade
