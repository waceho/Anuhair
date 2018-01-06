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
    TouchableOpacity, Image
} from 'react-native';
import PropTypes from 'prop-types';
import Onboarding from 'react-native-simple-onboarding';

let imagess1 = 'https://i.pinimg.com/736x/c3/2f/d6/c32fd67e98ef729ede6f8ef01845a990--long-angled-bob-hairstyles-hairstyles-medium-lengths.jpg';
let imagess2 = 'https://i1.wp.com/therighthairstyles.com/wp-content/uploads/2015/08/19-medium-length-1.jpg';
let imagess3 = 'https://i.styleoholic.com/2016/10/04-asymmetrical-long-bob-with-highlights-for-texture.jpg';
let imagess4 = 'https://i.pinimg.com/736x/c3/2f/d6/c32fd67e98ef729ede6f8ef01845a990--long-angled-bob-hairstyles-hairstyles-medium-lengths.jpg';
let img4 = require('./img/1.png');
let img5 = require('./img/2.png');
let img6 = require('./img/3.png');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
/*
        <View style={styles.header}>
            <TouchableOpacity>
                <Image style={styles.menuIcon} source={require('./img/icon-menu.png')} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Annuhair</Text>
        </View>
*/
        <Onboarding
            pages={[
                { backgroundColor: '#8d8d8d', image: <Image
                        style={styles.image}
                        source={{uri: imagess1}}
                    />, title: 'Simple Messenger UI', subtitle: instructions },
                { backgroundColor: "#8d8d8d",image: <Image style={styles.image} source={img6} />, title: 'Welcome', subtitle: instructions },
                { backgroundColor: "#8d8d8d",image: <Image style={styles.image} source={img5} />, title: 'Also', subtitle: instructions },
                { backgroundColor: "#4c4b4d",image: <Image style={styles.image} source={img4} />, title: 'Also', subtitle: instructions },
            ]}

        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    header: {
        height: 50,
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    image:{
        borderRadius: 360,
        width: '100%',
        height: '80%',
        flex:1.5,
    }
});
