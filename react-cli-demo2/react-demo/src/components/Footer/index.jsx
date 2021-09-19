import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
          <span>Done: 0 / All: 3</span>
        </label>
        <button className="btn btn-danger">Delete Completed Missions</button>
      </div>
    )
  }
}