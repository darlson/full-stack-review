import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from '../redux/reducer'

class Dashboard extends Component {
    
    componentDidMount(){
        this.props.getUser()
    }

    render() {
        console.log('from dashboard now: ', this.props)
        return (
            <div>
                Dashboard.js
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUser})(Dashboard)