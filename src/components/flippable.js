import {Component, useState} from 'react'
import './flippable.css'

class Flippable extends Component {
  constructor() {
    super()
    this.state = {flipped: false}
  }

  render () {
    return (
      <div className={`flippable ${this.state.flipped ? "flip" : ""}`} onClick={() => this.setState({flipped: true})}>
        <div className='front'>
          {this.props.data}
        </div>
        <div className='back'>
          <h2>Playcounts</h2>
          <h3>{2}</h3>
        </div>
      </div>
    )
  }
}

export default Flippable