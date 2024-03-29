import {Component, createRef} from 'react'
import {getQuestionData} from '../functions/getQuestions'
import ClickAnywhere from './clickAnywhere'
import Flippable from './flippable'

class Question extends Component {
  constructor() {
    super()

    this.clickAny = createRef()
    this.flip1 = createRef()
    this.flip2 = createRef()

    this.state = {
      question:"Loading question...", first: true,
      //components
      component1: null, component2: null,
      ref1: null, ref2: null,
      key1: 51, key2: 52
    }

    this.flipOther = this.flipOther.bind(this)
  }

  componentDidMount() {
    if (!this.state.first || !this.props.nick) return

    this.changeQuestion(this.props.nick)
    this.setState({first: false})
  }


  async changeQuestion(nick) {
    const newQuestion = await getQuestionData(nick)

    //keys need to be checked so that their value is not repeated, otherwise new components will not be rendered
    //the other chosen values are 51 and 52 which is the max response length + index of the component
    const key1 = newQuestion.component1.props.keyValue
    const key2 = newQuestion.component2.props.keyValue

    this.setState({
      question: newQuestion.question,

      component1: newQuestion.component1,
      ref1: newQuestion.component1.ref,
      key1: key1 === this.state.key1 ? 51 : key1,

      component2: newQuestion.component2,
      ref2: newQuestion.component2.ref,
      key2: key2 === this.state.key2 ? 52 : key2
    })

  }

  flipOther() {
    [this.flip1, this.flip2].forEach((ref) => {
      if (ref.current.state.flipped) return
      
      setTimeout(ref.current.flip, 600)
      setTimeout(this.clickAny.current.pop, 700)
    })
  }

  render() {
    return (
      <div style={containerStyle}>
        <h1 onClick={() => this.changeQuestion(this.props.nick)} style={{marginBottom: 35}}>{this.state.question}</h1>

        <div style={flippablesStyle}>
          <Flippable 
            component={this.state.component1} 
            compRef={this.state.ref1} 
            flipTrigger = {this.flipOther}
            ref={this.flip1} 
            key={this.state.key1}
          />

          <Flippable 
            component={this.state.component2} 
            compRef={this.state.ref2} 
            flipTrigger = {this.flipOther}
            ref={this.flip2} 
            key={this.state.key2}
          />
        </div>
        <ClickAnywhere 
          text="Click anywhere to continue"
          closeFunc={() => this.changeQuestion(this.props.nick)} 
          ref={this.clickAny} 
        />
      </div>
    )
  }
}

const containerStyle = {
  display: 'flex', 
  justifyContent: 'center', 
  flexDirection: 'column', 
  
  marginTop: 40,
  height: '90%',

  textAlign: 'center'
}

const flippablesStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '55%',
  margin:'auto'
}

export default Question