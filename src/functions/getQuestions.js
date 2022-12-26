import MostArtist from "../components/Questions/mostArtist"
import MostAlbum from "../components/Questions/mostAlbum"
import MostSong from "../components/Questions/mostSong"

const lista = ["mostArtist", "mostSong", "mostAlbum"]

let questions = {
  mostArtist: MostArtist,
  mostSong: MostSong,
  mostAlbum: MostAlbum
}

const generateQuestion = (nick) => {
  const index = Math.floor(Math.random() * lista.length)
  const question = lista[index]

  return questions["mostSong"]({nick: nick})
}

export default generateQuestion
