import {Component} from 'react'
import './clickAnywhere.css'

//"Click anywhere to continue" component, which can be associated with any type of function, as they are passed as parameters
class ClickAnywhere extends Component {
  constructor(props) {
    super(props)

    this.state = {opened: false, fadeIn: false}
    this.pop = this.pop.bind(this)
  }

  pop(afterFunc, open = true) {
    this.setState({opened: open})

    if (afterFunc) afterFunc()
  }

  render() {
    return this.state.opened ? (
      <div onClick={() => this.pop(this.props.closeFunc || null, false)} className='clickAny container'>
        <h3 className='clickAny text'>{this.props.text}</h3>
      </div>
    ) : null
  }
}

export default ClickAnywhere