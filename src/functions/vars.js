import mostArtist from "../components/Questions/mostArtist"
import MostAlbum from "../components/Questions/mostAlbum"
import mostSong from "../components/Questions/mostSong"

const apikey = '5c994f20a333e6a28901af6b8cc9929b'

const lista = ["mostArtist", "mostSong", "mostAlbum"]

let questions = {
  mostArtist: mostArtist,
  mostSong: mostSong,
  mostAlbum: MostAlbum
}

const generateQuestion = (nick) => {
  const index = Math.floor(Math.random() * lista.length)
  const question = lista[index]

  return questions[question]({nick: nick})
}

export default generateQuestion
