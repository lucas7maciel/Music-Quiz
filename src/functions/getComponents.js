import {apikey} from './vars'
import Album from '../components/album'
import Artist from '../components/artist'
import Song from '../components/song'

const methods = {
  mostAlbum: "user.gettopalbums",
  mostArtist: "user.gettopartists",
  mostSong: "user.gettoptracks"
}

const components = {
  mostAlbum: Album,
  mostArtist: Artist,
  mostSong: Song
}

const getComponents = async (nick, type) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=${methods[type]}&user=${nick}&api_key=${apikey}&format=json`
  let res

  await fetch(url)
  .then((response) => response.json())
  .then((data) => res = data);
  console.log(res)
  const indexes = getIndexes(res, type)
  const Component = components[type]

  const component1 = Component({res: res, index: indexes[0]})
  const component2 = Component({res: res, index: indexes[1]})

  return [component1, component2]
}

const getIndexes = (res, type) => {
  if (type === "mostAlbum") res = res["topalbums"]["album"]
  else if (type === "mostArtist") res = res["topartists"]["artist"]
  else if (type === "mostSong") res = res["toptracks"]["track"]

  const index1 = Math.floor(Math.random() * res.length)

  //comentar isso
  const min = index1 - 3
  let max = index1 + 3

  if (max > res.length) max = res.length

  let index2 = index1
  while (index2 === index1) index2 = Math.floor(Math.random() * (max - min) + min)

  return [index1, index2]
}

export default getComponents