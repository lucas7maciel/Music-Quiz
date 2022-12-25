import {Link} from 'react-router-dom'
import { useState } from 'react'

import Album from '../album'

const MostAlbum = ({nick}) => {
  const apikey = '5c994f20a333e6a28901af6b8cc9929b'

  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${nick}&api_key=${apikey}&limit=2&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText

  res = JSON.parse(res)
  res = res["topalbums"]["album"]

  const album1 = Album({res: res, index: 0})
  const album2 = Album({res: res, index: 1})

  //const [message, setMessage] = useState("Choose an album")

  return (
    <>
    <div className="container">
    <h1>Quiz page</h1>
    <h2>Your username: {nick}</h2>
    <div style={{textAlign:'center'}}>
      <h2>Which of these two is your most listened album?</h2>
      <div style={{display: 'flex', alignItems: 'center', width: '50%', margin: 'auto'}}>
        {album1}
        {album2}
      </div>
      <p></p>
    </div>
    <div style={{textalign: 'center'}}>
      <button><Link style={linkStyle} to="/">Back</Link></button>
    </div>
    </div>
    </>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: 'white',
};

export default MostAlbum