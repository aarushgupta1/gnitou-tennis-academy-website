export default function Testimonial(props) {
    return (
            <swiper-slide className="testimonial">
                <p className="review"><strong className="quotes">"</strong>{props.testimonial.review}<strong className="quotes">"</strong></p>
                <p className="rating"><span role="img" aria-label="rating">{props.testimonial.rating}</span></p>
                <p className="reviewer flex-element"><i>{props.testimonial.reviewer}</i></p>
            </swiper-slide>
    )
}