import React, { Component } from "react";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keywords: ""
		}
	}

	inputChange(event) {
		this.setState({ keywords: event.target.value })
	}

	render() {
		return (
			<header>
				<div
					className="logo"
					onClick={ () => console.log("Clicked") }
				>
					Logo
				</div>
				<input onChange={ this.inputChange.bind(this) } />
			</header>
		);
	}

}

export default Header;