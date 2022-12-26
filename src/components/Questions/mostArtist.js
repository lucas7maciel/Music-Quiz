import {apikey} from '../../functions/vars'
import { getIndexes } from '../../functions/functions'
import Artist from '../artist'

const MostArtist = ({nick}) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText
  res = JSON.parse(res)

  const indexes = getIndexes(res, "artist")

  const artist1 = Artist({res: res, index: indexes[0]})
  const artist2 = Artist({res: res, index: indexes[1]})

  return (
    <>
    <div style={{textAlign: 'center'}}>
      <h1>Which of these is your most listened to artist?</h1>
      <div style={containerStyle}>
          {artist1}
          {artist2}
      </div>
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

export default MostArtist