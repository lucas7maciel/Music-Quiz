import {Component} from 'react'

class Song extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.res)
    this.coverUrl = this.props.res["image"][3]["#text"]
    this.name = this.props.res["name"]
    this.artist = this.props.res["artist"]["name"]

    this.state = {imgLoaded: false}
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