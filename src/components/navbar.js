import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const getBack = () => navigate("/")

  return (
    <div style={containerStyle}>
      <img onClick={getBack} src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png" alt="Home" style={iconStyle}></img>
      <h1 style={titleStyle}>Music Quiz</h1>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Repository" style={iconStyle}></img>
      </a>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',

  width: '75%',
  margin: 'auto',

  border: '5px solid black',
  borderBottomLeftRadius: 11,
  borderBottomRightRadius: 11,

  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
}

const titleStyle = {
  flex: '80%'
}

const iconStyle = {
  flex: '10%',

  maxWidth: 60,
  maxHeight: 60,

  cursor: 'pointer',
  filter: 'invert(100%)'
}

export default Navbar