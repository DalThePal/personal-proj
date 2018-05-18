import React, { Component } from 'react';
import axios from 'axios';

class Spell extends Component {

    state = {
        spell: {}
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => this.setState({
            spell: res.data
        }));
    }

    render() {
        const { spell } = this.state;
        return (
            <div className='Spell'>
                <h1>{this.props.name}</h1>
                <p>casting time: {spell.casting_time}</p>
                <p>range: {spell.range}</p>
                <p>components: {spell.components} {spell.material ? `(${spell.material})` : ''}</p>
                <p>duration: {spell.duration}</p>
                <p>{this.state.spell.desc}</p>
                <p>{spell.higher_level ? `at higher levels: ${spell.higher_level}` : ''}</p>
                <div className='addButton'>
                    <button onClick={() => this.props.addToDash({
                        name: this.state.spell.name,
                        url: this.state.spell.url,
                        type: 'spell'
                    })}
                    >ADD
                    </button>
                </div>
            </div>
        )
    }
}



export default Spell;