import {Component} from 'react'

class PopUp extends Component {
  constructor(props) {
    super(props)

    this.state = {opened: false}
  }

  open(afterFunc) {
    this.setState({opened: true})

    if (afterFunc) {
      afterFunc()
    }
  }

  close(afterFunc) {
    this.setState({opened: false})

    if (afterFunc) {
      afterFunc()
    }
  }

  render() {
    return this.state.opened ? (
      <div style={popupStyle} onClick={() => this.close(this.props.closeFunc || null)}>
        <h3>{this.props.text}</h3>
      </div>
    ) : null
  }
}

const popupStyle = {
  textAlign: 'center',
  backgroundColor: 'red',
  position: 'fixed',
  top: '50%',
  left: '50%',
  margintop: '-100px',
  marginleft: '-150px',
  zindex: 999
}


export default PopUp