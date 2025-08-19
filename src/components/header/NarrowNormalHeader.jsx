import UpperHalfNarrow from "./UpperHalfNarrow"

export default function NarrowNormalHeader() {

    const bars = <p id="drop-down-bars">__<br/>__<br/>__</p>
    return (<UpperHalfNarrow 
              id="narrow-normal-header-div" 
              dropDownIcon="drop-down-bars" 
              icon={bars}
            />
            )
}  