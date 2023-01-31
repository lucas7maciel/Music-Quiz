import {Component} from 'react'

class Artist extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.res)
    this.coverUrl = this.props.res["image"][3]["#text"]
    this.name = this.props.res["name"]

    this.state = {imgLoaded: false}
  }

  async componentDidMount() {
    console.log("Fazer outra request artista")
  }

  render() {
    return (
      <>
        <div style={artistStyle}>
          <img src={this.coverUrl} onLoad={() => this.setState({imgLoaded: true})} alt="cover"></img>
          <h2>{this.name}</h2>
        </div>
      </>
    )
  }
}

/*const Artist = ({res, index}) => {
  res = res["topartists"]["artist"][index]

  const coverUrl = res["image"][3]["#text"]
  const name = res["name"]
  console.log(`Playcount ${name}: ${res["playcount"]}`)
  console.log(JSON.stringify(res))

  return (
    <>
      <div style={artistStyle}>
        <img src={coverUrl} onLoad={() => this.setState({imgLoaded: true})} alt="cover"></img>
        <h2>{name}</h2>
      </div>
    </>
  );
}*/

const artistStyle = {
  flex: 1,
  textAlign:'center', 
  cursor: 'pointer'
}

export default Artist