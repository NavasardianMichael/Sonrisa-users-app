import React from 'react';
import { useRouteMatch, Redirect } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { addSubscription, removeSubscription } from '../redux/actions';

function UserPage(props) {
	const match = useRouteMatch();
	const dispatch = useDispatch();
	const user = props.usersToShow.find( item => item.login.username === match.params.username);

	function toggleSubscriptionHandler(event) {
		if(user.subscribed) {
			dispatch(removeSubscription(user.login.uuid));
		} else {
			dispatch(addSubscription(user));
		}
	};

	if(!user) return <Redirect to="/users" />
	return (
		<div className="user-page">
			<div className="row">
				<div className="col-md-4">
					<div className="main-block">
					  <img src={user.picture.large} className="user-picture" alt="user" title="user" />
					  <h4 className="username">{user.name.first} {user.name.last} ({user.login.username})</h4>
					  {user.subscribed ?
					  <button className="p-2 w-100 btn btn-danger" onClick={toggleSubscriptionHandler}><span>Unsubscribe</span> </button> :
					  <button className="p-2 w-100 btn btn-success" onClick={toggleSubscriptionHandler}><span>Subscribe</span></button>}
					</div>
				</div>
				<div className="col">
					<div className="info">
						<p>
							<img src="/images/gender.png" alt="gender" title="gender"/>
							gender: {user.gender}
						</p>					
						<p>
							<img src="/images/location.png" alt="location" title="location"/>
							address: {user.location.country}, {user.location.state}, {user.location.city}, {user.location.street.name} {user.location.street.number}
						</p>
						<p>
							<img src="/images/age.png" alt="age" title="age"/>
							birthday/age: {user.dob.date.slice(0, 10)} / {user.dob.age} years old
						</p>
						<p>
							<img src="/images/registered-date.png" alt="registered date" title="registered date"/>
							registered: {user.registered.date.slice(0, 10)}
						</p>
						<p>
							<img src="/images/phone.png" alt="phone number" title="phone number"/>
							phone number: {user.cell}
						</p>
						<p>
							<img src="/images/email.png" alt="email" title="email"/>
							email: {user.email}
						</p>																		
					</div>					
				</div>
			</div>	
		</div>
	)
};

const mapStateToProps = state => {
	return {
		usersToShow: state.data.usersToShow
	}
}

export default connect(mapStateToProps, null)(UserPage)