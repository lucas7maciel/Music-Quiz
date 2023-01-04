import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import getQuestion from '../../functions/getQuestion'
import NavBar from '../../components/navbar'

const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  const [question, setQuestion] = useState(<h1 style={{textAlign: 'center'}}>Loading</h1>)

  const changeQuestion = async () => {
    const newQuestion = await getQuestion(nick)
    setQuestion(newQuestion)
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