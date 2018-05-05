import React, { Component } from 'react';

export default class UserEquip extends Component {



    render() {
        console.log(this.props.item)
        return (
            <div className='Equip'>
                <h1>{this.props.item.name}</h1>
                <p>COST: {this.props.item.cost}</p>
                <p>Weight: {this.props.item.weight} lb.</p>
                <p>{this.props.item.description}</p>
                <div className='addButton'>
                    <button onClick={() => this.props.addToUserDash(this.props.item)}>ADD</button>
                </div>
            </div>
        )
    }
}