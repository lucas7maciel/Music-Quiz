import './albumTeste.css'
import './testCard.css'

const Album = ({res, index}) => {
  console.log("Res:")
  console.log(res)
  res = res["topalbums"]["album"][index]

  const coverUrl = res["image"][3]["#text"]
  const name = res["name"]
  const artist = res["artist"]["name"]
  const playCount = res["playcount"]

  return (
    <>
    <div className="album">
      <div className="front">
          <img src={coverUrl} alt="cover"></img>
          <h2>{name}</h2>
          <h4>{artist}</h4>
      </div>
      <div className="back">
        <h2>Lado de tras</h2>
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