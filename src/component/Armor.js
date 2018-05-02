import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToArmorDash, getEquipment, displayDashItem } from '../ducks/reducer';
import Arm from './Arm';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';

class Armor extends Component {

    componentDidMount() {
        this.props.getEquipment();
    }


    render() {
        const armor = this.props.armor.map((arm, index) => {
            return (
                <div
                    className='ArmDiv'
                    ref={arm.name}
                    key={index}>
                    <Arm

                        name={arm.name}
                        url={arm.url}
                        addToDash={this.props.addToArmorDash}

                    />
                </div>
            )
        })

        return (
            <div className='Window'>
                <Header/>
                <div className='Body'>
                    <div className='Armor'>
                        {armor}
                    </div>
                    <Dashboard />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        armor: state.armor,
        displayItem: state.displayItem,
        user: state.user
    }
}

export default connect(mapStateToProps, { addToArmorDash, getEquipment, displayDashItem })(Armor);