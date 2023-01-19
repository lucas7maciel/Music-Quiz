import {Component} from 'react'

class Album extends Component {
  constructor(props) {
    super(props)

    this.coverUrl = this.props.res["image"][3]["#text"]
    this.name = this.props.res["name"]
    this.artist = this.props.res["artist"]["name"]

    this.state = {imgLoaded: false}
  }

  render() {
    return (
    <div className="album" style={{margin: 'auto'}} key={this.props.keyValue}>
      <div style={albumStyle}>
        <img src={this.coverUrl} onLoad={() => this.setState({imgLoaded: true})} alt="cover"></img>
        <h2>{this.name}</h2>
        <h4>{this.artist}</h4>
      </div>
    </div>
    )
  }
}

const albumStyle = {
  flex: 1,
  border: "solid",
  backgroundColor: 'gray',
  textAlign:'center', 
  cursor: 'pointer'
}

export default Album