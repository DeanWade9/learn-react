import React from 'react'
import welcome from './index.module.css'

export default class Welcome extends React.Component {
  render() {
    return (
      <h2 className={welcome.title}>Welcome</h2>
    )
  }
}