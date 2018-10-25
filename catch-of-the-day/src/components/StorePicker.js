import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		console.log(this.storeInput.value)
	}

	render() {
		return(
			// Comment
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store name" 
						defaultValue={getFunName()} 
						ref={(input) => {this.storeInput = input}} />
				<button className="submit">Visit store →</button>
			</form>
		)
	}
}

export default StorePicker;
