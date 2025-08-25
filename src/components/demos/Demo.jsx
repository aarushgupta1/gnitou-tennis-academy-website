export default function Demo(props) {
    return (
        <swiper-slide className="demo">
            <iframe title={props.demo.title}
                src={props.demo.src}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; clipboard-write" allowFullScreen>
            </iframe>
        </swiper-slide>
    )
}