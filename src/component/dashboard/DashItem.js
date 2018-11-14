import React from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {actions} from '../../duck';

const DashItem = (props) => {

        const { item } = props;
        return (
            <Motion
                defaultStyle={{ width: 0 }}
                style={{ width: spring(100) }}
            >
                {({ width }) =>

                    <div className='DashItem' style={{
                        "width": `${width}%`
                    }}>
                        <Link
                            className='ItemBut'
                            to='/favorites'
                        >
                            <button
                                className='ItemBut'
                                onClick={() => props.displayDashItem({...item, type: props.dashType})}
                            >{item.name}
                            </button>
                        </Link>
                        <button
                            className='DelBut'
                            onClick={() => { props.removeFromDash(item.id) }}
                        >del
                        </button>
                    </div>
                }
            </Motion>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayDashItem: (payload) => dispatch(actions.displayDashItem(payload)),
        removeFromDash: (payload) => dispatch(actions.remFromDash(payload))
    }
}


export default connect(null, mapDispatchToProps)(DashItem);