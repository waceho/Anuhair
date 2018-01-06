/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity, Image, Animated, Easing
} from 'react-native';
import Wallpaper from './OnboardingWallpaper';
import { Actions, ActionConst } from 'react-native-router-flux';
import Onboarding from 'react-native-simple-onboarding';

let imagess1 = 'https://i.pinimg.com/736x/c3/2f/d6/c32fd67e98ef729ede6f8ef01845a990--long-angled-bob-hairstyles-hairstyles-medium-lengths.jpg';
let imagess2 = 'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/08/19-medium-length-1.jpg';
let imagess3 = 'https://i.styleoholic.com/2016/10/04-asymmetrical-long-bob-with-highlights-for-texture.jpg';
let imagess4 = 'https://i.pinimg.com/736x/c3/2f/d6/c32fd67e98ef729ede6f8ef01845a990--long-angled-bob-hairstyles-hairstyles-medium-lengths.jpg';
// GOOD
const icon1 = require('../images/logo.png');
const icon2 = require('../images/wallpaper.png');
const icon3 = require('../images/page3.png');
const icon4 = require('../images/page1.png');


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class OnboardingScreen extends Component<{}> {
    render() {
        return (
            <Wallpaper>
                <Onboarding
                    pages={[
                        { backgroundColor: 'transparent', image: <Image style={styles.image} source={icon1} />, title: 'TUTO 1', subtitle: instructions },
                        { backgroundColor: "transparent", image: <Image style={styles.image} source={icon1} />, title: 'TUTO 2', subtitle: instructions },
                        { backgroundColor: "transparent", image: <Image style={styles.image} source={icon1} />, title: 'TUTO 3', subtitle: instructions },
                        { backgroundColor: "transparent",image: <Image style={styles.image} source={icon1} />, title: 'TUTO 4', subtitle: instructions },
                    ]}
                    showDone={true}
                    onEnd={Actions.loginScreen}
                />
            </Wallpaper>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image:{
        borderRadius: 5,
        width: '100%',
        height: '75%',

    }
});
