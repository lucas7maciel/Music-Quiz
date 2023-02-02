import {Component, createRef} from 'react'
import './flippable.css'

class Flippable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flipped: false, 
      playCounts: "...", 
      bgColor: "gray", 
      height: 0, 
      width: 0, 
      rightSize: false,
      first: true
    }

    this.frontDiv = createRef()
    this.backDiv = createRef()
  }

  componentDidMount() {
    if (this.props.Component) this.updateInfo()
  }

  componentDidUpdate() {
    if (!this.props.compRef) return

    if (this.state.flipped) {
      this.props.flipTrigger()
    }

    const current = this.props.compRef.current
    
    if (current.state["imgLoaded"] && !this.state.rightSize) {
      this.updateSize()
    }

    if (this.state.first) {
      this.updateInfo()
      this.setState({first: false})
    }

  }

  updateSize() {
    const frontRect = this.frontDiv.current.getBoundingClientRect()
    const backRect = this.backDiv.current.getBoundingClientRect()

    const newHeight = Math.max(frontRect.height, backRect.height)
    const newWidth = Math.max(frontRect.width, backRect.width)

    this.setState({height: newHeight, width: newWidth, rightSize: true})
  }

  updateInfo() {
    const contentData = this.props.component.props
  
    const playCounts= contentData.res["playcount"]
    const newBgColor = bgColors[contentData.status]

    this.setState({
      playCounts: playCounts || "...",
      bgColor: newBgColor || "gray"
    })
  }

  flip() {
    this.setState({flipped: true})
  }

  render () {
    return (
      <>
      <div className={`flippable ${this.state.flipped ? "flip" : ""}`} onClick={() => this.flip()}>
        <div className='front' ref={this.frontDiv}>
          {this.props.component}
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