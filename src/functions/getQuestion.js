import MostArtist from "../components/Questions/mostArtist"
import MostAlbum from "../components/Questions/mostAlbum"
import MostSong from "../components/Questions/mostSong"
import getComponents from "./getComponents"

const questions = ["mostArtist", "mostSong", "mostAlbum"]

let questionComps = {
  mostArtist: MostArtist,
  mostSong: MostSong,
  mostAlbum: MostAlbum
}

const getQuestion = async (nick) => {
  //chooses the question type
  const index = Math.floor(Math.random() * questions.length)
  const question = questions[index]

  //collects the necessary data for this type
  const components = await getComponents(nick, question)

  //passes the data (albums, artists, etc) to the question component
  console.log("Componentes")
  console.log(components)
  return questionComps[question]({components: components})
}

export default getQuestion
