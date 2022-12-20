import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react'
import './style.css'

const Quiz = () => {
  const [message, setMessage] = useState("Choose an album")
  const location = useLocation()  //TRANSFORMAR ALBUM EM COMPONENT

  const nome = location.state.nome
  const album1 = location.state.album1
  const album2 = location.state.album2

  return (
    <>
    <div className="container">
    <h1>Quiz page</h1>
    <h2>Your username: {nome}</h2>
    <div style={{textAlign:'center'}}>
      <h2>Which of these two is your most listened album?</h2>
      <div style={{display: 'flex', alignItems: 'center', width: '50%', margin: 'auto'}}>
        <div style={albumStyle}>
          <img src={album1["img"]} alt={album1["img"]} onClick={() => setMessage("Right answer")}></img>
          <h4>{album1["name"]}</h4>
        </div>
        <div style={albumStyle}>
          <img src={album2["img"]} alt={album2["img"]} onClick={() => setMessage("Wrong answer")}></img>
          <h4>{album2["name"]}</h4>
        </div>
      </div>
      <p>{message}</p>
    </div>
    <div style={{textalign: 'center'}}>
      <button><Link style={linkStyle} to="/">Back</Link></button>
    </div>
    </div>
    </>
  );
}

const albumStyle = {
  textAlign:'center', 
  flex: 1, 
  cursor: 'pointer'
}

const linkStyle = {
  textDecoration: "none",
  color: 'white',
};

export default Quiz