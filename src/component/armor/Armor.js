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
        if (this.props.armor.length < 1) {
            this.props.getEquipment();
        }
        this.props.getUserArm();
        this.props.getUser();
        this.scrollToElmnt();
    }

    componentDidUpdate() {
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

        const filteredArmor = this.props.armor.filter(arm => {
            return arm.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const armor = filteredArmor.map((arm, index) => {
            return (
                <div
                    className='armorDiv'
                    ref={arm.name}
                    key={index}
                >
                    <Arm
                        name={arm.name}
                        url={arm.url}
                    />
                </div>
            );
        });

        const filteredUserArmor = this.props.userArmor.filter(arm => {
            return arm.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const userArmor = filteredUserArmor.map((arm, index) => {
            return (
                <div
                    className='armorDiv'
                    ref={arm.name}
                    key={index}
                >
                    <UserArm
                        item={arm}
                    />
                </div>
            );
        });

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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        armor: state.armor,
        userArmor: state.userArmor,
        user: state.user,
        search: state.search,
        displayDashItem: state.displayDashItem,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEquipment: () => dispatch(actions.getEquipment()),
        getUserArm: () => dispatch(actions.getUserArm()),
        getUser: () => dispatch(actions.getUser()),
        createArm: (payload) => dispatch(actions.createArm(payload)),
        addDisplayDashItem: (payload) => dispatch(actions.addDisplayDashItem(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Armor);