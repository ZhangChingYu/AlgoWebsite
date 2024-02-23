import React, { useState } from "react";
import "./linkedList.css";
import { useSpring, animated } from '@react-spring/web';

const LinkedList = () => {
    const [isToggle, setToggle] = useState(false);
    const fade = useSpring({
        //opacity: isToggle?1:0,
        backgroundColor: isToggle?"yellow":"green",
        height: isToggle?"100px":"400px"
    })
    
    return(
        <div className="linkedList" style={fade}>
            <animated.div style={fade}>
                <div style={{height:'100px', width:'100px', backgroundColor:"black"}}></div>
            </animated.div>
            <button onClick={()=>setToggle(!isToggle)}>Toggle</button>
        </div>
    )
}

export default LinkedList;