import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Home(){
  const [posts,setPosts] = useState(0);
  
  useEffect(()=>{
    getPost();
  },[]);
  async function getPost(){
    const response = await axios({
      method:'get',
      url:'/posts/all',
    });
    setPosts(response.data.body);
  };

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
      {
          (posts.length > 0)?
          <div>
            <p>Last Posts</p>
            <div className='post-list'>
            {
              posts.map(item => {
              return <Link to={'/'+item._id} key={item._id} state={{title:item.title,body:item.body}} className='button-post'>{item.title}</Link>
              })
            }
          </div>
          </div>
          :
          <div>
            <p>No post found</p>
          </div>
        }
      </main>
    </div>
  );
};

export default Home;