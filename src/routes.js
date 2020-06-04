import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

export default (
    <Switch>
        <Route component={Landing}      exact path='/' />
        <Route component={Register}     path='/register' />
        <Route component={Dashboard}    path='/dashboard' />
        <Route component={Profile}      path='/profile' />
    </Switch>
)