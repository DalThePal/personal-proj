import React, { Component } from 'react';
import axios from 'axios';

export default class Monster extends Component {

    state = {
        monster: {},
    }

    componentDidMount() {
        axios.get(this.props.url).then(res => {
            // let monster = Object.assign({}, res.data, {type:'monster'})
            
            
            let monster = {
                dashType: 'monster'
            }

            Object.assign(monster, res.data);

            this.setState({
                monster: monster,

            })
        });
    }



    render() {
        const { monster } = this.state;

        let specialAbilities = null;
        let actions = null;
        let legendaryActions = null;

        if (this.state.monster.actions) {

            actions = this.state.monster.actions.map((action) => {
                return (
                    <div className='ActAb'>
                        <h3>{action.name}.</h3>
                        <p>{action.desc}</p>
                    </div>
                )
            })
        }

        if (this.state.monster.legendary_actions) {

            legendaryActions = this.state.monster.legendary_actions.map((action) => {
                return (
                    <div className='ActAb'>
                        <h3>{action.name}.</h3>
                        <p>{action.desc}</p>
                    </div>
                )
            })
        }

        if (this.state.monster.special_abilities) {

            specialAbilities = this.state.monster.special_abilities.map((ability, index) => {
                return (
                    <div className='ActAb'>
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
                    <button onClick={() => this.props.addToDash(this.state.monster)}>ADD</button>
                </div>
            </div>
        )
    }
}

