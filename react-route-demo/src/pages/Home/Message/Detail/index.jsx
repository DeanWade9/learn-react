import React, { Component } from 'react'
import qs from 'qs'

const data = [
  { id: '1', content: 'aaa', title: 'title1' },
  { id: '2', content: 'bbb', title: 'title2' },
  { id: '3', content: 'ccc', title: 'title3' }
]

export default class Detail extends Component {
  render() {
    // console.log('Detail props:', this.props)
    // 接收params路由参数 使用this.props.match.params
    // const {id, title} = this.props.match.params

    // 接收search路由参数 使用this.props.location.search是?开头的urlencoded字符串 需要用内置的querystring库解析
    const {id, title} = qs.parse(this.props.location.search.slice(1))
    const content = data.filter(e => e.id === id)[0].content
    // console.log(content)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT:{content}</li>
      </ul>
    )
  }
}
