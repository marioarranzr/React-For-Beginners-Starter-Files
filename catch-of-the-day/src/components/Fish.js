import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
	render() {
    const { details, index } = this.props;
    // const details = this.props.details;
    const isAvailable = details.status === 'available'
    const addButtonText = isAvailable ? 'Add to order' : 'Sold out!'
		return (
			<li className="menu-fish">
        <img src={details.image} alt={details.name}/>
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button 
          onClick={() => {this.props.addToOrder(index)}}
          disabled={!isAvailable}>{addButtonText}</button>
      </li>
		)
	}
}

export default Fish;
