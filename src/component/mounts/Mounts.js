import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';
import Mount from './Mount';
import UserMount from './UserMount';
import Dashboard from '../dashboard/Dashboard';
import Header from '../Header';

class Mounts extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            cost: '',
            speed: '',
            capacity: '',
            description: ''
        }
    }

    componentDidMount() {
        this.props.getEquipment();
        this.props.getUserMount();
    }

    render() {
        const mounts = this.props.mounts.map((mount, index) => {
            return (
                <Mount
                    key={index}
                    name={mount.name}
                    url={mount.url}
                />
            )
        })

        const userMounts = this.props.userMounts.map((mount, index) => {
            return (
                <UserMount
                    key={index}
                    item={mount}
                />
            )
        })

        return (
            <div className='Window'>
                <Header title='mounts'/>
                <div className='Body'>
                    <div className='Mounts'>
                        {mounts}
                        {userMounts}
                        <div className='createDiv'>
                            <input placeholder='name' onChange={(e) => this.setState({name: e.target.value})}/>
                            <input placeholder='cost' onChange={(e) => this.setState({cost: e.target.value})}/>
                            <input placeholder='speed' onChange={(e) => this.setState({speed: e.target.value})}/>
                            <input placeholder='capacity' onChange={(e) => this.setState({capacity: e.target.value})}/>
                            <textarea placeholder='description' onChange={(e) => this.setState({description: e.target.value})}/>
                            <button onClick={() => this.props.createMount(this.state)}>create</button>
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
        mounts: state.mounts,
        userMounts: state.userMounts,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMount: (payload) => dispatch(actions.createMount(payload)),
        getEquipment: () => dispatch(actions.getEquipment()),
        getUserMount: () => dispatch(actions.getUserMount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mounts);