import GtaBrandDiv from "./GtaBrandDiv"
import Nav from "./Nav"


export default function WideNormalHeader() {
    return (<div id="wide-normal-header-div" className="flex-element">
                <GtaBrandDiv/>
                <Nav nav="normal-nav" className="flex-element" aClassName="normal-nav-item"/>
            </div>
            )
}