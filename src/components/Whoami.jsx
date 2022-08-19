import '../App.css';
import {Link} from 'react-router-dom';
function Home(){
  //https://blogapi-production-ba40.up.railway.app/
  return (
    <div>
      <nav className='nav'>
        <Link to='/' className='option'>BLOG DEV</Link>
        <div className='options'>
          <Link to='/whoami' className='option'>Acerca de mi</Link>
          <Link to='/social' className='option'>Contactame</Link>
        </div>
      </nav>
      <main className='content'>
        <p className='text-center'>
          Whoami!
        </p>
      </main>
    </div>
  );
};

export default Home;