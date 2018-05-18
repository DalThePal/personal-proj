import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDash, getEquipment, displayDashItem } from '../../ducks/reducer';
import Mount from './Mount';
import Dashboard from '../Dashboard';
import Header from '../Header';

class Mounts extends Component {

    componentDidMount() {

        this.props.getEquipment();
    }


    render() {
        const mounts = this.props.mounts.map((mount, index) => {
            return (
                <Mount
                    key={index}
                    name={mount.name}
                    url={mount.url}
                    addToDash={this.props.addToDash}

                />
            )
        })

        return (
            <div className='Window'>
                <Header title='mounts'/>
                <div className='Body'>
                    <div className='Mounts'>
                        {mounts}
                    </div>
                    <Dashboard />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mounts: state.mounts,
        displayItem: state.displayItem,
        user: state.user
    }
}

export default connect(mapStateToProps, { addToDash, getEquipment, displayDashItem })(Mounts);