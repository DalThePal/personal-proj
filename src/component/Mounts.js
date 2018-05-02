import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToMountDash, getEquipment, displayDashItem } from '../ducks/reducer';
import Mount from './Mount';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';

class Mounts extends Component {

    componentDidMount() {

        this.props.getEquipment();
    }


    render() {
        const mounts = this.props.mounts.map((mount, index) => {
            return (
                <div
                    className='MountDiv'
                    ref={mount.name}
                    key={index}>
                    <Mount

                        name={mount.name}
                        url={mount.url}
                        addToDash={this.props.addToMountDash}

                    />
                </div>
            )
        })

        return (
            <div className='Window'>
                <Header />
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

export default connect(mapStateToProps, { addToMountDash, getEquipment, displayDashItem })(Mounts);