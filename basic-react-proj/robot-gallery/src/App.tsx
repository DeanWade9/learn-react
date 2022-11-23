import React from 'react'
import logo from '../src/assets/images/logo.svg'
import style from './App.module.css'
import robots from './mockdata/robots.json'
import Robot from './components/Robot'

function App() {
  return (
    <div className={style.app}>
      <div className={style.appHeader}>
        <img src={logo} alt="logo" className={style.appLogo} />
        <h1>Robot Shpping Center Online</h1>
      </div>
      <div className={style.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  )
}

export default App
