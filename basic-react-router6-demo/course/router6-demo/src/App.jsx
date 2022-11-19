import React, { lazy, Suspense } from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Loading from './pages/Loading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

export default function App() {
  function computedClassName({ isActive }) {
    return isActive ? 'list-group-item highlight' : 'list-group-item'
  }

  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={computedClassName} to="/about">
              About
            </NavLink>
            <NavLink className={computedClassName} to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/" element={<Navigate to="/about" />}></Route>
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
