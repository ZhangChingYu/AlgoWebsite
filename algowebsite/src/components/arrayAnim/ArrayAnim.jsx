import React, { useEffect, useState } from "react";
import "./arrayAnim.css";
import { animated, useSpring } from '@react-spring/web';

var pos = 2; // 假設插入位置是2

const ArrayAnim = ({elemList, setElemList, elemSize, setElemSize, insertVal, insertPos, insertFlag, setInsertFlag, removeIndex, removeFlag, setRemoveFlag, searchVal}) => {
    const entryAnim = useSpring({from:{opacity:0}, to:{opacity:1}});
    const insertAnim = useSpring({from:{x:0}, to:{x:50}})

    useEffect(()=>{
        if(removeFlag){
            // remove the target element
            setElemList(prevArray=> {
                const newArray = [...prevArray];
                newArray[removeIndex] = null;
                return newArray;
            })
            // move the other elements forward
            let count = removeIndex;
            const intervalId = setInterval(()=>{
                setElemList(prevArray => {
                    const newArray = [...prevArray];
                    newArray[count] = newArray[count+1];
                    newArray[count+1] = null;
                    return newArray;
                });
                count ++;
                if(count === elemSize-1){
                    setElemSize(elemSize-1);
                    clearInterval(intervalId);
                    setRemoveFlag(false);       // stop remove
                }
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [removeFlag])

    useEffect(()=>{
        if(insertFlag){
            let count = elemSize-1;
            const intervalId = setInterval(()=>{
                console.log("Moving index " + (count));
                setElemList(prevArray => {
                    const newArray = [...prevArray];
                    newArray[count+1] = elemList[count];
                    newArray[count] = null;
                    return newArray;
                });
                count--;
                if (count === insertPos-1){
                    setElemSize(elemSize+1);
                    clearInterval(intervalId);
                    setInsertFlag(false); // stop insert

                    // insert the number
                    setTimeout(() => {
                        console.log("Moving index " + (count));
                        setElemList(prevArray => {
                            const newArray = [...prevArray];
                            newArray[insertPos] = insertVal;
                            return newArray;
                        })
                    }, 500);
                }
            },1000);
            return () => clearInterval(intervalId);
        }
    }, [insertFlag])

    const elems = Array.from({ length: elemList.length }, (_, index) => (
        <div key={"array_ele_"+index} className="array_anim_elem_wrap">
            <div className="array_anim_value">{elemList[index]}</div>
            <p style={{color:"var(--color-red)"}}>{index}</p>
        </div>
    ));

    return(
        <div className="array_anim">
            <animated.div className="array_anim_wrap" style={entryAnim}>
                {elems}
            </animated.div>
        </div>
    )
}

export default ArrayAnim;