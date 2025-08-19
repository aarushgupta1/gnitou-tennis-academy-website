export default function Nav(props) {
  return (<div id={props.nav}>
              <ul className={props.className}>
                <li><a className={props.aClassName} href="#lessons">Lessons</a></li>
                <li><a className={props.aClassName} href="#demos">Demos</a></li>
                <li><a className={props.aClassName} href="#bio">Bio</a></li>
                <li><a className={props.aClassName} href="#testimonials">Testimonials</a></li>
                <li><a className={props.aClassName} href="#interest-form">Interest Form</a></li>
              </ul>
            </div>
            )
}