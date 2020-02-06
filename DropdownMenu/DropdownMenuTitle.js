import React from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'

const DropdownMenuTitle = (props) => {
    const { openDropdownMenu, closeDropdownMenu, showBodyAnim, showBody } = props
    return (
        <TouchableOpacity onPress={() => {
            if (showBody === 0) {
                openDropdownMenu()
            } else {
                closeDropdownMenu()
            }
        }}>
            <Text style={{
                textAlign: 'center',
                padding: 20,
                fontSize: 20
            }}>
                {showBody === 0 ? 'Abrir' : 'Fechar'}
            </Text>
        </TouchableOpacity>
    )
}

export default DropdownMenuTitle
