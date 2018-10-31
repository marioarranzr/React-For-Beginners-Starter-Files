import React from 'react';

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes';
import base from '../base'

class App extends React.Component {
	state = {
    fishes: {},
    order: {}
	};

	componentWillMount() {
		const { params } = this.props.match;
		this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
	}

	componentWillUnmount() {
		base.RemoveBinding(this.ref);
	}
	
	addFish = (fish) => {
		// current list
		const fishes = { ...this.state.fishes };
		const timestamp = Date.now();
		// create new fish
		fishes[`fish${timestamp}`] = fish;
		// add it to the list
		this.setState({ fishes });
	}

	loadSampleFishes = () => {
    	this.setState({fishes: sampleFishes});
	}

	addToOrder = (key) => {
			// current order
			const order = { ...this.state.order };
			// if exists in the order add one more; else, there is only one
			order[key] = order[key] + 1 || 1
			// update the list
			this.setState({ order })
	}
	
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh food Market"/>
					<ul className="list-of-fishes">
					{
						Object.keys(
							this.state.fishes
						).map(
							key => <Fish key={key} details={this.state.fishes[key]}
							index={key} addToOrder={this.addToOrder}/>
						)
					}
					</ul>
				</div>
			<Order fishes={this.state.fishes} order={this.state.order} />
			<Inventory 
				addFish={this.addFish} 
				loadSampleFishes={this.loadSampleFishes}/>
			</div>
		)
	}
}

export default App;
