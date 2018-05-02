import React, { Component } from 'react';
import axios from 'axios';

export default class Equip extends Component {

    state = {
        equip: {},
        cost: {}
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => this.setState({
            equip: res.data,
            cost: res.data.cost
        }))
    }


    render() {
        const { equip, cost } = this.state;
        return (
            <div className='Equip'>
                <h1>{this.props.name}</h1>
                <h2>{equip.gear_category ? `(${equip.gear_category})` : ''}</h2>
                <p>COST: {cost.quantity} {cost.unit}</p>
                <p>Weight: {equip.weight} lb.</p>
                <p>{equip.desc}</p>
                <div className='addButton'>
                    <button onClick={() => this.props.addToDash(this.state.equip)}>ADD</button>
                </div>
            </div>
        )
    }
}