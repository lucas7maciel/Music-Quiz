import {useLocation} from 'react-router-dom'
import NavBar from '../../components/navbar'
import Question from '../../components/question'

const Feed = () => {
  const location = useLocation()
  const nick = location.state.nick

  return (
    <div>
      <div className='header'>
        <NavBar />
      </div>
      <Question nick={nick} />
    </div>
  )
}

export default Feed