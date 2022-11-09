import { Component } from "react"
import axios from 'axios'
export default class App extends Component {
  getData = () => {
    axios.get('api1/students').then(res => {
      console.log('res:', res)
    }, err =>{
      console.log('err:', err)
    })
  }

  getData2 = () => {
    axios.get('/api2/cars').then(res => {
      console.log('res:', res)
    }, err =>{
      console.log('err:', err)
    })
  }

  render() {
    return (
      <div>
        <div onClick={this.getData}>Click to get data from server1</div>
        <div onClick={this.getData2}>Click to get data from server2</div>
      </div>
    )
  }
}