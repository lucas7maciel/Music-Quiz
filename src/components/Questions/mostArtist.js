import {apikey} from '../../functions/vars'
import Artist from '../artist'

const MostArtist = ({nick}) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText

  res = JSON.parse(res)
  
  const artist1 = Artist({res: res, index: 0})
  const artist2 = Artist({res: res, index: 1})

  return (
    <>
    <div className="container">
      <h1>Qual destes é o seu artista mais ouvido?</h1>
      <div style={{display:'flex'}}>
          {artist1}
          {artist2}
      </div>
    </div>
    </>
  );
}

export default MostArtist