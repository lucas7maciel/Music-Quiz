import {Link} from 'react-router-dom'
import { useState } from 'react'

import {apikey} from '../../functions/vars'
import { albumIndexes } from '../../functions/getIndexes'
import Album from '../album'

const MostAlbum = ({nick}) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText
  res = JSON.parse(res)

  const indexes = albumIndexes(res)

  const album1 = Album({res: res, index: indexes[0]})
  const album2 = Album({res: res, index: indexes[1]})

  console.log(album1)
  console.log("playcount 1:" + album1["playCount"])
  console.log("playcount 2:" + album2["playCount"])
  console.log(Math.max(album1.playCount, album2.playCount))

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