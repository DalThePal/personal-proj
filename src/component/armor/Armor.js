import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';
import Arm from './Arm';
import UserArm from './UserArm';
import Dashboard from '../dashboard/Dashboard';
import Header from '../Header';

class Armor extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            category: '',
            cost: '',
            armorclass: '',
            strength: '',
            stealth: '',
            weight: ''
        }
    }

    componentDidMount() {
        this.props.getEquipment();
        this.props.getUserArm();
    }

    render() {
        const armor = this.props.armor.map((arm, index) => {
            return (

                <Arm
                    key={index}
                    name={arm.name}
                    url={arm.url}
                />

            )
        })

        const userArmor = this.props.userArmor.map((arm, index) => {
            return (

                <UserArm
                    key={index}
                    item={arm}
                />

            )
        })

        return (
            <div className='Window'>
                <Header title='armor' />
                <div className='Body'>
                    <div className='Armor'>
                        {armor}
                        {userArmor}
                        <div className='createDiv'>
                            <input placeholder='name' onChange={(e) => this.setState({ name: e.target.value })} />
                            <input placeholder='category' onChange={(e) => this.setState({ category: e.target.value })} />
                            <input placeholder='cost' onChange={(e) => this.setState({ cost: e.target.value })} />
                            <input placeholder='armorClass' onChange={(e) => this.setState({ armorClass: e.target.value })} />
                            <input placeholder='strength' onChange={(e) => this.setState({ strength: e.target.value })} />
                            <input placeholder='stealth' onChange={(e) => this.setState({ stealth: e.target.value })} />
                            <input placeholder='weight' onChange={(e) => this.setState({ weight: e.target.value })} />
                            <button onClick={() => this.props.createArm(this.state)}>create</button>
                        </div>
                    </div>
                    <Dashboard />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        armor: state.armor,
        userArmor: state.userArmor,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEquipment: () => dispatch(actions.getEquipment()),
        getUserArm: () => dispatch(actions.getUserArm()),
        createArm: (payload) => dispatch(actions.createArm(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Armor);