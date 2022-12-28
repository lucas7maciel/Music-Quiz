import {Link} from 'react-router-dom'
import { useState } from 'react'

import {apikey} from '../../functions/vars'
import { getIndexes } from '../../functions/functions'
import Album from '../album'

const MostAlbum = ({components}) => {
  const album1 = components[0]
  const album2 = components[1]

  //const [message, setMessage] = useState("Choose an album")

  return (
    <>
    <div style={{textAlign:'center'}}>
      <h1>Which of these two is your most listened album?</h1>
      <div style={containerStyle}>
        {album1}
        {album2}
      </div>
      <p></p>
    </div>
    </>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',

  margin:'auto',
  width: '55%'
}


export default MostAlbum