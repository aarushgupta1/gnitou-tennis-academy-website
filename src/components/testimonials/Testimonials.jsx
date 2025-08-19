import Testimonial from "./Testimonial"
import testimonialsData from "../../testimonialsData"

export default function TestimonialsSection() {
    const testimonials = testimonialsData.map(testimonial => 
      <Testimonial testimonial={testimonial}
      />
    )
    return (
      <section id = "testimonials-section" className="b-section">
         <h2 id = "testimonials" className="b-h2">What Students Are Saying About Coach Gnitou</h2>
         {testimonials}
      </section>
    )
  }