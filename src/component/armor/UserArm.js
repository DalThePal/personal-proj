import React, { Component } from 'react';

export default class UserArm extends Component {

    constructor() {
        super();

        this.state = {
            edit: false,
            name: null,
            category: null,
            cost: null,
            armorClass: null,
            strength: null,
            stealth: null,
            weight: null
        }
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSave() {
        this.setState({edit: false});
        this.props.editUserArm({
            name: this.state.name || this.props.item.name,
            category: this.state.category || this.props.item.category,
            cost: this.state.cost || this.props.item.cost,
            armorClass: this.state.armorClass || this.props.item.armorClass,
            strength: this.state.strength || this.props.item.strength,
            stealth: this.state.stealth || this.props.item.stealth,
            weight: this.state.weight || this.props.item.weight,
            id: this.props.item.id
        })
    }

    render() {

        const {item} = this.props;
        console.log(item)
        if (this.state.edit === false) {
            return (
                <div className='Arm'>
                    <h1>{item.name}</h1>
                    <h2>{item.category}</h2>
                    <p>COST: {item.cost}</p>
                    <p>ARMOR CLASS (AC): {item.armorclass}</p>
                    <p>STRENGTH: {item.strength}</p>
                    <p>STEALTH: {item.stealth}</p>
                    <p>Weight: {item.weight}</p>
                    <div className='addButton'>
                        <button onClick={() => this.props.addToUserDash(item)}>ADD</button>
                        <button onClick={() => this.setState({edit: true})}>EDIT</button>
                    </div>
                </div>
            )
        } else if(this.state.edit === true) {
            return (
                <div className='Arm'>
                    <input className='h1' placeholder={item.name} onChange={e => this.handleChange({name: e.target.value})}/>
                    <input className='h2' placeholder={item.category} onChange={e => this.handleChange({category: e.target.value})}/>
                    <input className='p' placeholder={item.cost} onChange={e => this.handleChange({cost: e.target.value})}/>
                    <input className='p' placeholder={item.armorclass} onChange={e => this.handleChange({armorClass: e.target.value})}/>
                    <input className='p' placeholder={item.strength} onChange={e => this.handleChange({strength: e.target.value})}/>
                    <input className='p' placeholder={item.stealth} onChange={e => this.handleChange({stealth: e.target.value})}/>
                    <input className='p' placeholder={item.weight} onChange={e => this.handleChange({weight: e.target.value})}/>
                    <div className='addButton'>
                        <button onClick={() => this.props.remUserArm(item.name)}>DEL</button>
                        <button onClick={() => this.handleSave()}>SAVE</button>
                    </div>
                </div>
            )
        }
    }
}