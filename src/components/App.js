import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Welcome from '../pages/Welcome'
import Account from '../pages/Account'






const App = () => {


    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/:username" component={Account}/>
            </Switch>

        </BrowserRouter>
    )
}
export default App
