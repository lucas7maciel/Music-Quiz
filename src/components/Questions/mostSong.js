
const mostSong = ({nick}) => {
  console.log("musica")
  const apikey = '5c994f20a333e6a28901af6b8cc9929b'

  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${nick}&limit=2&api_key=${apikey}&format=json`

  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText

  res = JSON.parse(res)
  res = res["toptracks"]["track"]

  const nome = res[0]["name"]
  const artista = res[0]["artist"]["name"]
  const cover = res[0]["image"][3]["#text"]

  return(
    <>
    <h1>Musica ai ui ai ui</h1>
    <img src={cover} alt="Cover"></img>
    <h2>{nome}</h2>
    <h3>{artista}</h3>
    </>
  )
}

export default mostSong