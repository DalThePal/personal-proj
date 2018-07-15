import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class Equip extends Component {
    constructor() {
        super();
        this.state = {
            equip: {},
            cost: {}
        }
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
                <p>COST: {cost.quantity || equip.cost} {cost.unit ? cost.unit : ''}</p>
                <p>Weight: {equip.weight} lb.</p>
                <p>{equip.desc}</p>
                <div className='addButton'>
                    <button onClick={() => this.props.addToDash({
                        name: this.state.equip.name,
                        url: this.state.equip.url,
                        type: 'equip',
                        index: null
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
        addToDash: (payload) => dispatch(actions.addToDash(payload)),
    }
}

export default connect(null, mapDispatchToProps)(Equip);