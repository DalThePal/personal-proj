import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {


    render() {
        return (
            <div className='HomeScreen'>
                <div><img src='/DND.png' height='350' width='1000' /></div>
                
                <div className='Links'>
                    <div>
                        <div>
                            <Link
                                to='/Monsters'
                            ><a><img src='/monsters.png' height='40' width='40' />MONSTERS</a>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to='/Spells'
                            ><a><img src='/spells.png' height='40' width='40' />SPELLS</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link
                                to='/Armor'
                            ><a><img src='/armor.png' height='40' width='40' />ARMOR</a>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to='/Weapons'
                            ><a><img src='/weapons.png' height='40' width='40' />WEAPONS</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link
                                to='/Equipment'
                            ><a><img src='/equipment.png' height='40' width='40' />EQUIPMENT</a>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to='/Mounts'
                            ><a><img src='/mounts.png' height='40' width='40' />MOUNTS & VEHICLES</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}