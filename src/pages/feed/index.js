import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import getQuestionData from '../../functions/getQuestion'
import NavBar from '../../components/navbar'
import Question from '../../components/question'


const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  return (
    <div>
      <div className='header' style={{height: '10%'}}>
        <NavBar />
      </div>
      <Question nick={nick} style={{height: '90%'}} />
    </div>
  )
}

export default Feed