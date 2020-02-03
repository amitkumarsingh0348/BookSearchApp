import React from 'react';

import "./css/SearchBook.css";

const SearchBook = ({ bookSearch }) => {

        return ( 
            <div>
                <input 
                className = "textbox" 
                type = "search" 
                placeholder = "Search"
                onChange = { bookSearch }
                />
            </div>
         );
}
 
export default SearchBook;