import React, { Component } from 'react';

import Input from '../components/input';

class GoogleMapContainer extends Component {
	componentDidMount() {
		var uluru = {lat: -25.363, lng: 131.044};
		var map = new google.maps.Map(this.map, {
			zoom: 4,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
	}
	render() {
		const mapStyle = {
			height: 300,
			width: 300
		};
		return (
			<div>
				<h1>Google Map Container</h1>
				<div style={mapStyle} ref={(map) => { this.map = map; }}></div>
			</div>
		);
	}
};

export default GoogleMapContainer;