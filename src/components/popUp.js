import {Component} from 'react'
import './popUp.css'

class PopUp extends Component {
  constructor(props) {
    super(props)

    this.state = {opened: false, fadeIn: false}
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
      <div onClick={() => this.close(this.props.closeFunc || null)} className='popUp container'>
        <h3 className='popUp text'>{this.props.text}</h3>
      </div>
    ) : null
  }
}

export default PopUp