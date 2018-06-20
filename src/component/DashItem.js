import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';

class DashItem extends Component {


    render() {

        const { item } = this.props;
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
                                onClick={() => this.props.displayDashItem(item)}
                            >{item.name}
                            </button>
                        </Link>
                        <button
                            className='DelBut'
                            onClick={() => { this.props.removeFromDash(item.id) }}
                        >del
                        </button>
                    </div>
                }
            </Motion>
        )

    }
}



export default DashItem;