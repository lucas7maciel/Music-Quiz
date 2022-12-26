
const Artist = ({res, index}) => {
  res = res["topartists"]["artist"][index]

  const coverUrl = res["image"][3]["#text"]
  const name = res["name"]
  console.log(`Playcount ${name}: ${res["playcount"]}`)

  return (
    <>
      <div style={artistStyle}>
        <img src={coverUrl} alt="cover"></img>
        <h2>{name}</h2>
      </div>
    </>
  );
}

const artistStyle = {
  flex: 1,
  textAlign:'center', 
  cursor: 'pointer'
}

export default Artist