import React, { PureComponent } from 'react'

export default class P extends PureComponent {
  state = {
    name: 'dean',
  }

  change = () => {
    this.setState({ name: 'mike' })
  }

  render() {
    console.log('comp p render')
    return (
      <div>
        <h3>CompP</h3>
        <button onClick={this.change}>Change</button>
        <C />
      </div>
    )
  }
}

class C extends PureComponent {
  render() {
    console.log('comp c render')
    return (
      <div>
        <h3>Comp C</h3>
      </div>
    )
  }
}
