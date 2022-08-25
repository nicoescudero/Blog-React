import '../App.css';
import Navbar from './Navbar';

function Social(){
  function socialMedia(data){
    if (data === 'linkedin')
    window.open('https://www.linkedin.com/in/nicolas-escudero/');
    else
    window.open('https://github.com/nicoescudero');
  };
  
  return (
    <div>
      <Navbar/>
      <main className='content'>
        <div className='social-options'>
          <button onClick={() => socialMedia('linkedin')} className='btn-social'>
            <img src="/linkedin.png" alt="linkedin" className='icon'/>
          </button>
          <button onClick={() => socialMedia('github')} className='btn-social'>
            <img src="/github.png" alt="github" className='icon'/>
          </button>
        </div>
        <form name='contact' method='post' data-netlify="true" data-netlify-honeypot="bot-field" hidden className='form'>
          <input type="hidden" name="contact" value="contact"/>
          <label htmlFor="name">Nombre</label>
          <input type="text" name='name' className='input-form' maxLength={30}/>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' className='input-form' maxLength={40}/>
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" className='input-form text-area' cols="30" rows="10" maxLength={300}></textarea>
          <button type="submit" className='button-post'>Enviar</button>
        </form>
      </main>
    </div>
  );
};

export default Social;