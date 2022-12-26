import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import generateQuestion from '../../functions/getQuestions'
import NavBar from '../../components/navbar'

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
    <div className='header' style={{marginBottom: '50px'}}>
      <NavBar />
    </div>
      {question}
    </>
  )
}

export default Feed