import {Component} from 'react'

class Album extends Component {
  constructor(props) {
    super(props)
    console.log("Construtor de album rodou")
    this.state = {flip: false}

    this.res = this.props.res["topalbums"]["album"][this.props.index]

    this.coverUrl = this.res["image"][3]["#text"]
    this.name = this.res["name"]
    this.artist = this.res["artist"]["name"]
    this.playCount = this.res["playcount"]
  }

  render() {
    return (
    <div className="container" style={{margin: 'auto'}}>
      <div style={albumStyle}>
        <img src={this.coverUrl} alt="cover"></img>
        <h2>{this.name}</h2>
        <h4>{this.artist}</h4>
      </div>
    </div>
    )
  }
}

/*const Album = ({res, index}) => {
  res = res["topalbums"]["album"][index]
  const [a, setA] = useState(true)

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
}*/

const albumStyle = {
  flex: 1,
  border: "solid",
  backgroundColor: 'gray',
  textAlign:'center', 
  cursor: 'pointer'
}

export default Album