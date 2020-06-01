import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, connect } from 'react-redux';
import { toggleTheme } from '../redux/actions';
import { menuActiveItemHandler } from './utilities';

function Header(props) {
	const dispatch = useDispatch();
	document.addEventListener("DOMContentLoaded", function() { 
		menuActiveItemHandler('.nav-item')
	});

	function toggleThemeHandler() {
		dispatch(toggleTheme());
	}

	return (
		<div id="header">
			<nav className={`navbar navbar-expand-md navbar-${(props.darkTheme === true) ? 'dark' : 'light'} bg-${(props.darkTheme === true) ? 'dark' : 'light'}`}>
			  <Link className="navbar-brand text-center" to="/">
			  	<img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" width="40" />
			  	<br />Sonrisa
			  </Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarMenu">
			    <div className="navbar-nav w-100">
			      <Link className="nav-item nav-Link mx-2 px-3" to="/users">users</Link>
			      <Link className="nav-item nav-Link mx-2 px-3" to="/subscriptions">subscriptions</Link>
			      <Link className="nav-item nav-Link mx-2 px-3" to="/filteredUsers">filtered users</Link>
			      <button className={`text-capitalize ml-auto btn btn-outline-${(props.darkTheme === true) ? 'light' : 'secondary'}`} onClick={toggleThemeHandler}>change theme</button>
			    </div>
			  </div>
			</nav>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		darkTheme: state.app.darkTheme
	}
};

export default connect(mapStateToProps, null)(Header)