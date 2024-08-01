import { useState } from "react";
function Box() {
    const [click, setClick] = useState(false);
    const redOrBlue = click ? "red" : "blue";
    function clicking() {
        if(!click) setClick(true);
        else setClick(false);

        //setClick(!click)
    }
    return (
        <div className="box" onClick={clicking} style = {{backgroundColor: redOrBlue}}></div>
    )
}

export default Box;