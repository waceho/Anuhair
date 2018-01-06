import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from "./screens/OnboardingScreen";
export default class Main extends Component {
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
	  );
	}
}