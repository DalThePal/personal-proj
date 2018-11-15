import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class Arm extends Component {
    constructor() {
        super();
        this.state = {
            arm: {},
            cost: {},
            armorClass: {},
            loading: true
        }
    }

    componentDidMount() {
        this.getData(this.props.url);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ loading: true })
            this.getData(this.props.url);
        }
    }

    getData(url) {
        axios.get(url).then(res => {
            setTimeout(() => {
                this.setState({
                    arm: res.data,
                    cost: res.data.cost,
                    armorClass: res.data.armor_class
                }, this.setState({ loading: false }))
            }, 2000
            )
        });
    }

    render() {
        const { arm, cost, armorClass } = this.state;

        if (this.state.loading) {
            return (
                <div className='Arm' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactLoading type={'bars'} color={'black'} />
                </div>
            );
        } else {
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
                        <button onClick={() => this.props.addToDash({
                            name: this.state.arm.name,
                            url: this.state.arm.url,
                            type: 'arm',
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
        addToDash: (payload) => dispatch(actions.addToDash(payload)),
    }
}

export default connect(null, mapDispatchToProps)(Arm);