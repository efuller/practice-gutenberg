import React, { Component } from 'react';

class GoogleMapContainer extends Component {
	componentDidMount() {
		// Let's just get a map showing!
		const uluru = {lat: -25.363, lng: 131.044};
		const map = new google.maps.Map(this.map, {
			zoom: 4,
			center: uluru
		});
		const marker = new google.maps.Marker({
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
}

export default GoogleMapContainer;