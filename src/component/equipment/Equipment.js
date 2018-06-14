import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../ducks/index';
import Equip from './Equip';
import UserEquip from './UserEquip';
import Dashboard from '../Dashboard';
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
                    addToDash={this.props.addToDash}
                />
            )
        })
        console.log(this.props.userEquipment);
        const userEquipment = this.props.userEquipment.map((equip, index) => {
            return (
                <UserEquip
                    key={index}
                    item={equip}
                    addToDash={this.props.addToUserDash}
                    remUserEquip={this.props.remUserEquip}
                    editUserEquip={this.props.editUserEquip}
                />
            )
        })
        console.log(this.state)
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

function mapStateToProps(state) {
    return {
        equipment: state.equipment,
        userEquipment: state.userEquipment,
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(Equipment);