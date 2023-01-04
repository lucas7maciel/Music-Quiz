
const MostSong = ({components}) => {
  const song1 = components[0]
  const song2 = components[1]

  return(
    <>
    <div style={{textAlign: 'center'}}>
      <h1>Which of these songs have you listened to the most?</h1>
      <div style={containerStyle}>
        {song1}
        {song2}
      </div>
    </div>
    </>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',

  margin:'auto',
  width: '55%'
}

export default MostSong