import React from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Config from "react-native-config";
const Tab1 = () => {
    // alert('tab1')
    return (
        <ScrollView>
            <Text>{Config.API_HOST} asdasdsdasddasd</Text>
        </ScrollView>
    )
}

export default Tab1
