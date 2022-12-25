import {useState} from 'react'
import Song from '../song'

const MostSong = ({nick}) => {
  const apikey = '5c994f20a333e6a28901af6b8cc9929b'

  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${nick}&limit=2&api_key=${apikey}&format=json`

  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText

  res = JSON.parse(res)

  const song1 = Song({res: res, index: 0})
  const song2 = Song({res: res, index: 1})

  return(
    <>
    <h1>Musica ai ui ai ui</h1>
    <div style={{display: 'flex'}}>
      {song1}
      {song2}
    </div>

    </>
  )
}

export default MostSong