import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';
import Equip from './Equip';
import UserEquip from './UserEquip';
import Dashboard from '../dashboard/Dashboard';
import Header from '../Header';

class Equipment extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            cost: '',
            weight: '',
            desc: ''
        }
    }

    componentDidMount() {
        this.props.getEquipment();
        this.props.getUserEquip();
    }

    render() {
        const equipment = this.props.equipment.map((equip, index) => {
            return (
                <Equip
                    key={index}
                    name={equip.name}
                    url={equip.url}
                />
            )
        })

        const userEquipment = this.props.userEquipment.map((equip, index) => {
            return (
                <UserEquip
                    key={index}
                    item={equip}
                />
            )
        })

        return (
            <div className='Window'>
                <Header title='equipment'/>
                <div className='Body'>
                    <div className='Equipment'>
                        {equipment}
                        {userEquipment}
                        <div className='createDiv'>
                            <input placeholder='name' onChange={(e) => this.setState({name: e.target.value})}/>
                            <input placeholder='cost' onChange={(e) => this.setState({cost: e.target.value})}/>
                            <input placeholder='weight' onChange={(e) => this.setState({weight: e.target.value})}/>
                            <textarea placeholder='description' onChange={(e) => this.setState({desc: e.target.value})}/>
                            <button onClick={() => this.props.createEquip(this.state)}>create</button>
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
        equipment: state.equipment,
        userEquipment: state.userEquipment,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEquip: (payload) => dispatch(actions.createEquip(payload)),
        getEquipment: () => dispatch(actions.getEquipment()),
        getUserEquip: () => dispatch(actions.getUserEquip())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);