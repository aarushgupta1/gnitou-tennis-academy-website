import gnitou_with_children from '../../images/gnitou-with-children.jpg'

export default function LessonsSection() {
    return (
      <section id = "lessons-section" className="a-section">
        <h2 id = "lessons" className="a-h2">Learn from Coach Gnitou</h2>
        <ul>
          <li className="lesson-item">Coach Gnitou focuses on developing his students' technique, footwork, & strategy.</li>
          <li className="lesson-item">Coach Gnitou works with both children & adults.</li>
          <li className="lesson-item">Coach Gnitou offers private, semiprivate, & group lessons (up to 4 people & 2 hours).</li>
        </ul>
        <img className="gnitou-image" src={gnitou_with_children} alt="Coach Gnitou with Children"/>
      </section>
    )
  }