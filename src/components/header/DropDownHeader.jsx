import UpperHalfNarrow from "./UpperHalfNarrow"
import Nav from "./Nav"

export default function DropDownHeader() {
    const x_icon = <p>&#x2715;</p>
    return (<div id="drop-down-header-div" className="flex-element">  
                <UpperHalfNarrow
                  id="drop-down-upper-half"
                  dropDownIcon="drop-down-x"
                  icon={x_icon}
                />
                <Nav nav="drop-down-nav" aClassName="drop-down-nav-item"/>
              </div>
            )
}