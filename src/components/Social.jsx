import '../App.css';
import Navbar from './Navbar';
import {useState} from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

function Social(){
  const [sent,setSent] = useState(0);
  const {register,handleSubmit,formState: { errors }} = useForm();

  async function sendMail (data,e){
    const response = await axios.post('https://blogapi-production-ba40.up.railway.app/send-email',{
        name: data.name,
        email: data.email,
        message: data.message,
    });
    if(response.status === 200)
    setSent(1);
    else
    setSent(2);
    e.target.reset();
  }

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
        <form onSubmit={handleSubmit(sendMail)} className='form'>
          <label htmlFor="name">Nombre</label>
          <input type="text" name='name' className='input-form' maxLength={30}
          {...register('name', { required: {value:true,message:'(*) Completa el campo Nombre'}})}/>
          <span>{errors.name?.message}</span>
          
          <label htmlFor="email">Email</label>
          <input type="email" name='email' className='input-form' maxLength={40}
          {...register('email', { required: {value:true,message:'(*) Completa el campo Email'}})}/>
          <span>{errors.email?.message}</span>

          <label htmlFor="message">Mensaje</label>
          <textarea name="message" className='input-form text-area' cols="30" rows="10" maxLength={300}
          {...register('message', { required: {value:true,message:'(*) Completa el campo Mensaje'}})}/>
          <span>{errors.message?.message}</span>

          <button type="submit" className='button-post'>Enviar</button>
        </form>
        {(sent === 1 && <p className='text-center'>Mensaje enviado</p>)}
        {(sent === 2 && <p className='text-center'>Ocurrio un error</p>)}
      </main>
    </div>
  );
};

export default Social;