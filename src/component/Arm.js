import React, { Component } from 'react';
import axios from 'axios';

export default class Arm extends Component {

    state = {
        arm: {},
        cost: {},
        armorClass: {}
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => this.setState({
            arm: res.data,
            cost: res.data.cost,
            armorClass: res.data.armor_class
        }))
    }

    render() {
        const { arm, cost, armorClass } = this.state;
        return (
            <div className='Arm'>
                <h1>{arm.name}</h1>
                <h2>({arm.armor_category})</h2>
                <p>COST: {cost.quantity} {cost.unit}</p>
                <p>ARMOR CLASS (AC): {armorClass.base} {armorClass.dex_bonus ? '+ Dex Modifier' : ''} {armorClass.max_bonus ? `(max ${armorClass.max_bonus})` : ''}</p>
                <p>STRENGTH: Str {arm.str_minimum}</p>
                <p>STEALTH: {arm.stealth_disadvantage ? 'Disadvantage' : '---'}</p>
                <p>WEIGHT: {arm.weight} lb.</p>
                <div className='addButton'>
                    <button onClick={() => this.props.addToDash(this.state.arm)}>ADD</button>
                </div>
            </div>
        )
    }
}