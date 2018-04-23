import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Monsters from './component/Monsters/Monsters';
import Spells from './component/Spells/Spells';
import Armor from './component/Armor/Armor';
import Weapons from './component/Weapons/Weapons';
import Equipment from './component/Equipment/Equipment';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Mounts from './component/Mounts/Mounts';
import Favorites from './component/Favorites/Favorites';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Home' component={Home} />
            <Route path='/Monsters' component={Monsters} />
            <Route path='/Spells' component={Spells} />
            <Route path='/Weapons' component={Weapons} />
            <Route path='/Armor' component={Armor} />
            <Route path='/Equipment' component={Equipment} />
            <Route path='/Mounts' component={Mounts} />
            <Route path='/Favorites' component={Favorites} />
        </Switch>
    )
}