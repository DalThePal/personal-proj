import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class UserMount extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            name: null,
            cost: null,
            speed: null,
            capacity: null,
            description: null,
            loading: true
        }
    }

    componentDidMount() {
        console.log(this.props.item)
        this.getData();
    }

    getData() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSave() {
        this.setState({ edit: false });
        this.props.editUserMount({
            name: this.state.name || this.props.item.name,
            cost: this.state.cost || this.props.item.cost,
            speed: this.state.weight || this.props.item.weight,
            capacity: this.state.capacity || this.props.item.capacity,
            description: this.state.description || this.props.item.description,
            id: this.props.item.id
        })
    }

    foundInDash(name) {
        let check = false;
        this.props.dash.map(dashItem => {
            if (name === dashItem.name && dashItem.type === 'userMount') {
                check = true
            }
        });
        return check;
    }

    render() {
        const { item, key } = this.props;

        if (this.state.loading) {
            return (
                <div className='Mount' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactLoading type={'bars'} color={'black'} />
                </div>
            );
        } else if (!this.state.edit) {
            return (
                <div className='userMount'>
                    <h1>{item.name}</h1>
                    <p>COST: {item.cost}</p>
                    <p>SPEED: {item.speed}</p>
                    <p>CAPACITY: {item.capacity}</p>
                    <p>{item.description}</p>
                    <div className='addButton'>
                        <button onClick={() => this.props.addToDash({
                            name: item.name,
                            url: null,
                            type: 'userMount',
                            index: key
                        })}>ADD</button>
                        <button onClick={() => this.setState({ edit: true })}>EDIT</button>
                    </div>
                </div>
            );
        } else if (this.state.edit) {
            return (
                <div className='userMount'>
                    <input className='h1' placeholder={item.name} onChange={e => this.handleChange({ name: e.target.value })} />
                    <input className='p' placeholder={item.cost} onChange={e => this.handleChange({ cost: e.target.value })} />
                    <input className='p' placeholder={item.speed} onChange={e => this.handleChange({ weight: e.target.value })} />
                    <input className='p' placeholder={item.capacity} onChange={e => this.handleChange({ capacity: e.target.value })} />
                    <textarea className='p' placeholder={item.description} onChange={e => this.handleChange({ description: e.target.value })} />
                    <div className='addButton'>
                        <button onClick={() => {
                            this.props.remUserMount(item.name);
                            if (this.foundInDash(item.name)) {
                                this.props.remFromDash({ name: item.name, dashType: 'userMount' });
                            }
                        }}>DEL</button>
                        <button onClick={() => this.handleSave()}>SAVE</button>
                    </div>
                </div >
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dash: state.dash
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload)),
        editUserMount: (payload) => dispatch(actions.editUserMount(payload)),
        remUserMount: (payload) => dispatch(actions.remUserMount(payload)),
        remFromDash: (payload) => dispatch(actions.remFromDash(payload))
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(UserMount);