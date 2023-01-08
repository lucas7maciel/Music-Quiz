import {useState, Component} from 'react'
import {useLocation, Link} from 'react-router-dom'
import getQuestion from '../../functions/getQuestion'
import NavBar from '../../components/navbar'

class Teste extends Component {
  constructor(props) {
    super(props)
    this.counter = this.props.counter
    console.log(this.counter)
  }
  render () {
    return (
      <h1>{this.counter}</h1>
    )
  }
}

const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  const [question, setQuestion] = useState(<Teste counter={0} />/*<h1 style={{textAlign: 'center'}}>Loading</h1>*/)
  const [counter, setCounter] = useState(0)

  const changeQuestion = async () => {
    const newQuestion = await getQuestion(nick)
    //setCounter(counter + 1)
    //setQuestion(<Teste counter={counter} />)
    setQuestion(newQuestion)
    console.log("mudou questao")
  }

  return (
    <>
    <div className='header' style={{marginBottom: '50px'}}>
      <NavBar />
    </div>
      {question}
      <div style={{margin: 'auto', textAlign: 'center'}}><button style={{cursor: 'pointer'}} onClick={changeQuestion}>Change question</button></div>
    </>
  )
}

export default Feed