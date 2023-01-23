import {Component, createRef} from 'react'
import './flippable.css'

class Flippable extends Component {
  constructor(props) {
    super(props)

    this.state = {flipped: false, playCounts: "...", bgColor: "gray", height: 0, width: 0, rightSize: false}

    this.frontDiv = createRef()
    this.backDiv = createRef()
  }

  componentDidMount() {
    const contentData = this.props.data.props.res
    const playCounts = contentData ? contentData["playcount"] : "..."

    const newBgColor = bgColors[this.props.data.props.status] || "gray"

    this.setState({playCounts: playCounts, bgColor: newBgColor})
  }

  componentDidUpdate() {
    if (!this.props.teste) {
      return
    }

    const current = this.props.teste.current
    
    if (current.state["imgLoaded"] && !this.state.rightSize) {
      this.updateSize()
    }

  }

  updateSize() {
    const frontRect = this.frontDiv.current.getBoundingClientRect()
    const backRect = this.backDiv.current.getBoundingClientRect()

    const newHeight = Math.max(frontRect.height, backRect.height)
    const newWidth = Math.max(frontRect.width, backRect.width)

    this.setState({height: newHeight, width: newWidth, rightSize: true})
  }

  render () {
    return (
      <>
      <div className={`flippable ${this.state.flipped ? "flip" : ""}`} onClick={() => this.setState({flipped: !this.state.flipped})}>
        <div className='front' ref={this.frontDiv}>
          {this.props.data}
        </div>
        <div className='back' ref={this.backDiv} style={{height: this.state.height, width: this.state.width, backgroundColor: this.state.bgColor}}>
          <h2>Playcount</h2>
          <h3>{this.state.playCounts}</h3>
        </div>
      </div>
      </>
    )
  }
}

const bgColors = {
  Winner: "green",
  Loser: "red",
  Tie: "gray"
}

export default Flippable