import React from 'react';
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
	nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
	};
	
	createFish = (event) => {
		event.preventDefault();
    const fish = {
      name: this.nameRef.value,
      price: parseFloat(this.priceRef.value),
      status: this.statusRef.value,
      desc: this.descRef.value,
      image: this.imageRef.value
		};
		this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
	}
	
	render() {
		return (
			<form className="fish-edit" ref={this.fishForm} 
				onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" 
					placeholder="Fish Name"/>
				<input name="price" ref={this.priceRef} type="text" 
					placeholder="Fish Price"/>
				<select name="status" ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold out!</option>
				</select>
				<textarea name="desc" ref={this.descRef} placeholder="Fish Desc"/>
				<input 
					name="image" ref={this.imageRef} type="text" 
					placeholder="Fish Image"/>
				<button type="submit">+ Add item</button>
			</form>
		)
	}
}

export default AddFishForm;
