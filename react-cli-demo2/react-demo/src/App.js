import React, { Component } from "react"

export default class App extends Component {
  render(){
    return(
      <div className="todo-container">
        <div className="todo-header">
          <input type="text" placeholder="input task name, press enter to confirm" />
        </div>

        <ul className="todo-main">
          <li>
            <label>
              <input type="checkbox" />
              <span>aaa</span>
            </label>
            <button className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
          </li>

          <li>
            <label>
              <input type="checkbox" />
              <span>bbb</span>
            </label>
            <button className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
          </li>

          <li>
            <label>
              <input type="checkbox" />
              <span>ccc</span>
            </label>
            <button className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
          </li>
        </ul>

        <div className="todo-footer">
          <label>
            <input type="checkbox" />
            <span>Done: 0 / All: 3</span>
          </label>
          <button className="btn btn-danger">Delete Completed Missions</button>
        </div>
      </div>
    )
  }
}