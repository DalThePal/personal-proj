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
        if (this.props.mounts.length < 1) {
            this.props.getEquipment();
        }
        this.props.getUserMount();
        this.props.getUser();
        this.scrollToElmnt();
    }

    componentDidUpdate() {
        this.props.getUserMount();
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

        const filteredMounts = this.props.mounts.filter(mount => {
            return mount.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const mounts = filteredMounts.map((mount, index) => {
            return (
                <div
                    className='mountDiv'
                    ref={mount.name}
                    key={index}
                >
                    <Mount
                        name={mount.name}
                        url={mount.url}
                    />
                </div>
            );
        });

        const filteredUserMounts = this.props.userMounts.filter(mount => {
            return mount.name.toUpperCase().includes(this.props.search.toUpperCase());
        });

        const userMounts = filteredUserMounts.map((mount, index) => {
            return (
                <div
                    className='mountDiv'
                    ref={mount.name}
                    key={index}
                >
                    <UserMount
                        item={mount}
                    />
                </div>
            );
        });

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
        user: state.user,
        search: state.search,
        displayDashItem: state.displayDashItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMount: (payload) => dispatch(actions.createMount(payload)),
        getEquipment: () => dispatch(actions.getEquipment()),
        getUserMount: () => dispatch(actions.getUserMount()),
        getUser: () => dispatch(actions.getUser()),
        addDisplayDashItem: (payload) => dispatch(actions.addDisplayDashItem(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mounts);