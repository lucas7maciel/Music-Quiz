
const MostArtist = ({components}) => {
  const artist1 = components[0]
  const artist2 = components[1]

  return (
    <>
    <div style={{textAlign: 'center'}}>
      <h1>Which of these is your most listened to artist?</h1>
      <div style={containerStyle}>
          {artist1}
          {artist2}
      </div>
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

export default MostArtist