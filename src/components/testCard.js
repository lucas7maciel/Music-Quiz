import './testCard.css'
import Album from './albumTeste'
import {useState} from 'react'
import { CSSTransition } from 'react-transition-group'

let res = {"topalbums":{"album":{0:{"artist":{"url":"https://www.last.fm/music/Jo%C3%A3o+Gomes","name":"João Gomes","mbid":"bb17aa41-b488-46c1-b15f-b038c6679f92"},"image":[{"size":"small","#text":"https://lastfm.freetls.fastly.net/i/u/34s/fa8994912e7fa1cdbccd814067e4fcf6.png"},{"size":"medium","#text":"https://lastfm.freetls.fastly.net/i/u/64s/fa8994912e7fa1cdbccd814067e4fcf6.png"},{"size":"large","#text":"https://lastfm.freetls.fastly.net/i/u/174s/fa8994912e7fa1cdbccd814067e4fcf6.png"},{"size":"extralarge","#text":"https://lastfm.freetls.fastly.net/i/u/300x300/fa8994912e7fa1cdbccd814067e4fcf6.png"}],"mbid":"","url":"https://www.last.fm/music/Jo%C3%A3o+Gomes/Digo+Ou+N%C3%A3o+Digo","playcount":"202","@attr":{"rank":"9"},"name":"Digo Ou Não Digo"}}}}

const TestCard = ({index}) => {
  console.log("res em teste card")
  console.log(res)
  const [turned, setTurned] = useState(true)
  const mudaLado = () => setTurned(!turned)
  const album = <Album res={res} index={0} onclick={mudaLado} />

  return (
    <>
    <div className="container">
      <CSSTransition 
        in={turned}
        timeout={2000}
        classNames="flip"
      >{album}</CSSTransition>
    </div>
    </>
  );
}

export default TestCard