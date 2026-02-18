import facebook from '../../images/facebook.jpg'
import instagram from '../../images/instagram.jpg'
import tiktok from '../../images/tiktok.jpg'
import youtube from '../../images/youtube.jpg'
import Social from './Social'

export default function Footer() {
    return (
      <footer className="flex-element">
        <div id="socials">
            <Social 
              link="https://www.instagram.com/gnitou_tennis_academy/" 
              pic={instagram}
              alt="instagram icon"
            />
            <Social 
              link="https://www.facebook.com/Gnitou-tennis-academy-105739311342289"
              pic={facebook}
              alt="facebook icon"
            />
            <Social 
              link="https://www.youtube.com/channel/UCp7OAXdH22dV5FRyiDGvH1A"
              pic={youtube}
              alt="youtube icon"
            />
            <Social 
              link="https://www.tiktok.com/@gnitoutennisacademy"
              pic={tiktok}
              alt="tiktok icon"
            />  
        </div>
        <div id="contact-gnitou" className= "flex-element">
            <a href="tel:772-626-5504" target = "_blank" rel="noopener noreferrer" className = "contact-icon">772-626-5504</a> 
            <a href="mailto:gnitou_peity@yahoo.com" target = "_blank" rel="noopener noreferrer" className = "contact-icon">gnitou_peity@yahoo.com</a>
        </div>
      </footer>
    )
  }