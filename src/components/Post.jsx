import '../App.css';
import ReactMarkdown from 'react-markdown'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function Post(){
  const locations = useLocation();
  const title = locations.state.title;
  const body = locations.state.body;
  async function coffee(){
    const response = await axios({
      method:'post',
      url:'/create-order'
    });
    window.location.href = response.data.body.links[1].href;
  }
  return (
    <div className="App">
       <nav className='nav'>
        <Link to='/' className='option'>DEV</Link>
        <div className='options'>
          <Link to='/whoami' className='option'>Whoami</Link>
          <Link to='/social' className='option'>Social Media</Link>
        </div>
      </nav>
      <main className='content markdown'>
        <h1 className='title'>{title}</h1>
        <ReactMarkdown children={body} className='markdown'/>
        <br/>
        <hr />
        <br/>
        <button onClick={()=>coffee()} className='button-post btn-coffee'>Give me a coffee</button>
      </main>
    </div>
  );
};

export default Post;