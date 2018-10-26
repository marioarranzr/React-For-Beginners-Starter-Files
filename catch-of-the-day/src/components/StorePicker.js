import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	storeRef = React.createRef();

	goToStore = (event) => {
		event.preventDefault();
		const storeName = this.storeRef.value.value;
  	this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return(
			// Comment
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a store</h2>
				<input 
					type="text" required placeholder="Store name" 
					defaultValue={getFunName()} 
					ref={this.storeRef} />
				<button className="submit">Visit store →</button>
			</form>
		)
	}
}

export default StorePicker;
