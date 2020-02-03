import React, { Component } from 'react';

import Adventure from "./icons/Adventure.svg";
import Drama from "./icons/Drama.svg";
import Fiction from "./icons/Fiction.svg";
import History from "./icons/History.svg";
import Humour from "./icons/Humour.svg";
import Philosophy from "./icons/Philosophy.svg";
import Politics from "./icons/Politics.svg";
import Next from "./icons/Next.svg";

import "./css/Image.css";

class Image extends Component {
    state = {  }

    NextPage = (value) => (events) => {            //gives value as fiction,drama .....
        this.props.history.push(`/books/${value}`); 
        console.log(value);
        
    }

    getIcon = (iconValue) => {
        switch (iconValue) {
          case 'fiction':
            return Fiction;
          case 'philosophy':
            return Philosophy;
          case 'drama':
            return Drama;
          case 'history':
            return History;
          case 'humour':
            return Humour;
          case 'adventure':
            return Adventure;
          default:
            return Politics;
        }
    };

    render() { 
        return ( 
            <div className = "imagecontainer">
              <div className = "tags" onClick = { this.NextPage(this.props.value) }>
                  <div className = "">
                          <img className = "icon" src = { this.getIcon(this.props.value) } alt = { this.props.value } />
                  </div>
                  <div className = "title">
                          { this.props.title } 
                  </div>
                  <div className = "next">
                      <img src = { Next } alt = "next"/>
                  </div>
              </div>
            </div>
         );
    }
}
 
export default Image;