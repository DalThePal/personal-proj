import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Monsters from './component/monsters/Monsters';
import Spells from './component/spells/Spells';
import Armor from './component/armor/Armor';
import Weapons from './component/weapons/Weapons';
import Equipment from './component/equipment/Equipment';
import Login from './component/Login';
import Mounts from './component/mounts/Mounts';

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
        </Switch>
    )
}