import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';

class DashItem extends Component {


    render() {

        const { item } = this.props;
        console.log( this.props.item )
        return (
            <Motion
                defaultStyle={{ width: 0 }}
                style={{ width: spring(100) }}>
                {({ width }) =>

                    <div className='DashItem' style={{
                        "width": `${width}%`
                    }}>
                        <Link
                            className='ItemBut'
                            to={this.props.link}
                            onClick={() => this.props.displayDashItem(item.name)}
                        ><button className='ItemBut'>{item.name}</button>
                        </Link>
                        <button
                            className='DelBut'
                            onClick={() => { this.props.removeFromDash(item.name); }}
                        >del
                        </button>
                    </div>
                }
            </Motion>
        )

    }
}



export default DashItem;