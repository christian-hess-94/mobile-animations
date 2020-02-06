import React, { useState } from 'react'
import {
    View,
    Text,
    Animated,
    Easing
} from 'react-native'

const ListItem = props => {
    return (
        <Animated.View style={{
            borderWidth: 1,
            borderColor: 'gray',
            margin: 8,
            padding: 16,
            borderRadius: 25,
            opacity: props.fadeAnim,
            transform: [{ scale: props.fadeAnim }],
        }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{props.title} - Título</Text>
            <Text style={{ fontSize: 20, fontWeight: '900' }}>Sub-título</Text>
            <Text style={{ fontSize: 14 }}>Descrição</Text>
        </Animated.View>
    )
}

export default ListItem
