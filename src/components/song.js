
const Song = ({res, index}) => {
  res = res["toptracks"]["track"][index]

  const coverUrl = res["image"][3]["#text"]
  const name = res["name"]
  const artist = res["artist"]["name"]

  return (
    <>
      <div style={songStyle}>
        <img src={coverUrl} alt="cover"></img>
        <h2>{name}</h2>
        <h3>{artist}</h3>
      </div>
    </>
  );
}

const songStyle = {
  textAlign:'center', 
  cursor: 'pointer'
}

export default Song