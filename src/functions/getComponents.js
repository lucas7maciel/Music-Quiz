import {apikey} from './vars'
import Album from '../components/album'
import Artist from '../components/artist'
import Song from '../components/song'
import { createRef } from 'react'

const methods = {
  Album: "user.gettopalbums",
  Artist: "user.gettopartists",
  Song: "user.gettoptracks"
}

const paths = {
  Album: res => res["topalbums"]["album"],
  Artist: res => res["topartists"]["artist"],
  Song: res => res["toptracks"]["track"]
}

const components = {
  Album: (res, index, status, ref) => <Album res={res[index]} status={status} keyValue={index} ref={ref} />,
  Artist: Artist,
  Song: Song
}


const getComponents = async (nick, type) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=${methods[type]}&user=${nick}&api_key=${apikey}&format=json`
  let res

  await fetch(url).then((response) => response.json()).then((data) => res = data);

  res = paths[type](res)
  
  const indexes = getIndexes(res)           //choose two components for the question (albums, artists, songs)
  const statuses = getStatus(res, indexes)  //check which one has the highest play count
  const Component = components[type]

  const ref1 = createRef()
  const ref2 = createRef()

  const component1 = Component(res, indexes[0], statuses[0], ref1)
  const component2 = Component(res, indexes[1], statuses[1], ref2)

  return [component1, component2, ref1, ref2]
}

const getIndexes = (res) => {
  const index1 = Math.floor(Math.random() * res.length)

  //comentar isso
  const min = index1 - 3
  let max = index1 + 3

  if (max > res.length) max = res.length

  let index2 = index1
  while (index2 === index1) index2 = Math.floor(Math.random() * (max - min) + min)

  return [index1, index2]
}

const getStatus = (res, indexes) => {
  const index1 = indexes[0], index2 = indexes[1]

  const playcount1 = parseInt(res[index1]["playcount"])
  const playcount2 = parseInt(res[index2]["playcount"])

  if (playcount1 === playcount2) return ["Tie", "Tie"]

  return [playcount1 > playcount2 ? "Winner" : "Loser",
          playcount1 < playcount2 ? "Winner" : "Loser"]
}

export default getComponents