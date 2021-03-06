import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class UserEquip extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            name: null,
            cost: null,
            weight: null,
            description: null
        }
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSave() {
        this.setState({edit: false});
        this.props.editUserEquip({
            name: this.state.name || this.props.item.name,
            cost: this.state.cost || this.props.item.cost,
            weight: this.state.weight || this.props.item.weight,
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
                    <p>Weight: {item.weight}</p>
                    <p>{item.description}</p>
                    <div className='addButton'>
                        <button onClick={() => this.props.addToDash({
                            name: item.name,
                            url: null,
                            type: 'userEquip',
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
                    <input className='p' placeholder={item.weight} onChange={e => this.handleChange({weight: e.target.value})}/>
                    <textarea className='p' placeholder={item.description} onChange={e => this.handleChange({description: e.target.value})}/>
                    <div className='addButton'>
                        <button onClick={() => this.props.remUserEquip(item.name)}>DEL</button>
                        <button onClick={() => this.handleSave()}>SAVE</button>
                    </div>
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload)),
        editUserEquip: (payload) => dispatch(actions.editUserEquip(payload)),
        remUserEquip: (payload) => dispatch(actions.remUserEquip(payload))
    }
}

export default connect(null, mapDispatchToProps)(UserEquip);