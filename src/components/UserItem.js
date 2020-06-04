import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addSubscription, removeSubscription } from '../redux/actions';

function UserItem(props) {
	let match = useRouteMatch();
	const dispatch = useDispatch();

	function toggleSubscriptionHandler(event) {
		if(props.user.subscribed) {
			dispatch(removeSubscription(props.user.login.uuid));
		} else {
			dispatch(addSubscription(props.user));
		}
	};

	return (
			<div className="user-item">
				<div className={`card bg-${(props.darkTheme === true) ? 'dark' : 'light'}`}>
				  <img 
				  	  className="card-img-top w-100" 
				  	  src={props.user.picture.large} 
				  	  alt={`${props.user.name.first} ${props.user.name.last}`}
				  	  title={`${props.user.name.first} ${props.user.name.last}`}
				  	/>
				  <div className="card-body">
				  <h6 className="card-text text-center">{`${props.user.name.first} ${props.user.name.last}`}</h6>
				  <div className="row text-center">
				   	<div className="col">
				   		<Link className={`mt-3 py-1 btn btn-outline-${(props.darkTheme === true) ? 'light' : 'secondary'}`} to={`${match.url}/${props.user.login.username}`}>
				   			to profile
				   		</Link>
				   	</div>
				   	<div className="col-sm-4">
					  {props.user.subscribed ?
					  <button className="mt-3 p-1 btn" onClick={toggleSubscriptionHandler}><img src={process.env.PUBLIC_URL + "/images/unsubscribe.png"} alt="unsubscribe" title="unsubscribe" /></button> :
					  <button className="mt-3 p-1 btn" onClick={toggleSubscriptionHandler}><img src={process.env.PUBLIC_URL + "/images/subscribe.png"} alt="subscribe" title="subscribe" /></button>}
				   	</div>
				  </div>			  
				  </div>
				</div>
			</div>
	)
};

export default UserItem