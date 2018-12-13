import React, { Component } from 'react';
import ReactLoading from 'react-loading';
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
            description: null,
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
        this.setState({edit: false});
        this.props.editUserEquip({
            name: this.state.name || this.props.item.name,
            cost: this.state.cost || this.props.item.cost,
            weight: this.state.weight || this.props.item.weight,
            description: this.state.description || this.props.item.description,
            id: this.props.item.id
        });
    }

    foundInDash(name) {
        let check = false;
        this.props.dash.map(dashItem => {
            if (name === dashItem.name && dashItem.type === 'userEquip') {
                check = true
            }
        });
        return check;
    }

    render() {
        const {item, key} = this.props;

        if (this.state.loading) {
            return (
                <div className='Equip' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ReactLoading type={'bars'} color={'black'} />
                </div>
            );
        } else if (!this.state.edit) {
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
            );
        } else if(this.state.edit) {
            return (
                <div className='Equip'>
                    <input className='h1' placeholder={item.name} onChange={e => this.handleChange({name: e.target.value})}/>
                    <input className='p' placeholder={item.cost} onChange={e => this.handleChange({cost: e.target.value})}/>
                    <input className='p' placeholder={item.weight} onChange={e => this.handleChange({weight: e.target.value})}/>
                    <textarea className='p' placeholder={item.description} onChange={e => this.handleChange({description: e.target.value})}/>
                    <div className='addButton'>
                        <button onClick={() => {
                            this.props.remUserEquip(item.name);
                            if (this.foundInDash(item.name)) {
                                this.props.remFromDash({name: item.name, dashType: 'userEquip'});
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
        editUserEquip: (payload) => dispatch(actions.editUserEquip(payload)),
        remUserEquip: (payload) => dispatch(actions.remUserEquip(payload)),
        remFromDash: (payload) => dispatch(actions.remFromDash(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEquip);