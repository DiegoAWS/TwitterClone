import React from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


import Page4 from './Page4'
import Welcome from '../pages/Welcome'





const App = () => {


    return (
        <BrowserRouter>

            <Switch>
                <Route exact path="/" component={Welcome} />
                {/* <Route exact path="/page1" component={Page1} />
                    <Route exact path="/page2" component={Page2} />
                    <Route exact path="/page4" component={Page4} /> */}
            </Switch>

        </BrowserRouter>
    )
}
export default App
