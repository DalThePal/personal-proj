import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../duck';

const DashItem = (props) => {

    const { item } = props;
    return (
        <div className='DashItem'>
            <Link
                className='ItemBut'
                to={props.link}
            >
                <button
                    className='ItemBut'
                    onClick={() => props.addDisplayDashItem(item.name)}
                >{item.name}
                </button>
            </Link>
            <button
                className='DelBut'
                onClick={() => { props.remFromDash({name: item.name, dashType: props.dashType}) }}
            >del
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDisplayDashItem: (payload) => dispatch(actions.addDisplayDashItem(payload)),
        remFromDash: (payload) => dispatch(actions.remFromDash(payload))
    }
}


export default connect(null, mapDispatchToProps)(DashItem);