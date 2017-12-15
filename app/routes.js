import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import ShelfA from './ShelfA/ShelfA';
import ShelfB from './ShelfB/ShelfB';
import ShelfC from './ShelfC/ShelfC';
import ShelfD from './ShelfD/ShelfD';

export default (
    // 42G
    <Switch>
        {/* 42F */}
        <Route exact path="/ShelfA" component={ShelfA} /> {/*42H*/}
        <Route path="/ShelfB" component={ShelfB} /> 
        <Route path="/ShelfC" component={ShelfC} />
        <Route path="/ShelfD" component={ShelfD} />
    </Switch>
)