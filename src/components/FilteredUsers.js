import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { fetchUsersByCriteria } from '../redux/actions';

function FilteredUsers(props) {
	const [gender, setGender] = useState('');
	const [checkedNationalities, setCheckedNationalities] = useState({});
	const [filteredUsersCount, setFilteredUsersCount] = useState(1);

	function genderFilterHandler(event) {
		setGender(event.target.value);
	};

	function natFilterHandler(event) {
		const { value } = event.target;  
		setCheckedNationalities(prev => {
			return {
				...prev,
				[value]: !prev[value]
			} 
		})
	};

	function countFilterHandler(event) {
		setFilteredUsersCount(event.target.value);
	}

	function searchFilteredUsersHandler() {
		var filterCriteria = {
			gender,
			checkedNationalities,
			filteredUsersCount
		};
		Object.keys(filterCriteria.checkedNationalities).forEach(key => {
		  if (filterCriteria.checkedNationalities[key] === false) delete filterCriteria.checkedNationalities[key];
		});

		props.fetchUsersByCriteria(filterCriteria);
	}

	const nationalityItems = props.nationalities.map(item => {
		return (
			<div className="form-check-inline my-1 mr-0 w-25" key={item}>
			    <input className="form-check-input" type="checkbox" id={`nat-${item}`} value={item} onChange={natFilterHandler} checked={checkedNationalities.item}/>
			    <label className="form-check-label" htmlFor={`nat-${item}`}>{item}</label>
			</div>
		)
	});

	const filteredUsers = props.filteredUsersToShow.map(item => {
		return (
			<div className="my-2 col-6 col-md-4 col-lg-3 col-xl-2" key={item.login.uuid}>
				<UserItem user={item} />
			</div>
		)
	})

	return (
		<div className='filtered-users'>
			<div className="row">
				<div className="col-md-3 border-right">
					<h6 className="mt-3 mb-1">Gender</h6>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="gender" id="maleControl" value="male" onChange={genderFilterHandler} checked={gender==='male'} />
					  <label className="form-check-label" htmlFor="maleControl">
					    Male
					  </label>
					</div>
					<div className="form-check">
					  <input className="form-check-input" type="radio" name="gender" id="femaleControl" value="female" onChange={genderFilterHandler} checked={gender==='female'} />
					  <label className="form-check-label" htmlFor="femaleControl">
					    Female
					  </label>
					</div>
					<h6 className="mt-3 mb-1">Nationalities</h6>
					{nationalityItems}
    				<h6 className="mt-3 mb-1">Users count to show</h6>
    				<input type="number" className="form-control my-2"  placeholder="0" value={filteredUsersCount} onChange={countFilterHandler}/>
					<div className="form-group my-2">
					    <input type="range" min="1" max="30" className="form-control-range" value={filteredUsersCount} onChange={countFilterHandler}/>
					</div>
					<button className="btn btn-primary px-4 my-3 mx-auto d-block" onClick={searchFilteredUsersHandler}>Search</button>					
				</div>
				<div className="col">
					<div className="row">
						{ filteredUsers }
					</div>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		nationalities: state.data.nationalities,
		filteredUsersToShow: state.data.filteredUsersToShow,
		darkTheme: state.app.darkTheme
	}
};

const mapDispatchToProps = dispatch => {
	return {
		fetchUsersByCriteria: users => dispatch(fetchUsersByCriteria(users))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredUsers)