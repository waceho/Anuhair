import React, { Component } from 'react';
import Logo from '../screenComponents/Logo';
import Form from '../screenComponents/Form';
import Wallpaper from '../screenComponents/Wallpaper';
import ButtonSubmit from '../screenComponents/ButtonSubmit';
import SignupSection from '../screenComponents/SignupSection';
import FacebookLogin from '../screenComponents/FacebookLoginButton';
import LoginBottomList from '../screenComponents/LoginBottomList';
import PropTypes from 'prop-types';
export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
                <FacebookLogin/>
				<Form />
				<SignupSection/>
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}
