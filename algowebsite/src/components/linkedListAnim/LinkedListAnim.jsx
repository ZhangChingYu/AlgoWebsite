import React, { useEffect, useState } from "react";
import './linkedListAnim.css';
import SNode from "../sNode/sNode";

const LinkedListAnim = ({initialSize, elemList, createFlag, setCreateFlag}) => {
    const [nodeList, setNodeList] = useState([]);
    const [renderIndex, setRenderIndex] = useState(0);
    const [initNextFlag, setInitNextFlag] = useState(false);        // tells us when to start initialize next pointer

    console.log(createFlag+":"+initNextFlag);
    
    useEffect(()=>{         // create animation
        if(createFlag){
            setRenderIndex(0);
            setInitNextFlag(false);
            let count = 0;
            const nodes = [];
            for(let i = 0 ; i < elemList.length ; i++){
                nodes.push({
                    value: elemList[i],
                    isHead: i==0,
                    next: null
                });
            }
            setNodeList(nodes);
            const intervalId = setInterval(() => {
                setRenderIndex(prevIndex => {
                    const nextIndex = prevIndex + 1;
                    return nextIndex;
                });
                count++;
                if(count >= elemList.length){
                    clearInterval(intervalId);
                    setInitNextFlag(true);
                }
            }, 600);
            // 在组件卸载时清除定时器
            return () => {
                clearInterval(intervalId);
            }
        }
    }, [createFlag]);

    useEffect(()=>{
        if(createFlag==true&&initNextFlag==true){
            let count = 0;
            const intervalId = setInterval(() => {
                setNodeList(preNodeList => {
                    const newNodeList = [...preNodeList];
                    newNodeList[count].next = newNodeList[count+1]; // 直接指向整個node
                    return newNodeList;
                })
                count++;
                if(count >= nodeList.length-1){
                    clearInterval(intervalId);
                    setInitNextFlag(false);
                }
            }, 1000);
            // 在组件卸载时清除定时器
            return () => {
                clearInterval(intervalId);
                setCreateFlag(false);       // new the whole create process is complete
            }
        }
    }, [initNextFlag, createFlag])


    return(
        <div className="linkedList_anim">
            {
                    //Click on "Create" to see how linked list create!
            }
            {nodeList.slice(0, renderIndex).map((_, index)=>(
                <SNode key={"snode_"+index} 
                    value={nodeList[index].value} 
                    isHead={nodeList[index].isHead} 
                    next={nodeList[index].next}
                />
            ))}
        </div>
    )
}

export default LinkedListAnim;