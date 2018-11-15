import React, { Component } from 'react';
import axios from 'axios';
import { actions } from '../../duck';
import { connect } from 'react-redux';

class Mount extends Component {
    constructor() {
        super();
        this.state = {
            mount: {},
            cost: {},
            speed: {},
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.getData();
        }
    }

    getData() {
        axios.get(this.props.url).then(res => this.setState({
            mount: res.data,
            cost: res.data.cost,
            speed: res.data.speed,
        }));
    }

    render() {
        const { mount, cost, speed } = this.state;
        return (
            <div className='Mount'>
                <h1>{this.props.name}</h1>
                <h2>({mount.vehicle_category})</h2>
                <p>cost: {cost.quantity} {cost.unit}</p>
                <p>{speed ? `speed: ${speed.quantity} ${speed.unit}` : ''}</p>
                <p>{mount.capacity ? `capacity: ${mount.capacity}` : ''}</p>
                <p>{mount.weight ? `weight: ${mount.weight} lb.` : ''}</p>
                <p>{mount.desc ? mount.desc : ''}</p>
                <div className='addButton'>
                    <button onClick={() => this.props.addToDash({
                        name: this.state.mount.name,
                        url: this.state.mount.url,
                        type: 'mount',
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
        addToDash: (payload) => dispatch(actions.addToDash(payload))
    }
}

export default connect(null, mapDispatchToProps)(Mount);