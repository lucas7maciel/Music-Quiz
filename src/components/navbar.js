import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const getBack = () => navigate("/")

  return (
    <>
      <div style={containerStyle}>
        <img onClick={getBack} src="https://cdn-icons-png.flaticon.com/512/4999/4999606.png" style={homeStyle}></img>
        <h1 style={titleStyle}>Music Quiz</h1>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111612.png" style={githubStyle}></img>
        </a>
      </div>
    </>
  );
}

const containerStyle = {
  display: 'flex',

  width: '75%',
  margin: 'auto',
  backgroundColor: 'black',

  border: '5px solid black',
  borderBottomLeftRadius: 11,
  borderBottomRightRadius: 11,

  textAlign: 'center',
  alignItems: 'center',
  color: 'white',
}

const titleStyle = {
  flex: '80%'
}

const homeStyle = {
  flex: '10%',
  maxWidth: 60,
  maxHeight: 60,

  cursor: 'pointer'
}

const githubStyle = {
  flex: '10%',
  maxWidth: 60,
  maxHeight: 60,

  cursor: 'pointer'
}

export default Navbar