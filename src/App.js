import React from 'react';
import routes from './routes'
import {connect} from 'react-redux'
import './App.css';

function App(props) {
  console.log('look at me!', props);
  return (
    <div className="App">
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App);
