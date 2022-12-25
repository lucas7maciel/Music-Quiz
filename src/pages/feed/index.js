import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import generateQuestion from '../../functions/vars'

const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  const [question, setQuestion] = useState(generateQuestion(nick))
  const [nextQuestion, setNextQuestion] = useState(generateQuestion(nick))

  const changeQuestion = () => {
    console.log("mudando questão")
    setQuestion(nextQuestion)
    console.log("mudou primeira")
    setNextQuestion(generateQuestion(nick))
    console.log("questão mudada")
  }

  return (
    <>
    <div style={{textalign: 'center'}}>
      <h1>Pergunta aleatória</h1>
      {question}
      {nextQuestion}
    </div>
    <div style={{textalign: 'center'}}>
      <button><Link style={linkStyle} to="/">Back</Link></button>
      <button onClick={changeQuestion}>Mudar questão</button>
    </div>
    </>
  )
}

const linkStyle = {
  textDecoration: "none",
  color: 'white',
};

export default Feed