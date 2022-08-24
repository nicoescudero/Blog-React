import '../App.css';
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Post(){
  const locations = useLocation();
  const title = locations.state.title;
  const body = locations.state.body;
  const date = locations.state.date;
  async function coffee(){
    const response = await axios({
      method:'post',
      url:'https://blogapi-production-ba40.up.railway.app/create-order'
    });
    window.location.href=response.data.body.links[1].href;
  }
  
  return (
    <div className="App">
      <Navbar/>
      <main className='content markdown'>
        <p>{date}</p>
        <h1 className='title'>{title}</h1>
        <ReactMarkdown children={body} className='markdown' 
          components={{
          code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={atelierLakesideDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )}
        }}/>
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