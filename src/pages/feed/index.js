import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import getQuestionData from '../../functions/getQuestion'
import NavBar from '../../components/navbar'
import Question from '../../components/question'


const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  const data = {
    "question": "Qual o tamanho do seu penis",
    "components": [<h1>Componente 1</h1>, <h1>Componente 2</h1>]
  }

  const [questionData, setQuestionData] = useState(data)

  const changeQuestion = async () => {
    console.log("Vai mudar")
    const newQuestion = await getQuestionData(nick)
    setQuestionData(newQuestion)
  }

  return (
    <>
    <div className='header' style={{marginBottom: '50px'}}>
      <NavBar />
    </div>
    <Question data={questionData} changeFunc={changeQuestion} />
    </>
  )
}

/*{question}
  <div style={{margin: 'auto', textAlign: 'center'}}><button style={{cursor: 'pointer'}} onClick={changeQuestion}>Change question</button></div>*/

export default Feed