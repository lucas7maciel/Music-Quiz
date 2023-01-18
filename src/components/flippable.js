import {Component, createRef} from 'react'
import './flippable.css'

class Flippable extends Component {
  constructor(props) {
    super(props)
    this.state = {flipped: false, playCounts: "...", height: 0, width: 0}

    this.frontDiv = createRef()
    this.backDiv = createRef()
  }

  componentDidMount() {
    //comentar
    console.log("montou")
    const frontRect = this.frontDiv.current.getBoundingClientRect()
    const backRect = this.backDiv.current.getBoundingClientRect()

    const newHeight = Math.max(frontRect.height, backRect.height)
    const newWidth = Math.max(frontRect.width, backRect.width)
    
    const contentData = this.props.data.props.res
    const playCounts = contentData ? contentData["playcount"] : "..."

    this.setState({height: newHeight, width: newWidth, playCounts: playCounts})
  }

  render () {
    return (
      <>
      <div className={`flippable ${this.state.flipped ? "flip" : ""}`} onClick={() => this.setState({flipped: !this.state.flipped})}>
        <div className='front' ref={this.frontDiv}>
          {this.props.data}
        </div>
        <div className='back' ref={this.backDiv} style={{height: this.state.height, width: this.state.width}}>
          <h2>Playcount</h2>
          <h3>{this.state.playCounts}</h3>
        </div>
      </div>
      </>
    )
  }
}

export default Flippable