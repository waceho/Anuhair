import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
    Text,
	Easing
} from 'react-native';
import PropTypes from 'prop-types';
import { Actions, ActionConst } from 'react-native-router-flux';

import arrowImg from '../../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.in,
			}
		).start();

		setTimeout(() => {
			Actions.pop();
		}, 500);
	}

    onMenuPress() {
        this.setState({currentExample: undefined});
    }

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		return (
			<View style={styles.container}>

				<TouchableOpacity onPress={this._onPress}
					style={styles.button}
					activeOpacity={1}>
					<Image style={styles.image} source={arrowImg} />
				</TouchableOpacity>
				<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

        alignItems: 'stretch',

	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
    header: {
        height: SIZE,
        paddingTop: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: '#5894f3',
        alignItems: 'center',
        zIndex: 1001
    },
    menuIcon: {
        width: 30,
        height: 30
    },
    headerTitle: {
        marginLeft: 30,
        color: 'white',
        fontSize: 20
    },
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	}
});