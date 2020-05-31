import React from 'react';
import { Switch, Route } from "react-router-dom";
import Users from './Users';
import Subscriptions from './Subscriptions';
import FilteredUsers from './FilteredUsers';
import UserPage from './UserPage';


function Content({match}) {
	return (
		<div id="content">
			<Switch>
	          <Route path="/users" exact component={Users} />
	          <Route path="/subscriptions" component={Subscriptions} />
	          <Route path="/filteredUsers" component={FilteredUsers} />
			  <Route path="/" exact component={Users} />
			  <Route path="/users/:username" component={UserPage} />
        	</Switch>
		</div>
	)
}

export default Content