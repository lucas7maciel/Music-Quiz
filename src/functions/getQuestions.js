import {lastfmKey, questions, compHelper} from './vars'

export const getQuestionData = async (nick) => {
  const index = Math.floor(Math.random() * questions.length)
  const question = questions[index]

  const components = await getComponents(nick, question["type"])

  return {
    "question": question["text"],
    "component1": components[0],
    "component2": components[1]
  }
}

const getComponents = async (nick, type) => {
  const helper = compHelper[type]
  const url = `http://ws.audioscrobbler.com/2.0/?method=${helper["method"]}&user=${nick}&api_key=${lastfmKey}&format=json`
  let res

  await fetch(url).then((response) => response.json()).then((data) => res = data);

  res = helper["path"](res)
  
  const indexes = getIndexes(res)           //chooses two components for the question (albums, artists, songs)
  const statuses = getStatus(res, indexes)  //checks which one has the highest play count
  const Component = helper.component

  const component1 = Component(res, indexes[0], statuses[0])
  const component2 = Component(res, indexes[1], statuses[1])

  return [component1, component2]
}

const getIndexes = (res) => {
  const index1 = Math.floor(Math.random() * res.length - 1)
  let index2 = index1 //temporarily

  //comentar isso
  const range = 5
  const max = Math.min(index1 + range, res.length - 1)
  const min = Math.max(index1 - range, 0)

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
