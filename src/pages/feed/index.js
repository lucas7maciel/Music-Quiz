import {useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import generateQuestion from '../../functions/vars'

const Feed = () => {
  const location = useLocation()
  const [question, setQuestion] = useState(generateQuestion())

  return (
    <>
    <div style={{textalign: 'center'}}>
      <h1>Pergunta aleatória</h1>
      {question}
    </div>
    <div style={{textalign: 'center'}}>
      <button><Link style={linkStyle} to="/">Back</Link></button>
      <button onClick={() => setQuestion(generateQuestion())}>Mudar questão</button>
    </div>
    </>
  )
}

const linkStyle = {
  textDecoration: "none",
  color: 'white',
};

export default Feed