import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDash, getEquipment, displayDashItem } from '../ducks/reducer';
import Equip from './Equip';
import Dashboard from './Dashboard';
import Header from './Header';

class Equipment extends Component {

    componentDidMount() {
        this.props.getEquipment();
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

        return (
            <div className='Window'>
                <Header />
                <div className='Body'>
                    <div className='Equipment'>
                        {equipment}
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
        displayItem: state.displayItem,
        user: state.user
    }
}

export default connect(mapStateToProps, { addToDash, getEquipment, displayDashItem })(Equipment);