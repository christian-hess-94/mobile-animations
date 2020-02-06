import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View } from 'react-native'
const Row = (props) => {
	const { scrollEnabled } = props
	return (
		scrollEnabled ?
			<ScrollView scrollEnabled={scrollEnabled} horizontal contentContainerStyle={style.notCentered}>
				{props.children}
			</ScrollView>
			:
			<View style={style.notCentered}>
				{props.children}
			</View>
	)
}

Row.propTypes = {
	scrollEnabled: PropTypes.bool,
	horizontal: PropTypes.bool,
}

const style = StyleSheet.create({
	centered: {
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},
	notCentered: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		alignContent: 'flex-start',
		justifyContent: 'flex-start',
	}
})

export default Row
