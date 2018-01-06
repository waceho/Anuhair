import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    Image,
    ImageBackground,
    ActivityIndicator, StyleSheet
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import PropTypes from 'prop-types';
import SecondScreen from "./SecondScreen";
import LoginScreen from "./LoginScreen";
import OnboardingScreen from "./OnboardingScreen";
import HomeScreen from "./HomeScreen";
let imagess1 = 'https://i.pinimg.com/736x/c3/2f/d6/c32fd67e98ef729ede6f8ef01845a990--long-angled-bob-hairstyles-hairstyles-medium-lengths.jpg';


export default class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }


    render() {
        return (
            <Router>
                <Scene key="root">

                    <Scene key="onboardingScreen"
                           component={OnboardingScreen}
                           animation='fade'
                           hideNavBar={true}
                           initial={true}

                    />

                    <Scene key="loginScreen"
                           component={LoginScreen}
                           animation='fade'
                           hideNavBar={true}


                    />

                    <Scene key="homeScreen"
                           component={HomeScreen}
                           animation='fade'
                           hideNavBar={true}
                    />
                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
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
