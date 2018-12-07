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
                to='/favorites'
            >
                <button
                    className='ItemBut'
                    onClick={() => props.displayDashItem({ ...item, type: props.dashType })}
                >{item.name}
                </button>
            </Link>
            <button
                className='DelBut'
                onClick={() => { props.removeFromDash(item.id) }}
            >del
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayDashItem: (payload) => dispatch(actions.displayDashItem(payload)),
        removeFromDash: (payload) => dispatch(actions.remFromDash(payload))
    }
}


export default connect(null, mapDispatchToProps)(DashItem);