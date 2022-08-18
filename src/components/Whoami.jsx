import '../App.css';
import {Link} from 'react-router-dom';
function Home(){
  return (
    <div>
      <nav className='nav'>
        <Link to='/' className='option'>DEV</Link>
        <div className='options'>
          <Link to='/whoami' className='option'>Whoami</Link>
          <Link to='/social' className='option'>Social Media</Link>
        </div>
      </nav>
      <main className='content'>
        <p className='text-center'>Whoami!!</p>
      </main>
    </div>
  );
};

export default Home;