import React from "react";
import "./backArrow.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
    const navigator = useNavigate();
    return(
        <div className="goBack">
            <FaArrowLeft className="arrow_back" size={30} onClick={()=>{navigator("/")}}/>
        </div>
    )
}

export default BackArrow;