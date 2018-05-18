import React, { Component } from 'react';

export default class UserEquip extends Component {

    constructor() {
        super();

        this.state = {
            edit: false,
            name: '',
            cost: '',
            weight: '',
            description: ''
        }
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSave() {
        this.setState({edit: false});
        this.props.editUserEquip({
            name: this.state.name,
            cost: this.state.cost,
            weight: this.state.weight,
            description: this.state.description,
            id: this.props.item.id
        })
    }

    render() {

        const {item} = this.props;
        console.log(item)
        if (this.state.edit === false) {
            return (
                <div className='Equip'>
                    <h1>{item.name}</h1>
                    <p>COST: {item.cost}</p>
                    <p>Weight: {item.weight} lb.</p>
                    <p>{item.description}</p>
                    <div className='addButton'>
                        <button onClick={() => this.props.addToUserDash(item)}>ADD</button>
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