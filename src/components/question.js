import {Component} from 'react'
import Flippable from './flippable'

class Question extends Component {
  render() {
    return (
      <>
      <div style={{textAlign:'center'}} >
        <h1 onClick={this.props.changeFunc}>{this.props.data.question}</h1>
        <div style={containerStyle}>
          <Flippable data={this.props.data.component1} key={this.props.data.component1.props ? this.props.data.component1.props.index : 1} />
          <Flippable data={this.props.data.component2} key={this.props.data.component2.props ? this.props.data.component2.props.index : 2} />
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