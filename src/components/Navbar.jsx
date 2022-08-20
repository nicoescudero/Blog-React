import '../App.css';
import { Link } from 'react-router-dom';

function Navbar (){
return(
  <nav className='nav'>
    <Link to='/' className='option'>BLOG DEV</Link>
    <div className='options'>
      <Link to='/whoami' className='option'>Acerca de mi</Link>
      <Link to='/social' className='option'>Contactame</Link>
    </div>
  </nav>
);
};
export default Navbar;