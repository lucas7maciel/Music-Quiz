
const Navbar = () => {
  return (
    <>
      <div style={containerStyle}>
        <h1>Music Quiz</h1>
      </div>
    </>
  );
}

const containerStyle = {
  width: '75%',
  margin: 'auto',
  backgroundColor: 'black',

  border: '5px solid black',
  borderBottomLeftRadius: 11,
  borderBottomRightRadius: 11,

  textAlign: 'center',
  color: 'white',
}

export default Navbar