import Demo from "./Demo"
import demosData from "../../demosData"

export default function DemosSection() {
    const demos = demosData.map(demo =>
      <Demo demo={demo}/>
    )
    return (
      <section id = "demos-section" className="a-section">
        <h2 id = "demos" className="a-h2">See Coach Gnitou's Coaching</h2>
        {demos}
      </section>
    )
  }