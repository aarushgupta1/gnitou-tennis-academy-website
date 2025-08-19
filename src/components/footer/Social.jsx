export default function Social(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.pic}
                alt={props.alt}
                className="social-icon"
            />
        </a>
    )
}