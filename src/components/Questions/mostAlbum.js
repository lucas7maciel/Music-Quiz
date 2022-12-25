import {Link} from 'react-router-dom'
import React, { useState } from 'react'

const MostAlbum = ({nick}) => {
  console.log("album")
  const apikey = '5c994f20a333e6a28901af6b8cc9929b'

  const url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${nick}&api_key=${apikey}&limit=2&format=json`
  const req = new XMLHttpRequest()
  req.open("GET", url, false)
  req.send(null)

  let res = req.responseText

  res = JSON.parse(res)
  res = res["topalbums"]["album"]

  const album1 = {name: res[0]["name"], img: res[0]["image"][3]["#text"]}
  const album2 = {name: res[1]["name"], img: res[1]["image"][3]["#text"]}

  //const [message, setMessage] = useState("Choose an album")
  try {const [oi, setOi] = useState("hm")}
  catch (erro) { console.log(erro)}

  return (
    <>
    <div className="container">
    <h1>Quiz page</h1>
    <h2>Your username: {nick}</h2>
    <div style={{textAlign:'center'}}>
      <h2>Which of these two is your most listened album?</h2>
      <div style={{display: 'flex', alignItems: 'center', width: '50%', margin: 'auto'}}>
        <div style={albumStyle}>
          <img src={album1["img"]} alt={album1["img"]} onClick={() => console.log("pens")}></img>
          <h4>{album1["name"]}</h4>
        </div>
        <div style={albumStyle}>
          <img src={album2["img"]} alt={album2["img"]} onClick={() => console.log("penis")}></img>
          <h4>{album2["name"]}</h4>
        </div>
      </div>
      <p></p>
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

export default MostAlbum