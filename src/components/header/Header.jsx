import { useState, useEffect } from "react";
import WideNormalHeader from "./WideNormalHeader"
import UpperHalfNarrow from "./UpperHalfNarrow"
import Nav from "./Nav"

export default function Header() {
    const [DropDownEnabled, setDropDownEnabled] = useState(false);
    const [IsScreenWide, setIsScreenWide] = useState(window.innerWidth > 900); 
    const x_icon = <p onClick={changeDropDownEnabled} id="drop-down-x">&#x2715;</p>
    const bars = <p onClick={changeDropDownEnabled} id="drop-down-bars">__<br/>__<br/>__</p>
    function changeDropDownEnabled() {
      if (!IsScreenWide) {
        setDropDownEnabled(prevDropDownEnabled => !prevDropDownEnabled)
      }
    }

    useEffect(() => {
        function handleResize() {
          setIsScreenWide(window.innerWidth > 900);
        }
        window.addEventListener('resize', handleResize);
      })
    return (
      <header>
            {IsScreenWide ? <WideNormalHeader/> : 
            
            (<>
            <div id="drop-down-header-div" className={`header-div ${DropDownEnabled ? "visible" : ""}`}>  
                <UpperHalfNarrow
                  id="drop-down-upper-half"
                  icon={x_icon}
                />

                <div id="drop-down-nav">
                  <ul>
                    <li><a onClick={changeDropDownEnabled} className="drop-down-nav-item" href="#lessons">Lessons</a></li>
                    <li><a onClick={changeDropDownEnabled} className="drop-down-nav-item" href="#demos">Demos</a></li>
                    <li><a onClick={changeDropDownEnabled} className="drop-down-nav-item" href="#bio">Bio</a></li>
                    <li><a onClick={changeDropDownEnabled} className="drop-down-nav-item" href="#testimonials">Testimonials</a></li>
                    <li><a onClick={changeDropDownEnabled} className="drop-down-nav-item" href="#interest-form">Interest Form</a></li>
                  </ul>
                </div>
            </div>
            <div className={`header-div ${!DropDownEnabled ? "visible" : ""}`} >
              <UpperHalfNarrow 
                            id="narrow-normal-header-div"
                            icon={bars}
                        />
            </div>
            </>
            )}
        </header>
      )
  }