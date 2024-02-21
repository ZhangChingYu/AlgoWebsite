import React from "react";
import './home.css';
import Logo from '../../assets/Logo.jpg'
import { Items } from "../../components/home";
import { CopyRight } from "../../components";

var dData = [{en:"Array", zn:"列隊", link:"array", filename:"ArrayPre.json"}, {en:"Linked List", zn:"鏈表", filename:"LinkedListPre.json"}, {en:"Stacks", zn:"堆棧", filename:"StackPre.json"}, {en:"Queues", zn:"佇列", filename:"QueuePre.json"}, {en:"Hash Table", zn:"散列表", filename:"HashTablePre.json"}, {en:"Trees", zn:"樹", filename:"TreePre.json"}, {en:"Heaps", zn:"堆"}, {en:"Graph", zn:"圖"}];
var aData = [{en:"Array", zn:"列隊", link:"array"}, {en:"Linked List", zn:"鏈表"}, {en:"Stacks", zn:"堆棧"}, {en:"Queues", zn:"佇列"}, {en:"Heaps", zn:"堆"}, {en:"Heaps", zn:"堆"}, {en:"Heaps", zn:"堆"}];

const Home = () => { 
    return(
        <div className="home">
            <div className="home_content">
                <div className="home_header">
                    <img className="home_logo" src={Logo} alt="logo"/>
                </div>
                <div className="home_body">
                    <div className="home_section">
                        <h1>Data Structure</h1>
                        <Items data={dData}/>
                    </div>
                    <div className="home_section">
                        <h1>Algorithms</h1>
                        <Items data={aData}/>
                    </div>
                </div>
            </div>
            <CopyRight/>
        </div>
    )
}

export default Home;