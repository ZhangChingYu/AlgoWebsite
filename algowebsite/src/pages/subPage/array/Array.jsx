import React, { useState } from "react";
import './array.css';
import { CopyRight, ArrayAnim } from '../../../components';
import Gist from 'react-gist';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArrayIntroP, ArrayEmplP } from '../../../components/array';

const ArrayPage = () => {
    const navigator = useNavigate();

    const [state, setState] = useState(0);
    const [code, setCode] = useState(0);
    const [initialSize, setInitialSize] = useState(8);
    const [initialEleSize, setInitialEleSize] = useState(4);
    const [insertPos, setInsertPos] = useState(0);
    const [insertVal, setInsertVal] = useState(3);
    const [removeIndex, setRemoveIndex] = useState(0);
    const [searchVal, setSearchVal] = useState(0);
    // initial list
    const [elemList, setElemList] = useState([12, 3, 7, 93, null, null, null, null]);
    const [insertFlag, setInsertFlag] = useState(false);
    const [removeFlag, setRemoveFlag] = useState(false);
    const [searchFlag, setSearchFlag] = useState(false);


    const handleCreate = () => {
        const list = [];
        if(initialSize===""||initialEleSize===""){
            alert("Please input numbers only!");
        }else {
            if(initialSize<0||initialEleSize<0){
                alert("The number you input must not be smaller than 0");
            }else {
                if(initialSize<initialEleSize){
                    alert("Element Size must not exceeds Array Size!")
                }else{
                    for (let i = 0; i < initialSize; i++) {
                        list.push(i<initialEleSize?(Math.floor(Math.random() * 100) + 1):null);
                    }
                    setElemList(list);
                }
            }
        }
    }

    const handleEmpty = () => {
        setInitialEleSize(0);
        const tempList = elemList;
        for(let i = 0 ; i < initialEleSize; i++){
            tempList[i] = null;
        }
    }

    const handleAppend = () => {
        if(insertVal===""){
            alert("Please input numbers only!");
        }else{
            if(initialEleSize<initialSize){
                const tempList = elemList;
                tempList[initialEleSize] = insertVal;
                setElemList(tempList);
                setInitialEleSize(initialEleSize+1);
            }
        }
    }

    const handleInsert = () => {
        if(insertPos<0||insertPos>initialEleSize){
            alert("Your input index is out of boundary")
        }
        if(insertVal===""){
            alert("Please input numbers only!");
        }else{
            if(initialEleSize<initialSize){
                // start inserting
                setInsertVal(insertVal);
                setInsertFlag(true)
            }
        }
    }

    const handleRemove = () =>{
        if(removeIndex===""){
            alert("Please input numbers only!");
        }else{
            if(removeIndex>elemList.length-1||removeIndex<0){
                alert("Your input index is out of boundary")
            }else if(removeIndex>initialEleSize-1){
                alert("Index "+ removeIndex + " is empty");
            }else{
                setRemoveIndex(removeIndex);
                setRemoveFlag(true);
            }
        }
    }

    const handleSearch = () => {
        if(searchVal===""){
            alert("Please input numbers only!");
        }else {
            setSearchFlag(true);
        }
    }

    // for insert position
    const insertOptions = Array.from({ length: elemList.length }, (_, index) => (
        <option key={"array_insert_pos_"+index} value={index}>{index}</option>
    ));
    const handleInsertOptionChange = (event) => {
        setInsertPos(event.target.value); // update option
    };

    return(
        <div className="subpage">
            <div className="subpage_content">
                <div className="goBack">
                    <FaArrowLeft className="arrow_back" size={30} onClick={()=>{navigator("/")}}/>
                </div>
                <div className="subpage_header">
                    <h1>Array</h1>
                </div>
                <div className="subpage_body">
                    <div className="subpage_display">
                        <div className="subpage_menu">
                            <div className="subpage_menu_item" style={state===0?{color:"var(--color-red)"}:{}} onClick={()=>{setState(0)}}>Create Array</div>
                            <div className="subpage_menu_item" style={state===1?{color:"var(--color-red)"}:{}} onClick={()=>{setState(1)}}>Insert Element</div>
                            <div className="subpage_menu_item" style={state===2?{color:"var(--color-red)"}:{}} onClick={()=>{setState(2)}}>Remove Element</div>
                            <div className="subpage_menu_item" style={state===3?{color:"var(--color-red)"}:{}} onClick={()=>{setState(3)}}>Search Element</div>
                        </div>
                        <div className="subpage_anim" >
                            <ArrayAnim elemList={elemList} setElemList={setElemList} elemSize={initialEleSize} setElemSize={setInitialEleSize}
                            insertVal={insertVal} insertPos={insertPos} insertFlag={insertFlag} setInsertFlag={setInsertFlag} 
                            removeIndex={removeIndex} removeFlag={removeFlag} setRemoveFlag={setRemoveFlag}
                            searchVal={searchVal} searchFlag={searchFlag} setSearchFlag={setSearchFlag}/>
                        </div>
                        <div className="subpage_intro">
                            {state===0&&<p>設定數組的大小為：{initialSize}<br/>填充 {initialEleSize} 個元素<br/><br/>你可以通過左方目錄來對數組進行基本操作：<br/>Insert Element（插入新元素）、Remove Element（移除指定元素）、Search Element（查找某個元素）<br/><br/>而下方操作欄則可以供你自行定義使用：<br/>Initial Size: 設定數組大小<br/>Element Size: 設定數組初始填充的元素，元素職將會隨機生成<br/>Create按鈕: 點擊後將根據當前設定生成數組<br/>Empty按鈕: 點擊後會將數組清空<br/><br/>相信通過觀察數據的操作過程，你能對數組(Array)有更清晰的了解！</p>}
                            {state===1&&<p>插入操作：<br/><br/>Insert Number: 輸入想插入的數字<br/>Insert Position: 選擇插入位置<br/>Insert按鈕: 點擊該按鈕可進行插入<br/>Append按鈕: 點擊按鈕將會在數組末尾添加新元素<br/><br/>嘗試輸入數字進行插入操作吧！</p>}
                            {state===2&&<p>移除操作：<br/><br/>Remove Index: 輸入想移除的元素位置（索引值）<br/>Remove按鈕: 點擊該按鈕可進行移除<br/><br/>嘗試輸入數字進行移除操作吧！</p>}
                            {state===3&&<p>查詢操作：<br/><br/>Search Element: 輸入想查詢的數字<br/>Search按鈕: 點擊該按鈕可進行查詢<br/><br/>若成功找到數字則會返回該數字在數組中的索引值(index)，反之則代表該數字不在數組中<br/><br/>嘗試輸入數字進行移除操作吧！</p>}
                        </div>
                    </div>
                    <div className="subpage_interact">
                        {state===0&&<div className="array_interact">
                            <p className="subpage_interact_p">Initial Size: </p>
                            <input defaultValue={initialSize} type="number" onChange={(input)=>{if(input.target.value!==""){setInitialSize(parseInt(input.target.value))}}}/>
                            <p className="subpage_interact_p">Element Size: </p>
                            <input defaultValue={initialEleSize} type="number" onChange={(input)=>{if(input.target.value!==""){setInitialEleSize(parseInt(input.target.value))}}}/>
                            <button className="subpage_btn" onClick={handleCreate}>Create</button>
                            <button className="subpage_btn" onClick={handleEmpty}>Empty</button>
                        </div>}
                        {state===1&&<div className="array_interact">
                            <p className="subpage_interact_p">Insert Number: </p>
                            <input defaultValue={insertVal} type="number" onChange={(input)=>{if(input.target.value!==""){setInsertVal(parseInt(input.target.value))}}} />
                            <p className="subpage_interact_p">Position: </p>
                            <select value={insertPos} style={{marginLeft:"4px"}} onChange={handleInsertOptionChange}>
                                {insertOptions}
                            </select>
                            <button className="subpage_btn" onClick={handleInsert} disabled={insertFlag}>Insert</button>
                            <button className="subpage_btn" onClick={handleAppend}>Append</button>
                        </div>}
                        {state===2&&<div className="array_interact">
                            <p className="subpage_interact_p">Remove Index: </p>
                            <input defaultValue={removeIndex} type="number" onChange={(input)=>{if(input.target.value!==""){setRemoveIndex(parseInt(input.target.value))}}}/>
                            <button className="subpage_btn" onClick={handleRemove} disabled={removeFlag}>Remove</button>
                        </div>}
                        {state===3&&<div className="array_interact">
                            <p className="subpage_interact_p">Search Element: </p>
                            <input defaultValue={searchVal} type="number" onChange={(input)=>{if(input.target.value!==""){setSearchVal(parseInt(input.target.value))}}}/>
                            <button className="subpage_btn" onClick={handleSearch} disabled={searchFlag}>Search</button>
                        </div>}
                    </div>
                    <div className="array_intro">
                        <div className="array_intro_section">
                            <h1>定義和基本概念</h1>
                            <ArrayIntroP/>
                        </div>
                        <div className="array_intro_section">
                            <h1>應用場景</h1>
                            <ArrayEmplP/>
                        </div>
                        <div className="array_intro_section">
                            <h1>代碼示例</h1>
                            <p>這裡提供了代碼示例，演示如何創建、訪問和修改Array中的元素。希望這可以幫助你更好地理解。</p>
                            <div className="language_switcher">
                                <h3 onClick={()=>{setCode(0)}} style={code===0?{color:"var(--color-red)"}:{}}>C</h3>
                                <h3 onClick={()=>{setCode(1)}} style={code===1?{color:"var(--color-red)"}:{}}>C++</h3>
                                <h3 onClick={()=>{setCode(2)}} style={code===2?{color:"var(--color-red)"}:{}}>Java</h3>
                                <h3 onClick={()=>{setCode(3)}} style={code===3?{color:"var(--color-red)"}:{}}>Python</h3>
                            </div>
                            <div className="code_holder">
                                {code===0&&<Gist id="591688d0568f03359f02c3ee207ad0f9"/>}
                                {code===1&&<Gist id="120aee98a2635a367e1f508e1c70afca" />}
                                {code===2&&<Gist id="477bb0ba05499ecd0df7013f2204824d" />}
                                {code===3&&<Gist id="9914ccb51d7d98794f5d2ea7e637e9b6" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CopyRight/>
        </div>
    )
}

export default ArrayPage;