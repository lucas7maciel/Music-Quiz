import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import generateQuestion from '../../functions/getQuestions'

const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  const [question, setQuestion] = useState(generateQuestion(nick))
  const [nextQuestion, setNextQuestion] = useState(generateQuestion(nick))

  const changeQuestion =  () => {
    setQuestion(nextQuestion)
    setNextQuestion(generateQuestion(nick))
  }

  return (
    <>
    <div style={{textalign: 'center'}}>
      <h1 style={{textalign: 'center'}}>Future header</h1>
      {question}
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