import gta_icon from "../../images/gta-logo.jpg";

export default function GtaBrandDiv() {
  return (
    <div className="gta-brand-div flex-element">
        <img className="gta-logo" src={gta_icon} alt="Gnitou Tennis Academy icon" />
        <h1>Gnitou Tennis Academy</h1>
    </div>
  )
}