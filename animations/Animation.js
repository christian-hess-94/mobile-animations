import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Slide from './Slide'
import PopUp from './PopUp'
import Fade from './Fade'

const Animation = props => {
    let { type, children } = props
    switch (type) {
        case 'slide-left':
            return (
                <Slide
                    goToThe='left'
                    {...props}
                >
                    {children}
                </Slide>
            )
        case 'slide-right':
            return (
                <Slide
                    goToThe='right'
                    {...props}
                >
                    {children}
                </Slide>
            )
        case 'fade':
            return (
                <Fade {...props}>
                    {children}
                </Fade>
            )
        case 'popup':
            return (
                <PopUp {...props}>
                    {children}
                </PopUp>
            )

        default:
            return (
                <PopUp {...props}>
                    {children}
                </PopUp>
            )
    }
}

Animation.propTypes = {
    duration: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    goToThe: PropTypes.string,
    forward: PropTypes.bool,
    type: PropTypes.string, //slide-left, slide-right, fade, popup
}
export default Animation
