import React, { Component } from 'react';
import ReactLoading from 'react-loading';
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
            loading: true
        }
    }

    componentDidMount() {
        this.getData(this.props.url);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ loading: true });
            this.getData(this.props.url);
        }
    }

    getData(url) {
        axios.get(url).then(res => {
            setTimeout(() => {
                this.setState({
                    mount: res.data,
                    cost: res.data.cost,
                    speed: res.data.speed
                }, this.setState({ loading: false }))
            }, 2000
            )
        });
    }

    render() {
        const { mount, cost, speed } = this.state;

        if (this.state.loading) {
            return (
                <div className='Mount' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactLoading type={'bars'} color={'black'} />
                </div>
            );
        } else {
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
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload))
    }
}

export default connect(null, mapDispatchToProps)(Mount);