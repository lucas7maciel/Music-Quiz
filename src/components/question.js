import {Component, createRef} from 'react'
import Flippable from './flippable'

class Question extends Component {
  constructor() {
    super()

    this.flip1 = createRef()
    this.flip2 = createRef()

    this.flipOther = this.flipOther.bind(this)
  }

  async flipOther() {

    [this.flip1, this.flip2].forEach((ref) => {
      if (!ref.current.state.flipped) {
        setTimeout(() => ref.current.flip(), 1000);
      }
    })
  }

  render() {
    return (
      <>
      <div style={{textAlign:'center'}}>
        <h1 onClick={this.props.changeFunc}>{this.props.data.question}</h1>
        <div style={containerStyle}>
          <Flippable 
          data={this.props.data.component1} 
          teste={this.props.data.ref1} 
          flipTrigger = {this.flipOther}
          ref={this.flip1} 
          key={this.props.data.component1.props ? this.props.data.component1.props.keyValue : 1} />

          <Flippable 
          data={this.props.data.component2} 
          teste={this.props.data.ref2} 
          flipTrigger = {this.flipOther}
          ref={this.flip2} 
          key={this.props.data.component2.props ? this.props.data.component2.props.keyValue : 2} />
        </div>
      </div>
      </>
    )
  }
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin:'auto',
  width: '55%'
}

export default Question