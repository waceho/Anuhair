import React, { Component } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import FacebookLogin from './FacebookLoginButton';
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
