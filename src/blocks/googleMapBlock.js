import React from 'react';

const { registerBlockType } = wp.blocks;
// AIzaSyDBXqfakK7_J5YCzpw26QJYy4gcsFZmFzU

import GoogleMapContainer from './containers/googleMapContainer';
import Input from './components/input';

registerBlockType( 'pg/google-maps', {
	title: 'Google Maps',
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		url: {
			type: 'string'
		}
	},

	edit: ( props ) => {
		const onChangeInput = ( value ) => {
			console.log( value );
			props.setAttributes( { url: event.target.value } );
		};

		return (
			<div>
				<Input handleChange={onChangeInput} text={props.attributes.url}/>
				<GoogleMapContainer
					focused={props.focus}
					url={props.attributes.url}
					handleChange={onChangeInput}
					text={props.attributes.url}/>
			</div>
		)
	},

	save: props => {
		return <p>Hello saved content.</p>;
	},
} );