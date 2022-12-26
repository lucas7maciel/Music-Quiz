import {Link} from 'react-router-dom'
import { useState } from 'react'

import {apikey} from '../../functions/vars'
import { getIndexes } from '../../functions/functions'
import Album from '../album'

const MostAlbum = ({nick}) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText
  res = JSON.parse(res)

  const indexes = getIndexes(res, "album")

  const album1 = Album({res: res, index: indexes[0]})
  const album2 = Album({res: res, index: indexes[1]})

  //const [message, setMessage] = useState("Choose an album")

  return (
    <>
    <div style={{textAlign:'center'}}>
      <h1>Which of these two is your most listened album?</h1>
      <div style={containerStyle}>
        {album1}
        {album2}
      </div>
      <p></p>
    </div>
    </>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',

  margin:'auto',
  width: '55%'
}


export default MostAlbum