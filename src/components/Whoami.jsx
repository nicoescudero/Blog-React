import '../App.css';
import Navbar from './Navbar';

function Whoami(){
  return (
    <div>
      <Navbar/>
      <main className='content'>
        <p className='text-center'>
          Whoami!
        </p>
      </main>
    </div>
  );
};

export default Whoami;