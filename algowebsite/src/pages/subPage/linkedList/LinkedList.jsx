import React, { useState } from "react";
import "./linkedList.css";
import { GoBackBtn } from "../../../components";

const LinkedList = () => {
    const [state, setState] = useState(0);

    return(
        <div className="linkedList">
           <div className="subpage_content">
                <GoBackBtn/>
                <div className="subpage_header">
                    <h1>Linked List</h1>
                </div>
                <div className="subpage_body">
                    <div className="subpage_display">
                        <div className="subpage_menu">
                            <div className="subpage_menu_item" style={state===0?{color:"var(--color-red)"}:{}} onClick={()=>{setState(0)}}>Create Linked List</div>
                            <div className="subpage_menu_item" style={state===1?{color:"var(--color-red)"}:{}} onClick={()=>{setState(1)}}>Insert New Node</div>
                            <div className="subpage_menu_item" style={state===2?{color:"var(--color-red)"}:{}} onClick={()=>{setState(2)}}>Delete Node</div>
                            <div className="subpage_menu_item" style={state===3?{color:"var(--color-red)"}:{}} onClick={()=>{setState(3)}}>Search Node</div>
                            <div className="subpage_menu_item" style={state===4?{color:"var(--color-red)"}:{}} onClick={()=>{setState(4)}}>Reverse List</div>
                            <div className="subpage_menu_item" style={state===5?{color:"var(--color-red)"}:{}} onClick={()=>{setState(5)}}>Swapping Nodes</div>
                        </div>
                        <div className="subpage_anim" >
                            
                        </div>
                        <div className="subpage_intro">
                            
                        </div>
                    </div>
                    <div className="subpage_interact">
                        <div className="subpage_interact_section">
                            
                        </div>
                    </div>
                    <div className="subpage_intro_wrap">
                        <div className="subpage_intro_section">

                        </div>
                        <div className="code_holder">

                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default LinkedList;