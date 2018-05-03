import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Monsters from './component/Monsters';
import Spells from './component/Spells';
import Armor from './component/Armor';
import Weapons from './component/Weapons';
import Equipment from './component/Equipment';
import Login from './component/Login';
import Mounts from './component/Mounts';
import Favorites from './component/Favorites';

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
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