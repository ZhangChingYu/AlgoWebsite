import React, { useEffect, useState } from "react";
import "./arrayAnim.css";
import { animated, useSpring } from '@react-spring/web';

var pos = 2; // 假設插入位置是2

const ArrayAnim = ({elemList, setElemList, elemSize, setElemSize, insertVal, insertPos, insertFlag, setInsertFlag, removeIndex, removeFlag, setRemoveFlag, searchVal, searchFlag, setSearchFlag}) => {
    const entryAnim = useSpring({from:{opacity:0}, to:{opacity:1}});
    const insertAnim = useSpring({from:{backgroundColor:"var(--color-blue-4)"}, to:{backgroundColor:"var(--color-red-3)"}});
    const removeAnim = useSpring({from:{backgroundColor:"var(--color-blue-4)"}, to:{backgroundColor:"var(--color-red-3)"}});
    const searchAnim = useSpring({from:{backgroundColor:"var(--color-blue-4)"}, to:{backgroundColor:"var(--color-red-3)"}});
    const defaultAnim = useSpring()
    const [accessIndex, setAccessIndex] = useState();

    useEffect(()=>{
        if(searchFlag){
            // search element from index 0 to the end of all values
            let count = 0;
            const intervalId = setInterval(()=>{
                if(count>=elemSize){
                    // stop and return not found
                    clearInterval(intervalId);
                    setSearchFlag(false);
                    alert("Value " + searchVal + " is not in the array");
                    setAccessIndex();
                }
                setAccessIndex(count);
                console.log("Checking index " + (count));
                if(elemList[count]===searchVal){
                    // found it and return index
                    setTimeout(() => {
                        setAccessIndex();
                        setSearchFlag(false);
                        alert("Found " + searchVal + " at index: " + count);
                    }, 1500);
                    clearInterval(intervalId);
                }
                count++;
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [searchFlag])

    useEffect(()=>{
        if(removeFlag){
            // remove the target element
            setAccessIndex(removeIndex);
            setElemList(prevArray=> {
                const newArray = [...prevArray];
                newArray[removeIndex] = null;
                return newArray;
            })
            // move the other elements forward
            let count = removeIndex;
            const intervalId = setInterval(()=>{
                console.log("Moving index " + (count));
                setAccessIndex(count);
                setElemList(prevArray => {
                    const newArray = [...prevArray];
                    newArray[count] = newArray[count+1];
                    newArray[count+1] = null;
                    return newArray;
                });
                count ++;
                if(count === elemSize-1){
                    setTimeout(() => {
                        setAccessIndex();
                        setElemSize(elemSize-1);
                        setRemoveFlag(false);       // stop remove
                    }, 1500);
                    clearInterval(intervalId);
                }
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [removeFlag])

    useEffect(()=>{
        if(insertFlag){
            let count = elemSize-1;
            const intervalId = setInterval(()=>{
                setAccessIndex(count+1);
                setElemList(prevArray => {
                    console.log("Moving index " + (count));
                    const newArray = [...prevArray];
                    newArray[count+1] = elemList[count];
                    newArray[count] = null;
                    return newArray;
                });
                count--;
                if (count === insertPos-1){
                     // stop insert
                    setElemSize(elemSize+1);
                    // insert the number
                    setTimeout(() => {
                        setInsertFlag(false);
                        setElemList(prevArray => {
                            const newArray = [...prevArray];
                            newArray[insertPos] = insertVal;
                            return newArray;
                        })
                        setAccessIndex(undefined);
                    }, 500);
                    clearInterval(intervalId);
                }
            },1000);
            return () => clearInterval(intervalId);
        }
    }, [insertFlag])

    const elems = Array.from({ length: elemList.length }, (_, index) => (
        <div key={"array_ele_"+index} className="array_anim_elem_wrap">
            <animated.div className="array_anim_value" 
            style={{
                ...(accessIndex === index && insertFlag ? insertAnim : defaultAnim),
                ...(accessIndex === index && removeFlag ? removeAnim : defaultAnim),
                ...(accessIndex === index && searchFlag ? searchAnim : defaultAnim),
              }}>
                {elemList[index]}
            </animated.div>
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