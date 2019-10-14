import React from 'react'
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css'
import Home from './views/home'
import UserDetail from './views/UserDetail'

const App = props => {
  return (
    <Router history={ props.history }>
      <div className='App'>
        <Route exact path='/' component={ Home }/>
        <Route path='/detail/:userId' component={ UserDetail }/>
      </div>
    </Router>
  )
}
App.propTypes = {
  history: PropTypes.any.isRequired
}
export default App
