import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	render() {
		return(
			// Comment
			<form className="store-selector">
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store name" 
						defaultValue={getFunName()}/>
				<button className="submit">Visit store →</button>
			</form>
		)
	}
}

export default StorePicker;
