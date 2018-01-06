import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	Image,
	View,
	ImageBackground,
} from 'react-native';

import bgSrc from '../../images/wallpaper.png';
let imagess1 = 'https://i.pinimg.com/736x/c3/2f/d6/c32fd67e98ef729ede6f8ef01845a990--long-angled-bob-hairstyles-hairstyles-medium-lengths.jpg';
let imagess2 = 'https://www.lfhair.com/xcart/images/thumbnails_20749.jpg';


export default class Wallpaper extends Component {
	render() {
		return (

                <ImageBackground style={styles.picture} source={{uri: imagess2}}>
					{this.props.children}
                </ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
	picture: {

		flex: 1,
		width: '100%',
		height: '100%',

	},
});
