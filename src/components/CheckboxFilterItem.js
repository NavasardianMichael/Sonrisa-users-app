import React from 'react';

function CheckboxFilterItem(props) {
	return (
			<div className="form-check-inline my-1 mr-0 w-25">
			    <input className="form-check-input" type="checkbox" id={`nat-${props.nationality}`} value={props.nationality} />
			    <label className="form-check-label" htmlFor={`nat-${props.nationality}`}>
			    {props.nationality}
			   </label>
			</div>		
	)
};

export default CheckboxFilterItem