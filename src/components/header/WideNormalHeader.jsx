import GtaBrandDiv from "./GtaBrandDiv"
import Nav from "./Nav"


export default function WideNormalHeader(props) {
    return (<div id="wide-normal-header-div" className={props.className}>
                <GtaBrandDiv/>
                <Nav nav="normal-nav" className="flex-element" aClassName="normal-nav-item"/>
            </div>
            )
}