import '../HomePgae/homepage.css';
import log from '../../img/jbhunt360.png';
import FormFk from '../Form/formfk';

function HomePage() {
  return (
    <section className="body">
          <div className="form_section">
             <div className='form_block'>
               <a href="https://www.jbhunt.com/" target='_blank' className='brandlink'>
                  <img className="brand-png" src={log} alt="Coyote Logistics" />
               </a>
               <FormFk /> 
               <a href="https://www.jbhunt.com/privacy-policy" target='_blank' className='otherlink'>Privacy Policy</a>
               <a href="https://www.jbhunt.com/ca-privacy-policy" target='_blank' className='otherlink'>California Privacy Policy</a>
             </div>
          </div>
    </section>
  );
}

export default HomePage;
