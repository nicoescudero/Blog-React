import '../App.css';
import ReactMarkdown from 'react-markdown'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function Post(){
  const locations = useLocation();
  const title = locations.state.title;
  const body = locations.state.body;
  const date = locations.state.date;
  async function coffee(){
    const response = await axios({
      method:'post',
      url:'/create-order'
    });
    window.open(response.data.body.links[1].href);
  }
  
  return (
    <div className="App">
       <nav className='nav'>
        <Link to='/' className='option'>BLOG DEV</Link>
        <div className='options'>
          <Link to='/whoami' className='option'>Acerca de mi</Link>
          <Link to='/social' className='option'>Contactame</Link>
        </div>
      </nav>
      <main className='content markdown'>
        <p>{date}</p>
        <h1 className='title'>{title}</h1>
        <ReactMarkdown children={body} className='markdown'/>
        <br/>
        <hr />
        <br/>
        <button onClick={()=>coffee()} className='button-post btn-coffee'>
          <p>Invitame un cafe</p>
          <img src="/coffee.png" alt="" className='icon-coffee'/>
          <img src="/paypal.png" alt="" className='icon-coffee'/>
        </button>
      </main>
    </div>
  );
};

export default Post;