import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    const {keyWordElement: {value}} = this
    this.props.updateAppState({
      isFirst: false,
      isLoading: true
    })
    axios.get(`/api1/search/users?q=${value}`).then(
      response => {
        this.props.updateAppState({
          isLoading: false,
          users: response.data.items
        })
      },
      error => this.props.updateAppState({isLoading: false, err: error})
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
