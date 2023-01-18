import getComponents from "./getComponents"

const questions = [{text: "Teste artista", type: "Artist"}, {text: "Teste song", type: "Song"}, {text: "Which of these is your most listened to album?", type: "Album"}]

const getQuestionData = async (nick) => {
  const index = Math.floor(Math.random() * questions.length)
  const question = questions[2]

  const components = await getComponents(nick, question["type"])

  const data = {
    "question": question["text"],//question["text"],
    "component1": components[0],
    "component2": components[1]
  }

  return data
}

export default getQuestionData
