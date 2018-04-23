import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToArmorDash, getEquipment, displayDashItem } from '../../ducks/reducer';
import Arm from '../Arm/Arm';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class Armor extends Component {

    componentDidMount() {
        this.props.getEquipment();
    }

    componentDidUpdate() {
        if (this.props.displayItem) {
            console.log(this.props.displayItem)
            var elmnt = this.refs[this.props.displayItem];
            console.log(elmnt)
            elmnt.scrollIntoView();
        }
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
                <div className='Header'>
                    <div className='linkDiv'>
                        <Link
                            to='/Home'
                            onClick={() => { this.props.displayDashItem(''); }}
                        ><img src='/armor.png' height='50' width='50' />ARMOR
                    </Link>
                    </div>
                    <div className='logoDiv'>
                        <img src='DND.png' height='100%' />
                    </div>
                    <div className='ProfileDiv'>
                        <img src={this.props.user.picture} height='50' width='50'/>
                        <button><a href={'/logout'}>LOGOUT</a></button>
                    </div>
                </div>
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