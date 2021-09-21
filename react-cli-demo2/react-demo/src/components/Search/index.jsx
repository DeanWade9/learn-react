import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    const {keyWordElement: {value}} = this
    console.log(value)
    axios.get(`/api1/search/users?q=${value}`).then(
      response => {
        // console.log('success', response.data)
        this.props.saveUsers(response.data.items)
      },
      error => console.log('error', error)
    )
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
