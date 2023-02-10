import {useNavigate} from 'react-router-dom'
import { lastfmKey } from '../../functions/vars'
import { useState } from 'react'

const Home = () => {
  const navigate = useNavigate()

  const [nick, setNick] = useState('lucascalcio')
  const handleChange = event => setNick(event.target.value)

  const [message, setMessage] = useState("Enter your username")

  async function getStarted(nick) {
    if (nick.length === 0) return setMessage("Empty field")

    //check if the user actually exists
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${nick}&api_key=${lastfmKey}&format=json` 
    let res

    await fetch(url)
    .then((response) => response.json()).then((data) => res = data)
    .catch(() => setMessage("Error"))

    if (res["message"]) return setMessage(res["message"])

    navigate("/feed", {state: {nick: nick}})
  }

  return (
    <div style={containerStyle}>
    <h1 style={{border: 'solid', padding:0, margin:0}}>Music Quiz</h1>
    <h2 style={{border:'solid'}}>Quiz based on your musical taste using Last.fm api</h2>
    <form>
      <input type="text" value={nick} onChange={handleChange} style={inputStyle}></input>
      <p>{message}</p>
    </form>
    <div style={{textAlign: 'center', margin: '0 auto'}}>
      <button onClick={() => getStarted(nick)} style={buttonStyle}>Get started!</button>
    </div>
    </div>
  );
}

const containerStyle = {
  position: 'absolute',
  top: -45,

  border: 'solid',
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const titleStyle = {

}

const inputStyle = {

}

const buttonStyle = {

}
/*const containerStyle = {
  textAlign: 'center'
}

const inputStyle = {
  width: 500
}

const buttonStyle = {
  color: 'white',
  fontSize: 30,
  fontWeight: 500,
  padding: '12px 25px 12px 25px',
  backgroundColor: 'purple',
  border: '3px solid rgb(88, 0, 88)',
  borderRadius: 4,
  cursor: 'pointer'
}*/

export default Home