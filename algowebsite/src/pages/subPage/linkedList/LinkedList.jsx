import React, { useState } from "react";
import "./linkedList.css";
import { GoBackBtn, CopyRight, SingleListAnim } from "../../../components";

const LinkedList = () => {
    const [state, setState] = useState(0);
    const [listType, setListType] = useState(0);

    const [initialSize, setInitialSize] = useState(4);
    const [createFlag, setCreageFlag] =useState(false);
    // for anim
    const [initSize, setInitSize] = useState(0);
    const [elemList, setElemList] = useState([]);

    const handleCreate = () => {
        if(initialSize===""){
            alert("Please enter numbers only!");
        }else if(initialSize < 0){
            alert("Your Initial Size can not be negitive!\nPlease input number larger than 0");
        }else {
            const tempList = [];
            for(let i = 0; i < initialSize; i++){
                tempList.push(Math.floor(Math.random() * 100) + 1);
            }
            setElemList(tempList);
            setInitSize(initialSize);
            setCreageFlag(true);
        }
    }

    return(
        <div className="subpage">
           <div className="subpage_content">
                <GoBackBtn/>
                <div className="subpage_header">
                    <h1>Linked List</h1>
                </div>
                <div className="subpage_body">
                    <div className="subpage_display">
                        <div className="subpage_menu">
                            <div className="linkedList_options_wrap">
                                <p>Select List Type</p>
                                <div className="linkedList_options" >
                                    <div className="linkedList_option" style={listType===0?{backgroundColor:"var(--color-green-2)", color:"white"}:{}} onClick={()=>{setListType(0)}}>Single</div>
                                    <div className="linkedList_option" style={listType===1?{backgroundColor:"var(--color-green-2)", color:"white"}:{}} onClick={()=>{setListType(1)}}>Double</div>
                                </div>
                            </div>
                            <div className="subpage_menu_item" style={state===0?{color:"var(--color-red)"}:{}} onClick={()=>{setState(0)}}>Create Linked List</div>
                            <div className="subpage_menu_item" style={state===1?{color:"var(--color-red)"}:{}} onClick={()=>{setState(1)}}>Insert New Node</div>
                            <div className="subpage_menu_item" style={state===2?{color:"var(--color-red)"}:{}} onClick={()=>{setState(2)}}>Delete Node</div>
                            <div className="subpage_menu_item" style={state===3?{color:"var(--color-red)"}:{}} onClick={()=>{setState(3)}}>Search Node</div>
                            <div className="subpage_menu_item" style={state===4?{color:"var(--color-red)"}:{}} onClick={()=>{setState(4)}}>Reverse List</div>
                            <div className="subpage_menu_item" style={state===5?{color:"var(--color-red)"}:{}} onClick={()=>{setState(5)}}>Swapping Nodes</div>
                            
                        </div>
                        <div className="subpage_anim" >
                            {listType===0&&<SingleListAnim initialSize={initSize} elemList={elemList} createFlag={createFlag} setCreateFlag={setCreageFlag}/>}
                        </div>
                        <div className="subpage_intro">
                            <div className="subpage_intro_section">
                                
                            </div>
                        </div>
                    </div>
                    <div className="subpage_interact">
                        <div className="subpage_interact_section">
                            <div className="subpage_interact_section">
                                <p className="subpage_interact_p">Initial Size: </p>
                                <input defaultValue={initialSize} type="number" onChange={(input)=>{if(input.target.value!==""){setInitialSize(parseInt(input.target.value))}}}/>
                                <button className="subpage_btn" onClick={handleCreate} disabled={createFlag}>Create</button>
                            </div>
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
           <CopyRight />
        </div>
    )
}

export default LinkedList;