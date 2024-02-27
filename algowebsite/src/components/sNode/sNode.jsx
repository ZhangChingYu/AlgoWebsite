import React from "react";
import './sNode.css';
import { FaArrowDown } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const sNode = ({value, isHead, next}) => {
    return(
        <div className="single_list_node_ele">
            <div className="single_list_node_head" style={next===null?{width:"129px"}:{width:"76px"}}>
                {isHead&&<div>
                    <p>Head</p>
                        <FaArrowDown size={24} />
                    </div>}
                <div style={{height:"52px"}}></div>
            </div>
            <div className="single_list_node">
                <div className="single_list_node_data">{value}</div>
                <div className="single_list_node_next"><HiArrowNarrowRight className="single_list_pointer" size={40}/></div>
                {next===null&&<div className="single_list_node_next_toNull">null</div>}
            </div>
            <div style={next===null?{width:"129px", height:"55px"}:{width:"76px", height:"55px"}}></div>
        </div>
    )
}

export default sNode;