import {apikey} from '../../functions/vars'
import { getIndexes } from '../../functions/functions'
import Song from '../song'

const MostSong = ({nick}) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText

  res = JSON.parse(res)

  const indexes = getIndexes(res, "song")

  const song1 = Song({res: res, index: indexes[0]})
  const song2 = Song({res: res, index: indexes[1]})

  return(
    <>
    <div style={{textAlign: 'center'}}>
      <h1>Which of these songs have you listened to the most?</h1>
      <div style={containerStyle}>
        {song1}
        {song2}
      </div>
    </div>
    </>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',

  margin:'auto',
  width: '55%'
}

export default MostSong