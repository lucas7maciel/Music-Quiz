import Artista from "../pages/artista"
import Musica from "../pages/musica"

const apikey = '5c994f20a333e6a28901af6b8cc9929b'

const lista = ["artista", "musica"]

const questions = {
  artista: Artista(),
  musica: Musica()
}

const generateQuestion = () => {
  const index = Math.floor(Math.random() * lista.length)
  const question = lista[index]

  return questions[question]
}

export default generateQuestion
