import React from "react";
import { Link } from "react-router-dom"


class Navigation extends React.Component{

    _click1(e){
        var i;
        var menu1;

        for(i=1 ; i<=4 ; i++)
        {
            var temp=document.getElementById("menu"+i);
            temp.style.border=0;
            temp.style.background="#eff3f7";
            temp.style.color="#2B3F48";
        }
        menu1=document.getElementById("menu1");
        menu1.style.border="2px solid rgb(85, 123, 194";
        menu1.style.borderRadius="6px";
        menu1.style.background="rgb(85, 123, 194)";
        menu1.style.color="#FFF";
    }
    
    _click2(e){
        var i;
        var menu2;

        for(i=1 ; i<=4 ; i++)
        {
            var temp=document.getElementById("menu"+i);
            temp.style.border=0;
            temp.style.background="#eff3f7";
            temp.style.color="#2B3F48";
        }
        menu2=document.getElementById("menu2");
        menu2.style.border="2px solid rgb(85, 123, 194";
        menu2.style.borderRadius="6px";
        menu2.style.background="rgb(85, 123, 194)";
        menu2.style.color="#FFF";
    }
    
    _click3(e){
        var i;
        var menu3;

        for(i=1 ; i<=4 ; i++)
        {
            var temp=document.getElementById("menu"+i);
            temp.style.border=0;
            temp.style.background="#eff3f7";
            temp.style.color="#2B3F48";
        }
        menu3=document.getElementById("menu3");
        menu3.style.border="2px solid rgb(85, 123, 194";
        menu3.style.borderRadius="6px";
        menu3.style.background="rgb(85, 123, 194)";
        menu3.style.color="#FFF";
    }
    
    _click4(e){
        var i;
        var menu4;
        
        for(i=1 ; i<=4 ; i++)
        {
            var temp=document.getElementById("menu"+i);
            temp.style.border=0;
            temp.style.background="#eff3f7";
            temp.style.color="#2B3F48";
        }
        menu4=document.getElementById("menu4");
        menu4.style.border="2px solid rgb(85, 123, 194";
        menu4.style.borderRadius="6px";
        menu4.style.background="rgb(85, 123, 194)";
        menu4.style.color="#FFF";
    }
    

	
    render(){
        return ( 
            <div id="header">
            <div id="logo">
            <h1><a href="#">Recommend Movie</a></h1>
            </div>
            <div id="menu">
            <ul>
                <li className="current_page_item"><Link id="menu1" to="/" title="" onClick={this._click1}>Rating</Link></li>
                <li><Link to="/Download"  title="" id="menu2"  onClick={this._click2}>Download</Link></li>
                <li><Link to="/Like"  id="menu3" title="" onClick={this._click3}>Like</Link></li>
                <li><Link to="/About" id="menu4" title="" onClick={this._click4}>About</Link></li>
            </ul>
            </div>
        </div>
        
        );
    }
}


export default Navigation;