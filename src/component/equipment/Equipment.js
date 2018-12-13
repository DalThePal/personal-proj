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
        if (this.props.equipment.length < 1) {
            this.props.getEquipment();
        }
        this.props.getUserEquip();
        this.props.getUser();
        this.scrollToElmnt();
    }

    componentDidUpdate() {
        this.props.getUserEquip();
        this.scrollToElmnt();
    }

    scrollToElmnt() {
        if (this.props.displayDashItem) {
            var elmnt = this.refs[this.props.displayDashItem];
            elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.props.addDisplayDashItem(null);
        }
    }

    render() {

        const filteredEquipment = this.props.equipment.filter(equip => {
            return equip.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const equipment = filteredEquipment.map((equip, index) => {
            return (
                <div
                    className='equipDiv'
                    ref={equip.name}
                    key={index}
                >
                    <Equip
                        name={equip.name}
                        url={equip.url}
                    />
                </div>
            );
        });

        const filteredUserEquipment = this.props.userEquipment.filter(equip => {
            return equip.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const userEquipment = filteredUserEquipment.map((equip, index) => {
            return (
                <div
                    className='equipDiv'
                    ref={equip.name}
                    key={index}
                >
                    <UserEquip
                        item={equip}
                    />
                </div>
            );
        });

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
        user: state.user,
        search: state.search,
        displayDashItem: state.displayDashItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEquip: (payload) => dispatch(actions.createEquip(payload)),
        getEquipment: () => dispatch(actions.getEquipment()),
        getUserEquip: () => dispatch(actions.getUserEquip()),
        getUser: () => dispatch(actions.getUser()),
        addDisplayDashItem: (payload) => dispatch(actions.addDisplayDashItem(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);