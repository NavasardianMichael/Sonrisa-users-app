import React from 'react';
import { useDispatch, connect } from 'react-redux';

function Footer(props) {
	return (
		<div id="footer">
			<nav className={`navbar navbar-${(props.darkTheme === true) ? 'dark' : 'light'} py-4 bg-${(props.darkTheme === true) ? 'dark' : 'light'}`}>
				Copyright 2020. Done With Love
			</nav>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		darkTheme: state.app.darkTheme
	}
};

export default connect(mapStateToProps, null)(Footer)