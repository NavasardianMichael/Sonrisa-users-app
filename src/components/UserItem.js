import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addSubscription, removeSubscription } from '../redux/actions';

function UserItem(props) {
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
				<div className="card bg-light">
				  <img 
				  	  className="card-img-top w-100" 
				  	  src={props.user.picture.large} 
				  	  alt={`${props.user.name.first} ${props.user.name.last}`}
				  	  title={`${props.user.name.first} ${props.user.name.last}`}
				  	/>
				  <div className="card-body">
				  <h6 className="card-text text-center">{`${props.user.name.first} ${props.user.name.last}`}</h6>
				  <div className="row">
				   	<div className="col">
				   		<Link className="mt-3 py-1 btn btn-primary" to={`/users/${props.user.login.username}`}>
				   			to profile
				   		</Link>
				   	</div>
				   	<div className="col-md-4 text-right">
					  {props.user.subscribed ?
					  <button className="mt-3 p-1 btn" onClick={toggleSubscriptionHandler}><img src="/images/unsubscribe.png" alt="unsubscribe" title="unsubscribe" /></button> :
					  <button className="mt-3 p-1 btn" onClick={toggleSubscriptionHandler}><img src="/images/subscribe.png" alt="subscribe" title="subscribe" /></button>}
				   	</div>
				  </div>			  
				  </div>
				</div>
			</div>
	)
}

export default UserItem