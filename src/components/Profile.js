import React from 'react'
import axios from 'axios'

export default function Profile (props) {
    
    const logout = () => {
        axios.delete('/auth/logout').then( () => {
            props.history.push('/')
        })
    }
    
    return (
        <div>
            <p>This is the Profile component</p>
            <button onClick={ () => logout() }>Logout</button>   
        </div>
    )
}