import {useNavigate} from 'react-router-dom'
import { lastfmKey } from '../../functions/vars'
import { useState } from 'react'

const Home = () => {
  const navigate = useNavigate()

  const [message, setMessage] = useState("Enter your username")
  const [nick, setNick] = useState("")
  const handleChange = event => setNick(event.target.value)

  async function getStarted(nick) {
    if (nick.length === 0) return setMessage("Empty field")

    setMessage("Checking user")

    //check if the user actually exists
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${nick}&api_key=${lastfmKey}&format=json` 

    await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (res["message"]) return setMessage(res["message"])

      navigate("/feed", {state: {nick: nick}})
    })
    .catch((error) => {
      setMessage("Error")})
  }

  return (
    <div style={containerStyle}>
    <h1 style={titleStyle}>Music Quiz</h1>
    <h2 style={{marginTop: 10}}>Questions based on your Last.fm scrobbles</h2>
    <input type="text" value={nick} onChange={handleChange}  style={inputStyle}></input>
    <p style={messageStyle}>{message}</p>
    <div style={{textAlign: 'center'}}>
      <button onClick={() => getStarted(nick)} style={buttonStyle}>Get Started</button>
    </div>
    </div>
  );
}

const containerStyle = {
  position: 'absolute',
  top: -25,

  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const titleStyle = {
  fontSize: '4em',
  marginBottom: 0
}

const inputStyle = {
  height: 30,
  width: 400,

  textAlign: 'center',
  borderRadius: 5
}

const messageStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#292929'
}

const buttonStyle = {
  marginTop: 10,
  padding: "12px 23px 12px 23px",

  backgroundColor: 'black',
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 'bold',

  cursor: 'pointer',
  borderRadius: 6
}

export default Home