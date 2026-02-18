import gta_icon from "/favicon.ico"

export default function UpperHalfNarrow(props) {
    return (
        <div id = {props.id}>
          <a href=""><img className="gta-logo" src={gta_icon} alt="Gnitou Tennis Academy icon" /></a>
          {props.icon}
        </div>
    )
}