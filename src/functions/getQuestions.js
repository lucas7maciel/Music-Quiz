import MostArtist from "../components/Questions/mostArtist"
import MostAlbum from "../components/Questions/mostAlbum"
import MostSong from "../components/Questions/mostSong"

const lista = ["mostArtist", "mostSong", "mostAlbum"]

let questions = {
  mostArtist: MostArtist,
  mostSong: MostSong,
  mostAlbum: MostAlbum
}

const generateQuestion = (components) => {
  const index = Math.floor(Math.random() * lista.length)
  const question = lista[index]

  return questions["mostSong"]({components: components})
}

export default generateQuestion
