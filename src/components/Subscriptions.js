import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

function Subscriptions(props) {
	const shownSubscriptions = props.subscriptions.length === 0 ? 
							   <h4 className="w-100 my-3 text-center">There are no subscriptions now</h4> :
							   props.subscriptions.map(item =>  {
		return (
			<div className="my-2 col-6 col-md-4 col-lg-3 col-xl-2" key={item.login.uuid}>
				<UserItem user={item} />
			</div>
		)
	})
	return (
		<div className='subscriptions'>
			<div className="row">
				{shownSubscriptions}
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		subscriptions: state.data.subscriptions
	}
}

export default connect(mapStateToProps, null)(Subscriptions)