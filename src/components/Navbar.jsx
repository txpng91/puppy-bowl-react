import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'aliceblue',
  fontSize: '2rem',
  fontWeight: '600',
};

function Navbar() {
  return (
    <div className='navbar'>
      <Link style={linkStyle} to={'/'}>
        Home
      </Link>
    </div>
  );
}

export default Navbar;
