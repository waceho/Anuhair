import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	Image,
	View,
	ImageBackground,
} from 'react-native';

import bgSrc from '../../images/wallpaper.png';
let imagess1 = 'http://1.bp.blogspot.com/-dKfduLkkGI0/UWaJrUKtYyI/AAAAAAAAEHo/X2ycrZTBq6I/s1600/Sephora_Joannes_Coiffure_Afro4.jpg';
let imagess2 = 'https://www.montpellier-shopping.fr/var/plain_site/storage/images/montpellier-shopping/homepage/commerce/royal-hair-beauty-montpellier/coiffure-afro-montpellier-chez-royal-hair-beauty-salon-de-coiffure-specialiste-qu-pose-aussi-extensions-de-cheveux/7911-10-fre-FR/Coiffure-afro-Montpellier-chez-Royal-Hair-Beauty-Salon-de-coiffure-specialiste-qu-pose-aussi-extensions-de-cheveux_reference.jpg';
const wallpaper = require('../../images/SephoraJ.jpg')

export default class Wallpaper extends Component {
	render() {
		return (

                <ImageBackground style={styles.picture} source={wallpaper}>
					{this.props.children}
                </ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
	picture: {
		margin: undefined,
		flex: 1,
		width: '100%',
		height: '100%',

	},
});
