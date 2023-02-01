import {Component} from 'react'
import {apikey} from '../functions/vars'

class Song extends Component {
  constructor(props) {
    super(props)
    //console.log(this.props.res)
    this.coverUrl = this.props.res["image"][3]["#text"]
    this.name = this.props.res["name"]
    this.artist = this.props.res["artist"]["name"]

    this.state = {imgLoaded: false, rightImage: false}
  }

  componentDidMount() {
    if (!this.state.rightImage && this.props.res) {
      this.updateImage()
    }
  }

  async updateImage() {
    const data = this.props.res
    let newImage, a

    const artist = data["artist"]["name"].replaceAll(" ", "+")
    const track = data["name"].replaceAll(" ", "+")

    const url = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apikey}&artist=${artist}&track=${track}&format=json`
    console.log(url)
    await fetch(url).then((res) => res.json()).
    then((res) => {console.log(res);newImage = res["track"]["album"]["image"][3]["#text"]; a=res});

    this.coverUrl = newImage
    this.setState({rightImage: true, imgLoaded: false})
  }

  render() {
    return (
      <div style={songStyle}>
        <img src={this.coverUrl} onLoad={() => this.setState({imgLoaded: true})} alt="cover"></img>
        <h2>{this.name}</h2>
        <h3>{this.artist}</h3>
      </div>
    )
  }
}

const songStyle = {
  flex: 1,
  textAlign:'center', 
  cursor: 'pointer'
}

export default Song