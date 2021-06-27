import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

    const {users, isFirst, isLoading, err} = this.props

    return (
      // <div className="row">
      //   <div className="card">
      //     <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
      //       <img alt="avatar" src="https://z3.ax1x.com/2021/06/26/R8clzq.jpg" style={{width: '100px'}}/>
      //     </a>
      //     <p className="card-text">reactjs</p>
      //   </div>
      //   <div className="card">
      //     <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
      //       <img alt="avatar" src="https://z3.ax1x.com/2021/06/26/R8clzq.jpg" style={{width: '100px'}}/>
      //     </a>
      //     <p className="card-text">reactjs</p>
      //   </div>
      //   <div className="card">
      //     <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
      //       <img alt="avatar" src="https://z3.ax1x.com/2021/06/26/R8clzq.jpg" style={{width: '100px'}}/>
      //     </a>
      //     <p className="card-text">reactjs</p>
      //   </div>
      //   <div className="card">
      //     <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
      //       <img alt="avatar" src="https://z3.ax1x.com/2021/06/26/R8clzq.jpg" style={{width: '100px'}}/>
      //     </a>
      //     <p className="card-text">reactjs</p>
      //   </div>
      //   <div className="card">
      //     <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
      //       <img alt="avatar" src="https://z3.ax1x.com/2021/06/26/R8clzq.jpg" style={{width: '100px'}}/>
      //     </a>
      //     <p className="card-text">reactjs</p>
      //   </div>
      // </div>
      <div className="row">
        {
          isFirst ? <h2>Welcome!</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color: 'red'}}>{err}</h2> :
          this.props.users.map(userObj => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}