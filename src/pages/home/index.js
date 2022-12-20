import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './style.css'

const Home = () => {
  const navigate = useNavigate()

  const [nick, setNick] = useState('')
  const handleChange = event => setNick(event.target.value)

  const [message, setMessage] = useState("Enter your username")

  function getStarted(req) {
    req = JSON.parse(req)
    req = req["topalbums"]["album"]

    let album1 = {name: req[0]["name"], img: req[0]["image"][3]["#text"]}
    let album2 = {name: req[1]["name"], img: req[1]["image"][3]["#text"]}

    navigate("/quiz", {state: {nome: nick, answer: 1, album1: album1, album2: album2}})
  }

  //http://www.last.fm/api/auth/?api_key=68bdac7644fbae9b59e73d85d8a39851&cb=http://google.com
  async function getRequest (nick)  {
    if (nick === "") return setMessage("Empty field")

    setMessage("Loading...")

    const apikey = '5c994f20a333e6a28901af6b8cc9929b'
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${nick}&api_key=${apikey}&limit=2&format=json`
    const req = new XMLHttpRequest()

    req.open("GET", url, false)
    req.send(null)

    if (req.status >= 400) return setMessage("This user does not exist") 
  
    getStarted(req.responseText)
  };


  return (
    <>
    <div className="container">
    <h1>Music Quiz</h1>
    <h2>Quiz based on your musical taste using Last.fm api</h2>
    <form>
      <input type="text" value={nick} onChange={handleChange}></input>
      <p>{message}</p>
    </form>
    <div style={{textAlign: 'center'}}>
      <button onClick={() => getRequest(nick)}>Get started!</button>
    </div>
    </div>
    </>
  );
}

export default Home