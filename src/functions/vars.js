import MostArtist from "../components/Questions/mostArtist"
import MostAlbum from "../components/Questions/mostAlbum"
import MostSong from "../components/Questions/mostSong"

const apikey = '5c994f20a333e6a28901af6b8cc9929b'

const lista = ["mostArtist", "mostSong", "mostAlbum"]

let questions = {
  mostArtist: MostArtist,
  mostSong: MostSong,
  mostAlbum: MostAlbum
}

const generateQuestion = (nick) => {
  const index = Math.floor(Math.random() * lista.length)
  const question = lista[index]

  return questions["mostAlbum"]({nick: nick})
}

export default generateQuestion
