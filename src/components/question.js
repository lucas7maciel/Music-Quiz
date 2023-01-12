import {Component} from 'react'
import Flippable from './flippable'

class Question extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}} onClick={this.props.changeFunc}>
        <h1>{this.props.data.question}</h1>
        <div style={containerStyle}>
          <Flippable data={this.props.component1} key={1} />
          <Flippable data={this.props.component2} key={2} />
        </div>
      </div>
    )
  }
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',

  margin:'auto',
  width: '55%'
}

export default Question