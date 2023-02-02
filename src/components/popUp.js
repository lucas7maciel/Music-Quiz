import {Component} from 'react'
import './popUp.css'

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
      <div className='container' onClick={() => this.close(this.props.closeFunc || null)}>
        <h3 className='text'>{this.props.text}</h3>
      </div>
    ) : null
  }
}


export default PopUp