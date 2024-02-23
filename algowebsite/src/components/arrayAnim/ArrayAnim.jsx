import React from "react";
import "./arrayAnim.css";
import { animated, useSpring } from '@react-spring/web';

const ArrayAnim = ({elemList, insertVal, insertPos, removeVal, searchVal}) => {
    const entryAnim = useSpring({from:{opacity:0}, to:{opacity:1}});

    const elems = Array.from({ length: elemList.length }, (_, index) => (
        <div key={"array_ele_"+index} className="array_anim_elem_wrap">
            <div className="array_anim_value">{elemList[index]}</div>
            <p style={{color:"var(--color-red)"}}>{index}</p>
        </div>
    ));

    function handleInsert(){
        
    }

    return(
        <div className="array_anim">
            <animated.div className="array_anim_wrap" style={entryAnim}>
                {elems}
            </animated.div>
        </div>
    )
}

export default ArrayAnim;