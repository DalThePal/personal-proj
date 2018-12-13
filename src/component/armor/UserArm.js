import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { actions } from '../../duck';

class UserArm extends Component {
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
            weight: null,
            loading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSave() {
        this.setState({ edit: false });
        this.props.editUserArm({
            name: this.state.name || this.props.item.name,
            category: this.state.category || this.props.item.category,
            cost: this.state.cost || this.props.item.cost,
            armorClass: this.state.armorClass || this.props.item.armorClass,
            strength: this.state.strength || this.props.item.strength,
            stealth: this.state.stealth || this.props.item.stealth,
            weight: this.state.weight || this.props.item.weight,
            id: this.props.item.id
        });
    }

    foundInDash(name) {
        let check = false;
        this.props.dash.map(dashItem => {
            if (name === dashItem.name && dashItem.type === 'userArm') {
                check = true
            }
        });
        return check;
    }

    render() {
        const { item, key } = this.props;

        if (this.state.loading) {
            return (
                <div className='userArm' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactLoading type={'bars'} color={'black'} />
                </div>
            );
        } else if (this.state.edit === false) {
            return (
                <div className='userArm'>
                    <h1>{item.name}</h1>
                    <h2>{item.category}</h2>
                    <p>COST: {item.cost}</p>
                    <p>ARMOR CLASS (AC): {item.armorclass}</p>
                    <p>STRENGTH: {item.strength}</p>
                    <p>STEALTH: {item.stealth}</p>
                    <p>Weight: {item.weight}</p>
                    <div className='addButton'>
                        <button onClick={() => this.props.addToDash({
                            name: item.name,
                            url: null,
                            type: 'userArm',
                            index: key
                        })}>ADD</button>
                        <button onClick={() => this.setState({ edit: true })}>EDIT</button>
                    </div>
                </div>
            );
        } else if (this.state.edit === true) {
            return (
                <div className='userArm'>
                    <input className='h1' placeholder={item.name} onChange={e => this.handleChange({ name: e.target.value })} />
                    <input className='h2' placeholder={item.category} onChange={e => this.handleChange({ category: e.target.value })} />
                    <input className='p' placeholder={item.cost} onChange={e => this.handleChange({ cost: e.target.value })} />
                    <input className='p' placeholder={item.armorclass} onChange={e => this.handleChange({ armorClass: e.target.value })} />
                    <input className='p' placeholder={item.strength} onChange={e => this.handleChange({ strength: e.target.value })} />
                    <input className='p' placeholder={item.stealth} onChange={e => this.handleChange({ stealth: e.target.value })} />
                    <input className='p' placeholder={item.weight} onChange={e => this.handleChange({ weight: e.target.value })} />
                    <div className='addButton'>
                        <button onClick={() => {
                            this.props.remUserArm(item.name);
                            if (this.foundInDash(item.name)) {
                                this.props.remFromDash({ name: item.name, dashType: 'userArm' });
                            }
                        }}>DEL</button>
                        <button onClick={() => this.handleSave()}>SAVE</button>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dash: state.dash
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDash: (payload) => dispatch(actions.addToDash(payload)),
        editUserArm: (payload) => dispatch(actions.editUserArm(payload)),
        remUserArm: (payload) => dispatch(actions.remUserArm(payload)),
        remFromDash: (payload) => dispatch(actions.remFromDash(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserArm);