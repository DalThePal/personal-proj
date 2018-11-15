import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class Monster extends Component {
    constructor() {
        super();
        this.state = {
            monster: {},
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.getData();
        }
    }

    getData() {
        axios.get(this.props.url).then(res => this.setState({monster: res.data,}));
    }

    render() {
        const { monster } = this.state;

        let specialAbilities = null;
        let actions = null;
        let legendaryActions = null;

        if (this.state.monster.actions) {

            actions = this.state.monster.actions.map((action, index) => {
                return (
                    <div className='ActAb' key={index}>
                        <h3>{action.name}.</h3>
                        <p>{action.desc}</p>
                    </div>
                )
            })
        }

        if (this.state.monster.legendary_actions) {

            legendaryActions = this.state.monster.legendary_actions.map((action, index) => {
                return (
                    <div className='ActAb' key={index}>
                        <h3>{action.name}.</h3>
                        <p>{action.desc}</p>
                    </div>
                )
            })
        }

        if (this.state.monster.special_abilities) {

            specialAbilities = this.state.monster.special_abilities.map((ability, index) => {
                return (
                    <div className='ActAb' key={index}>
                        <h3>{ability.name}</h3>
                        <p>{ability.desc}</p>
                    </div>
                )
            })
        }

        return (
            <div className='Monster'>

                <h1>{this.props.name}</h1>
                <h2>{monster.size} {monster.type}, {monster.alignment}</h2>
                <p>Armor class: {monster.armor_class}</p>
                <p>Hit Points: {monster.hit_points} ({monster.hit_dice})</p>
                <p>Speed: {monster.speed} </p>
                <div className='Stats'>
                    <p>STR {monster.strength}</p>
                    <p>DEX {monster.dexterity}</p>
                    <p>CON {monster.constitution}</p>
                    <p>INT {monster.intelligence}</p>
                    <p>WIS {monster.wisdom}</p>
                    <p>CHA {monster.charisma}</p>
                </div>
                <p>Saving Throws:
                    {monster.strength_save ? `str +${monster.strength_save}` : ''}
                    {monster.dexterity_save ? `dex +${monster.dexterity_save}` : ''}
                    {monster.constitution_save ? `con +${monster.constitution_save}` : ''}
                    {monster.intelligence_save ? `int +${monster.intelligence_save}` : ''}
                    {monster.widsom_save ? `wis +${monster.widsom_save}` : ''}
                    {monster.charisma_save ? `cha +${monster.charisma_save}` : ''}
                </p>
                <p>senses: {monster.senses}</p>
                <p>languages: {monster.languages}</p>
                <p>challenge: {monster.challenge_rating}</p>
                <div>{specialAbilities}</div>
                <div>{actions}</div>
                <div>{legendaryActions}</div>

                <div className='addButton'>
                    <button onClick={() => this.props.addToDash({
                        name: this.state.monster.name,
                        url: this.state.monster.url,
                        type: 'monster'
                    })}
                    >ADD
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload))
    }
}

export default connect(null, mapDispatchToProps)(Monster)