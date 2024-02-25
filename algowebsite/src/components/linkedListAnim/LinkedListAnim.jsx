import React, { useEffect, useRef } from "react";
import './linkedListAnim.css';
import { FaArrowDown } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const LinkedListAnim = ({initialSize, createFlag, setCreateFlag}) => {
    const elementHeightRef = useRef(null);
    
    useEffect(()=>{         // create animation
        if(createFlag){

        }
    }, [createFlag]);

    return(
        <div className="linkedList_anim">
            {
                    //Click on "Create" to see how linked list create!
            }
            <div className="single_list_node_ele">
                <div className="single_list_node_head" ref={elementHeightRef}>
                    <div>
                        <p>Head</p>
                        <FaArrowDown size={24} />
                    </div>
                    <div></div>
                </div>
                <div className="single_list_node">
                    <div className="single_list_node_data">17</div>
                    <div className="single_list_node_next"><HiArrowNarrowRight className="single_list_pointer" size={40}/></div>
                </div>
                <div style={{width:"96px", height:""}}></div>
            </div>
            <div className="single_list_node_next_to">null</div>
        </div>
    )
}

export default LinkedListAnim;