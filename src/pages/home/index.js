import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { apikey } from '../../functions/vars'
import './style.css'

const Home = () => {
  const navigate = useNavigate()

  const [nick, setNick] = useState('lucascalcio')
  const handleChange = event => setNick(event.target.value)

  const [message, setMessage] = useState("Enter your username")

  async function getStarted(nick) {
    if (nick.length === 0) return setMessage("Empty field")

    //check if the user actually exists
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${nick}&api_key=${apikey}&format=json` 
    let res

    await fetch(url)
    .then((response) => response.json()).then((data) => res = data)
    .catch(() => setMessage("Error"))

    if (res["message"]) return setMessage(res["message"])

    navigate("/feed", {state: {nick: nick}})
  }


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
      <button onClick={() => getStarted(nick)}>Get started!</button>
    </div>
    </div>
    </>
  );
}

export default Home