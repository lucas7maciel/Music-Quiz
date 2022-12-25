
const Album = ({res, index}) => {
  res = res[index]

  const coverUrl = res["image"][3]["#text"]
  const name = res["name"]
  const artist = res["artist"]["name"]

  return (
    <>
      <div style={albumStyle}>
        <img src={coverUrl} alt="cover"></img>
        <h2>{name}</h2>
        <h4>{artist}</h4>
      </div>
    </>
  );
}

const albumStyle = {
  border: "solid",
  backgroundColor: 'gray',
  textAlign:'center', 
  cursor: 'pointer'
}

export default Album