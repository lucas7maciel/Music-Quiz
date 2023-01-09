import {Component} from 'react'

class Question extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.data
  }

  render() {
    return (
      <div style={{textAlign:'center'}} onClick={this.props.changeFunc}>
        <h1>{this.props.data.question}</h1>
        <div style={containerStyle}>
          {this.props.data.component1}
          {this.props.data.component2}
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