import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  state = {
    userData: []
  }
  search = () => {
    console.log(this.inputEle.value)
    const {inputEle: {value}} = this
    // axios.get(`https://api.github.com/search/users?q=${value}`).then(res => {
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      res => {
        console.log(res)
        if (res.status == 200) {
          this.props.saveUsers(res.data.items)
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.inputEle = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
