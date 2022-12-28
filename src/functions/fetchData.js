import {apikey} from './vars'
import { getIndexes } from './functions'
import Album from '../components/album'
import Artist from '../components/artist'
import Song from '../components/song'

const getAlbums = (nick) => {
  console.log("nick:" + nick)
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText
  res = JSON.parse(res)

  const indexes = getIndexes(res, "album")

  const album1 = Album({res: res, index: indexes[0]})
  const album2 = Album({res: res, index: indexes[1]})

  return [album1, album2]
}

const getArtists = (nick) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText
  res = JSON.parse(res)

  const indexes = getIndexes(res, "artist")

  const artist1 = Artist({res: res, index: indexes[0]})
  const artist2 = Artist({res: res, index: indexes[1]})

  return [artist1, artist2]
}

const getSongs = (nick) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${nick}&api_key=${apikey}&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText

  res = JSON.parse(res)

  const indexes = getIndexes(res, "song")

  const song1 = Song({res: res, index: indexes[0]})
  const song2 = Song({res: res, index: indexes[1]})

  return [song1, song2]
}

export default getSongs