import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class Spell extends Component {
    constructor() {
        super();
        this.state = {
            spell: {},
            loading: true
        }
    }

    componentDidMount() {
        this.getData(this.props.url);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ loading: true });
            this.getData(this.props.url);
        }
    }

    getData(url) {
        axios.get(url).then(res => {
            setTimeout(() => {
                this.setState({
                    spell: res.data
                }, this.setState({ loading: false }))
            }, 2000
            )
        });
    }

    render() {
        const { spell } = this.state;

        if (this.state.loading) {
            return (
                <div className='Spell' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactLoading type={'bars'} color={'black'} />
                </div>
            );
        } else {
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
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload))
    }
}

export default connect(null, mapDispatchToProps)(Spell);