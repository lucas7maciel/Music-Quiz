import { Component } from "react"
import "./flippable"

class TestCard extends Component {
  constructor() {
    super()
    this.state = {flip: false}
  }

  render() {
    return (
    <div className={`card ${this.state.flip ? 'flip' : ''}`} onClick={() => this.state.flip = true}>
      <div className="front">
        <h1>Lado da frente</h1>
      </div>
      <div className="back">
        <h1>Lado de trás</h1>
      </div>
    </div>
    )
  }
}

export default TestCard
