import React, { Component } from 'react';
import axios from 'axios';

export default class Monster extends Component {

    state = {
        monster: {}
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => this.setState({
            monster: res.data
        }));
    }



    render() {

        return (
            <div className='Monster'>
                <div className='Title'>
                    <h1>{this.props.name}</h1>
                    <button onClick={() => this.props.addToDash(this.state.monster)}>ADD</button>
                </div>
                <p>Size: {this.state.monster.size}</p>
                <p>Type: {this.state.monster.type}</p>
                <p>Alignment: {this.state.monster.alignment}</p>

            </div>
        )
    }
}

