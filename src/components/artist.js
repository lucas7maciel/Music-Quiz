
const Artist = ({res, index}) => {
  console.log(res)
  res = res["topartists"]["artist"][index]
  console.log(res)

  const coverUrl = res["image"][3]["#text"]
  const name = res["name"]

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
  textAlign:'center', 
  cursor: 'pointer'
}

export default Artist