import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToEquipDash, getEquipment, displayDashItem } from '../../ducks/reducer';
import Equip from '../Equip/Equip';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class Equipment extends Component {

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
        const equipment = this.props.equipment.map((equip, index) => {
            return (
                <div
                    className='EquipDiv'
                    ref={equip.name}
                    key={index}>
                    <Equip

                        name={equip.name}
                        url={equip.url}
                        addToDash={this.props.addToEquipDash}

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
                        ><img src='/equipment.png' height='50' width='50' />equipment
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

export default connect(mapStateToProps, { addToEquipDash, getEquipment, displayDashItem })(Equipment);