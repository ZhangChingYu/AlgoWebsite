import React, { useState } from "react";
import './array.css';
import { CopyRight } from '../../../components';


const Array = () => {

    const [state, setState] = useState(0);

    return(
        <div className="subpage">
            <div className="subpage_content">
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
                        <div className="subpage_anim">

                        </div>
                        <div className="subpage_intro">

                        </div>
                    </div>
                    <div className="subpage_interact">
                        {state===0&&<div className="array_interact">
                            <p className="subpage_interact_p">Initial Size: </p>
                            <input defaultValue={8} />
                            <p className="subpage_interact_p">Element Size: </p>
                            <input defaultValue={4} />
                            <button className="subpage_btn">
                                Create
                            </button>
                            <button className="subpage_btn">
                                Empty
                            </button>
                        </div>}
                        {state===1&&<div className="array_interact">
                            <p className="subpage_interact_p">Insert Number: </p>
                            <input defaultValue={3} />
                            <p className="subpage_interact_p">Position: </p>
                            <input defaultValue={0} />
                            <button className="subpage_btn">
                                Insert
                            </button>
                            <button className="subpage_btn">
                                Append
                            </button>
                        </div>}
                        {state===2&&<div className="array_interact">
                            <p className="subpage_interact_p">Remove Element: </p>
                            <input defaultValue={3} />
                            <button className="subpage_btn">
                                Remove
                            </button>
                        </div>}
                        {state===3&&<div className="array_interact">
                            <p className="subpage_interact_p">Search Element: </p>
                            <input defaultValue={8} />
                            <button className="subpage_btn">
                                Search
                            </button>
                        </div>}
                    </div>
                    <div className="array_intro">
                        <div className="array_intro_section">
                            <h1>定義和基本概念</h1>
                            <p>Array(數組)是一種數據結構，用於存儲相同類型的元素的集合。每個元素在Array中都有一個唯一的索引，可以通過這個索引來訪問或修改元素。</p>
                            <p>An array is a data structure used to store a collection of elements of the same type. Each element in the array has a unique index, which can be used to access or modify the element.</p>
                        </div>
                        <div className="array_intro_section">
                            <h1>操作和特性</h1>
                            <p>Array具有固定的大小，一旦創建，其大小就不能改變。常見的操作包括添加元素、刪除元素、訪問元素等。Array的特性之一是它是一個連續的內存區域，這使得訪問Array中的元素非常高效。</p>
                            <p>Arrays have a fixed size, once created, their size cannot be changed. Common operations include adding elements, removing elements, and accessing elements. One of the characteristics of an array is that it is a contiguous memory area, which makes accessing elements in the array very efficient.</p>
                        </div>
                        <div className="array_intro_section">
                            <h1>時間複雜度</h1>
                            <p>訪問或修改元素的時間複雜度是O(1)，因為它可以通過索引直接訪問，而添加或刪除元素的時間複雜度可能是O(n)，因為這可能需要移動其他元素來為新元素腾出空間。</p>
                            <p>The time complexity for accessing or modifying an element is O(1) because it can be directly accessed by index. The time complexity for adding or removing elements might be O(n) because it may require shifting other elements to make space for the new element.</p>
                        </div>
                        <div className="array_intro_section">
                            <h1>應用場景</h1>
                            <p>Array在編程中有廣泛的應用，特別是在排序算法、搜索算法等方面。它也常被用於數據存儲和處理，例如在圖像處理和音頻處理中。</p>
                            <p>Arrays are widely used in programming, especially in sorting algorithms, searching algorithms, etc. They are also commonly used for data storage and processing, such as in image processing and audio processing.</p>
                        </div>
                        <div className="array_intro_section">
                            <h1>代碼示例</h1>
                            <p>提供代碼示例，演示如何創建、訪問和修改Array中的元素。這可以幫助用戶更好地理解。</p>
                        </div>
                        <div className="array_intro_section">
                            <h1>實際應用</h1>
                            <p>在實際應用中，Array可以用於存儲學生成績、處理用戶的輸入數據、管理文件系統中的文件列表等。例如，它可以用於創建一個學生成績管理系統，其中每個學生的成績可以存儲在一個Array中。</p>
                            <p>In practical applications, arrays can be used to store student grades, process user input data, manage file lists in a file system, etc. For example, it can be used to create a student grade management system where the grades of each student can be stored in an array.</p>
                        </div>
                    </div>
                </div>
            </div>
            <CopyRight/>
        </div>
    )
}

export default Array;