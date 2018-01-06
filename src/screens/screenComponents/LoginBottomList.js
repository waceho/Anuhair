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
import { List, ListItem } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },

    {
        name: 'Chris DOSSOU',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },

]

export default class LoginBottomList extends Component {
	render() {
		return (
			<View style={styles.container}>
                <List containerStyle={{
                	margin: 5,
					backgroundColor: '#c3c3c3'}}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                roundAvatar
                                hideChevron
                                avatar={{uri:l.avatar_url}}
                                key={i}
                                title={l.name}
                                subtitle={
									<Text>Voici pourquoi</Text>
								}
                            />
                        ))
                    }
                </List>
			</View>


		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
        position: 'absolute',


		width: '100%',
		bottom: 0,
		margin: 0,
	},
	image: {
		width: '20%',
		height: '35%',
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',

	}
});
