import { Component } from "react"
import axios from 'axios'
export default class App extends Component {
  getData = () => {
    axios.get('/index.html').then(res => {
      console.log('res:', res)
    }, err =>{
      console.log('err:', err)
    })
  }
  render() {
    return (
      <div onClick={this.getData}>Click to get data</div>
    )
  }
}