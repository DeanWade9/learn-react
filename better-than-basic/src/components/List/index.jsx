import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.users.map(u => {
            return (
              <div className="card" key={u.id} >
                <a href={u.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={u.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{u.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
