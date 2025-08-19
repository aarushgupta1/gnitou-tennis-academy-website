export default function Demo(props) {
    return (
        <iframe title={props.demo.title}
            src={props.demo.src}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; clipboard-write" allowFullScreen>
        </iframe>
    )
}