import gnitou_with_student from '../../images/gnitou-with-student.jpg'
import gnitou_with_player from '../../images/gnitou-with-player.jpg'

export default function BioSection() {
    return (
      <section id = "bio-section" className="b-section">
          <h2 id = "bio" className="b-h2">Coach Gnitou... </h2>
          <ul>
            <li className="bio-item">has over 15 years of coaching experience.</li>
            <li className="bio-item">has been a Davis Cup player for the Congo.</li>
            <li className="bio-item">is PTR Level 1, 2, & 3 certified.</li>
            <li className="bio-item">is ITF Level 1 certified.</li>
            <li className="bio-item">is MOT master certified.</li>
          </ul>
          <img className="gnitou-image" src={gnitou_with_player} alt="Coach Gnitou with Player"/>
          <img className="gnitou-image" src={gnitou_with_student} alt="Coach Gnitou with Student"/>
            
      </section>
    )
  }