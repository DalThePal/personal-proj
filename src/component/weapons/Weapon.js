import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class Weapon extends Component {
    constructor() {
        super();
        this.state = {
            weapon: {},
            cost: {},
            damage: {},
            damageType: {},
            properties: []
        }
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => this.setState({
            weapon: res.data,
            cost: res.data.cost,
            damage: res.data.damage,
            damageType: res.data.damage.damage_type,
            properties: res.data.properties
        }));
    }

    render() {
        const { weapon, cost, damage, damageType } = this.state;
        const properties = this.state.properties.map(prop => {
            return (
                prop.name
            )
        })
        return (
            <div className='Weapon'>
                <h1>{this.props.name}</h1>
                <h2>({weapon.category_range})</h2>
                <p>cost: {cost.quantity} {cost.unit}</p>
                <p>damage: {damage.dice_count}d{damage.dice_value} {damageType.name}</p>
                <p>weight: {weapon.weight} lb.</p>
                <p className='properties'>properties: {properties}</p>
                <div className='addButton'>
                    <button onClick={() => this.props.addToDash({
                        name: this.state.weapon.name,
                        url: this.state.weapon.url,
                        type: 'weapon'
                    })}
                    >ADD
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload))
    }
}

export default connect(null, mapDispatchToProps)(Weapon);