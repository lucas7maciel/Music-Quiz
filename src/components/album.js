
const Album = ({res, index}) => {
  res = res["topalbums"]["album"][index]

  const coverUrl = res["image"][3]["#text"]
  const name = res["name"]
  const artist = res["artist"]["name"]
  const playCount = res["playcount"]

  return (
    <>
    <div className="container" style={{margin: 'auto'}}>
      <div style={albumStyle}>
        <img src={coverUrl} alt="cover"></img>
        <h2>{name}</h2>
        <h4>{artist}</h4>
      </div>
    </div>

    </>
  );
}

const albumStyle = {
  flex: 1,
  border: "solid",
  backgroundColor: 'gray',
  textAlign:'center', 
  cursor: 'pointer'
}

export default Album