import React from 'react'
import Auli from './pages/places/auli'
import Almora from './pages/places/almora'
import { Route, Switch } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
const SecondaryApp = () => {
    return (
        <div>
        <Switch>
            <ScrollToTop />
            <Route path ="/Auli" component={Auli}></Route>
            <Route path ="/almora" component={Almora}></Route>
        </Switch> 
        </div>
    )
}

export default SecondaryApp
