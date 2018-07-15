import React, { Component } from 'react';
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
        }
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSave() {
        this.setState({edit: false});
        this.props.editUserMount({
            name: this.state.name || this.props.item.name,
            cost: this.state.cost || this.props.item.cost,
            speed: this.state.weight || this.props.item.weight,
            capacity: this.state.capacity || this.props.item.capacity,
            description: this.state.description || this.props.item.description,
            id: this.props.item.id
        })
    }

    render() {
        const {item, key} = this.props;
        if (this.state.edit === false) {
            return (
                <div className='Equip'>
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
                        <button onClick={() => this.setState({edit: true})}>EDIT</button>
                    </div>
                </div>
            )
        } else if(this.state.edit === true) {
            return (
                <div className='Equip'>
                    <input className='h1' placeholder={item.name} onChange={e => this.handleChange({name: e.target.value})}/>
                    <input className='p' placeholder={item.cost} onChange={e => this.handleChange({cost: e.target.value})}/>
                    <input className='p' placeholder={item.speed} onChange={e => this.handleChange({weight: e.target.value})}/>
                    <input className='p' placeholder={item.capacity} onChange={e => this.handleChange({capacity: e.target.value})}/>
                    <textarea className='p' placeholder={item.description} onChange={e => this.handleChange({description: e.target.value})}/>
                    <div className='addButton'>
                        <button onClick={() => this.props.remUserMount(item.name)}>DEL</button>
                        <button onClick={() => this.handleSave()}>SAVE</button>
                    </div>
                </div>
            )
        }
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload)),
        editUserMount: (payload) => dispatch(actions.editUserMount(payload)),
        remUserMount: (payload) => dispatch(actions.remUserMount(payload))
    }
}

export default connect(null, mapDipatchToProps)(UserMount);