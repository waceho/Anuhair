import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import logoImg from '../../images/logo.png';

export default class Logo extends Component {
	render() {
		return (

                <View style={styles.container}>
                    <Image source={logoImg} style={styles.image} />
                    <Text style={styles.text}>Anuhair</Text>
                </View>


		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: '20%',
		height: '35%',
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 10,
	}
});
