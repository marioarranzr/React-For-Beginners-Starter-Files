import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	goToStore = (event) => {
		event.preventDefault();
		const storeName = this.storeInput.value;
  	this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return(
			// Comment
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store name" 
					defaultValue={getFunName()} 
					ref={this.storeInput} />
				<button className="submit">Visit store →</button>
			</form>
		)
	}
}

export default StorePicker;
