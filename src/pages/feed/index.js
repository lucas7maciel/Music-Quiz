import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import generateQuestion from '../../functions/getQuestions'
import getSongs from '../../functions/fetchData'
import NavBar from '../../components/navbar'

const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  const [question, setQuestion] = useState(<h1>Loading</h1>)

  const changeQuestion = async () => {
    const data = await getSongs(nick)
    setQuestion(generateQuestion(data))
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