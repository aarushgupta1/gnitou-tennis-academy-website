import gta_icon from "../../images/gta-logo.jpg";

export default function UpperHalfNarrow(props) {
    return (
        <div id={props.id} className="flex-element">
          <img className="gta-logo" src={gta_icon} alt="Gnitou Tennis Academy icon" />
          {props.icon}
        </div>
    )
}