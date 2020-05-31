import React from 'react';
import { Link } from "react-router-dom";
import { menuActiveItemHandler } from './utilities';

function Header() {
	document.addEventListener("DOMContentLoaded", function() { 
		menuActiveItemHandler('.nav-item')
	});

	return (
		<div id="header">
			<nav className="navbar navbar-expand-md navbar-light bg-light">
			  <Link className="navbar-brand text-center" to="/">
			  	<img src="/logo.png"alt="logo" width="40" />
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
			    </div>
			  </div>
			</nav>
		</div>
	)
};

export default Header