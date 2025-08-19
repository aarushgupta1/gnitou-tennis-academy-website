import { useState, useEffect } from "react";
import NarrowNormalHeader from "./NarrowNormalHeader"
import DropDownHeader from "./DropDownHeader"
import WideNormalHeader from "./WideNormalHeader"

export default function Header() {
    const [DropDownEnabled, setDropDownEnabled] = useState(false);
    const [IsScreenBig, setIsScreenBig] = useState(window.innerWidth > 900); 


    function resizeHeader() {
      setDropDownEnabled(prevDropDownEnabled => !prevDropDownEnabled)
    }

    useEffect(() => {
        function handleResize() {
          setIsScreenBig(window.innerWidth > 900);
        }
        window.addEventListener('resize', handleResize);
      })
    return (
      <header onClick={resizeHeader}>
            {!IsScreenBig ? (DropDownEnabled ? <DropDownHeader/> : <NarrowNormalHeader/>) : (<WideNormalHeader/>)}
        </header>
      )
  }