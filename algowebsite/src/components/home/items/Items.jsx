import React, { useState } from "react";
import "./items.css";

const Items = ({data}) => {
    const [language, setLanguage] = useState(true);

    function colors(index) {
        switch(index%6){
            case 0:
                return {one:"--color-blue", two:"--color-blue-3", three:"--color-blue-4"};
            case 1:
                return {one:"--color-green", two:"--color-green-3", three:"--color-green-4"};
            case 2:
                return {one:"--color-yellow", two:"--color-yellow-3", three:"--color-yellow-4"};
            case 3:
                return {one:"--color-red", two:"--color-red-3", three:"--color-red-4"};
            case 4:
                return {one:"--color-lightpurple", two:"--color-lightpurple-3", three:"--color-lightpurple-4"};
            case 5:
                return {one:"--color-darkpurple", two:"--color-darkpurple-3", three:"--color-darkpurple-4"};
            default:return {one:"--color-blue", two:"--color-blue-3", three:"--color-blue-4"};
        }
    }

    const ItemElem = ({en_title, zn_title, index}) => {
        const color = colors(index);
        return (
            <div className="home_item" style={{backgroundColor:`var(${color.two})`}}>
                <div className="home_item_anim" style={{backgroundColor:`var(${color.one})`}}>
                </div>
                <div className="home_item_title">
                    <p className="en_font" style={language?{display:"flex"}:{display:"none"}}>{en_title}</p>
                    <p className="zn_font" style={language?{display:"none"}:{display:"flex"}}>{zn_title}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="home_items">
            <div className="home_items_wrap">
                {data!==undefined&&data.map((item, index)=>(
                    <div>
                        <ItemElem en_title={item.en} zn_title={item.zn} index={index}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Items;