import {Component} from 'react'

class Artist extends Component {
  constructor(props) {
    super(props)

    this.coverUrl = this.props.res["image"][3]["#text"]
    this.name = this.props.res["name"]

    this.state = {imgLoaded: false}
  }

  render() {
    return (
    <div style={artistStyle}>
      <img src={this.coverUrl} onLoad={() => this.setState({imgLoaded: true})} alt="cover"></img>
      <h2>{this.name}</h2>
    </div>
    )
  }
}

const artistStyle = {
  flex: 1,

  maxWidth: 300,

  border: 'solid',
  backgroundColor: 'gray',
  textAlign:'center', 
  cursor: 'pointer'
}

export default Artist