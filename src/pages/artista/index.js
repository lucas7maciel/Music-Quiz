import {Link, useLocation} from 'react-router-dom'

const Artista = () => {
  const location = useLocation()  //TRANSFORMAR ALBUM EM COMPONENT

  return (
    <>
    <div className="container">
      <h1>Qual destes é o seu artista mais ouvido?</h1>
      <div style={{display:'flex'}}>
        <div style={artistStyle}>
          <img src="https://lastfm.freetls.fastly.net/i/u/300x300/b47929a57fc4a51fd2e4b2569af7899f.png" alt="Nome do artista" style={{height: 250, width: 250}}></img>
          <h3>Artista</h3>
        </div>
        <div style={artistStyle}>
          <img src="https://lastfm.freetls.fastly.net/i/u/300x300/b47929a57fc4a51fd2e4b2569af7899f.png" alt="Nome do artista"></img>
          <h3>Artista</h3>
        </div>
      </div>
    </div>
    </>
  );
}

const artistStyle = {
  textAlign:'center', 
  flex: 1,
  cursor: 'pointer',
  borderradius: '50%'
}

const linkStyle = {
  textDecoration: "none",
  color: 'white',
};

export default Artista