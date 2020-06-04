import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { connect } from 'react-redux';
import Users from './Users';
import Subscriptions from './Subscriptions';
import FilteredUsers from './FilteredUsers';
import UserPage from './UserPage';


function Content(props) {
	let match = useRouteMatch();
	return (
		<div id="content" className={`bg-${props.darkTheme && 'secondary'}`}>
			<Switch>
	          <Route path="/users" exact component={Users} />
	          <Route path="/subscriptions" exact component={Subscriptions} />
	          <Route path="/filteredUsers" exact component={FilteredUsers} />
			  <Route path="/" exact component={Users} />
			  <Route path="/users/:username" component={UserPage} />
			  <Route path="/subscriptions/:username" component={UserPage} />
			  <Route path="/filteredUsers/:username" component={UserPage} />			  			  
        	</Switch>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		darkTheme: state.app.darkTheme
	}
};

export default connect(mapStateToProps, null)(Content)