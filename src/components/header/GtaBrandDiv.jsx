import gta_icon from "/favicon.ico"

export default function GtaBrandDiv() {
  return (
    <div className="gta-brand-div flex-element">
        <a href=""><img className="gta-logo" src={gta_icon} alt="Gnitou Tennis Academy icon" /></a>
        <h1>Gnitou Tennis Academy</h1>
    </div>
  )
}