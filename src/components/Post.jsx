import '../App.css';
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
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
    window.location.href=response.data.body.links[1].href;
  }
  
  return (
    <div className="App">
      <Navbar/>
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