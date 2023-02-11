import {Component, createRef} from 'react'
import getQuestionData from '../functions/getQuestion'
import Flippable from './flippable'
import PopUp from './popUp'

class Question extends Component {
  constructor() {
    super()

    //component 1
    this.flip1 = createRef()
    this.state = {
      component1: <h1>Loading</h1>,
      ref1: null,
      key1: null
    }

    //component 2
    this.flip2 = createRef()
    this.state = {
      component2: <h1>Loading 2</h1>,
      ref2: null,
      key2: null
    }

    this.state = {question: "Loading question...", first: true}
    this.popUp = createRef()
    this.flipOther = this.flipOther.bind(this)
  }

  componentDidMount() {
    if (!this.state.first || !this.props.nick) return

    this.changeQuestion(this.props.nick)
    this.setState({first: false})
  }

  async changeQuestion(nick) {
    const newQuestion = await getQuestionData(nick)
    
    this.setState({
      question: newQuestion.question,

      component1: newQuestion.component1,
      ref1: newQuestion.ref1,
      key1: newQuestion.component1.props.keyValue,

      component2: newQuestion.component2,
      ref2: newQuestion.ref2,
      key2: newQuestion.component2.props.keyValue
    })
  }

  flipOther() {
    [this.flip1, this.flip2].forEach(async (ref) => {
      if (!ref.current.state.flipped) {
        await setTimeout(() => ref.current.flip(), 600)
        await setTimeout(() => this.popUp.current.open(), 700)
      }
    })
  }

  render() {
    return (
      <div style={{textAlign:'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '90%', border: 'solid 1px green'}}>
        <h1 onClick={() => this.changeQuestion(this.props.nick)} style={{marginBottom: 35}}>{this.state.question}</h1>
        <div style={containerStyle}>
          <Flippable 
            component={this.state.component1} 
            compRef={this.state.ref1} 
            flipTrigger = {this.flipOther}
            ref={this.flip1} 
            key={this.state.key1 || 51}
          />

          <Flippable 
            component={this.state.component2} 
            compRef={this.state.ref2} 
            flipTrigger = {this.flipOther}
            ref={this.flip2} 
            key={this.state.key2 || 52}
          />
        </div>
        <PopUp text="Click anywhere to continue" closeFunc={() => this.changeQuestion(this.props.nick)} ref={this.popUp} />
      </div>
    )
  }
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin:'auto',
  width: '55%',
  border: 'solid 5px white'
}

export default Question