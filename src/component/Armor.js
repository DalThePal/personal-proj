import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDash, getEquipment, displayDashItem } from '../ducks/reducer';
import Arm from './Arm';
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
                        addToDash={this.props.addToDash}

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

export default connect(mapStateToProps, { addToDash, getEquipment, displayDashItem })(Armor);