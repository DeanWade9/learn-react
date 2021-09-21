import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {isLoading, isFirst, users, err} = this.props
    return (
      <div>
        {
          isFirst ? <h2>Input keywords and search</h2> :
          isLoading ? <h2>Loading data...</h2> : 
          err ? <h2 style={{color: 'red'}}>{err.message}</h2> :
          users.map(user => {
            return (
              <div key={user.id} className="card">
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img alt="" src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
