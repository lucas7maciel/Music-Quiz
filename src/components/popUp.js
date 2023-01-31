import {Component} from 'react'

class PopUp extends Component {
  constructor(props) {
    super(props)

    this.state = {opened: true}
  }

  render() {
    return this.state.opened ? (
      <div style={popupStyle} onClick={() => this.setState({opened: !this.state.opened})}>
        <h3>{this.props.text}</h3>
      </div>
    ) : <h1>Sem popup</h1>
  }
}

const popupStyle = {
  textAlign: 'center',
  backgroundColor: 'red'
}

export default PopUp