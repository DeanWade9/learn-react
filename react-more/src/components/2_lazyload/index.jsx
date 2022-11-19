import React, { Component, lazy, Suspense } from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

import './App.css'

export default class Demo2 extends Component {
  render() {
    return (
      <div className="demo">
        <div className="board">
          <div className="left">
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
          </div>
          <div className="right">
            <div className="show-area">
              <Suspense fallback={<Loading/>}>
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
