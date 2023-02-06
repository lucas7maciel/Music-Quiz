import {Component} from 'react'

class PopUp extends Component {
  constructor(props) {
    super(props)

    this.state = {opened: false, transitionVar: null}
  }

  componentDidUpdate() {
    /*if (this.state.opened) {
      this.setState({transitionVar: textTransition})
    } else if (!this.state.opened && !this.state.transitionVar) {
      this.setState({transitionVar: textTransition})
    }*/
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
      <div onClick={() => this.close(this.props.closeFunc || null)} style={containerStyle}>
        <h3 style={textStyle}>{this.props.text}</h3>
      </div>
    ) : null
  }
}

const containerStyle = {
  position: 'absolute',
  zIndex: 2,
  top: 0,
  width: '100%',
  height: '100%',
  textAlign: 'center',
}

const textStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0
}

const textTransition = {
  opacity: 1,
  transition: 'opacity 0.7s ease-in'
}

export default PopUp