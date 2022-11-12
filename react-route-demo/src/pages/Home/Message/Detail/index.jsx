import React, { Component } from 'react'

const data = [
  { id: '1', content: 'aaa', title: 'title1' },
  { id: '2', content: 'bbb', title: 'title2' },
  { id: '3', content: 'ccc', title: 'title3' }
]

export default class Detail extends Component {
  render() {
    console.log('Detail props:', this.props)
    const {id, title} = this.props.match.params
    const content = data.filter(e => e.id == id)[0].content
    console.log(content)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT:{content}</li>
      </ul>
    )
  }
}
