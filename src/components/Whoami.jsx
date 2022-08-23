import '../App.css';
import Navbar from './Navbar';

function Whoami(){
  return (
    <div>
      <Navbar/>
      <main className='content'>
        <p className='text-center'>
        Hola me llamo Nicolás tengo 24 años soy un desarrollador web autodidacta. Actualmente busco insertarme en la industria IT para poder crecer y aprender junto a personas con mayor experiencia, estoy predispuesto a los desafíos y al aprendizaje permanente.
        </p>
      </main>
    </div>
  );
};

export default Whoami;