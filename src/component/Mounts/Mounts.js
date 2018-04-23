import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToMountDash, getEquipment, displayDashItem } from '../../ducks/reducer';
import Mount from '../Mount/Mount';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

class Mounts extends Component {

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
                <div className='Header'>
                    <div className='linkDiv'>
                        <Link
                            to='/Home'
                            onClick={() => { this.props.displayDashItem(''); }}
                        ><img src='/mounts.png' height='50' width='50' />mounts & vehicles
                    </Link>
                    </div>
                    <div className='logoDiv'>
                        <img src='DND.png' height='100%' />
                    </div>
                    <div className='ProfileDiv'>
                        <button><a href={'/logout'}>LOGOUT</a></button>
                    </div>
                </div>
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
        displayItem: state.displayItem
    }
}

export default connect(mapStateToProps, { addToMountDash, getEquipment, displayDashItem })(Mounts);