import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard.js
                <Link to='/profile'>Go to Profile</Link>
            </div>
        )
    }
}