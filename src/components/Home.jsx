import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Home(){
  const [posts,setPosts] = useState(0);
  
  useEffect(()=>{
    getPost();
  },[]);
  async function getPost(){
    const response = await axios({
      method:'get',
      url:'https://blogapi-production-ba40.up.railway.app/posts/all',
    });
    setPosts(response.data.body.reverse());
  };

  return (
    <div>
      <Navbar/>
      <main className='content'>
      {
          (posts.length > 0)?
          <div>
            <p>Ultimos Posts</p>
            <div className='post-list'>
            {
              posts.map(item => {
              return <Link to={'/'+item._id} key={item._id} state={{title:item.title,body:item.body, date: item.date}} className='posts'>
                <img src={`${item.image}`} alt="" className='post-image'/>
                <p className='title-post'>{item.title}</p>
                </Link>
              })
            }
          </div>
          </div>
          :
          <div>
            <p>No hay posts 🙁</p>
          </div>
        }
      </main>
    </div>
  );
};

export default Home;