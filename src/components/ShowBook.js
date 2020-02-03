import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./icons/default.png";

import"./css/ShowBook.css";

const ShowBook = (props) => {
    var image = props.data.formats["image/jpeg"];
    if(image === undefined) {
        image = Image;
    }
    if(props.data.authors[0] === undefined) {
        props.data.authors[0] = { name : "Unknown" }
    }
    const length = props.data.title.length;
    if(length > 30) {
        var name = props.data.title;
        name = name.substring(0, 40);
        name = name + " ";
        props.data.title = name;
    }
        function checkBook(book) {
            var htmlType1 = book["text/html; charset=us-ascii"];
            const htmlType2 = book["text/html; charset=utf-8"];
            const pdfType = book["application/pdf"];
            const txtType = book["text/plain"];
    
            if(htmlType1 !== undefined) {
                const ifzip1 = htmlType1.match(/zip/gi);
                if(ifzip1 === null) {
                    window.open(htmlType1);
                } else if(pdfType !== undefined) {
                    const ifzip3 = pdfType.match(/zip/gi);
                    if(ifzip3 === null) {
                        window.open(pdfType);
                    } else if(txtType !== undefined) {
                        window.open(txtType);
                    } else {
                        alert("Book  not available");
                    }
                } else if(txtType !== undefined){
                    window.open(txtType);
                } else {
                    alert("Book  not available");
                }
            } else if(htmlType2 !== undefined ) {
                const ifzip2 = htmlType2.match(/zip/gi);
                if(ifzip2 === null) {
                    window.open(htmlType2);
                } else if(pdfType !== undefined) {
                    const ifzip4 = pdfType.match(/zip/gi);
                    if(ifzip4 === null){
                        window.open(pdfType);
                    } else if(txtType !== undefined) {
                        window.open(txtType);
                    } else {
                        alert("Book  not available");
                    }
                } else if(txtType !== undefined){
                    window.open(txtType);
                } else {
                    alert("Book  not available");
                }
            } else if(pdfType !== undefined){
                const ifzip5 = pdfType.match(/zip/gi);
                if(ifzip5 === null) {
                    window.open(pdfType);
                } else if(txtType !== undefined){
                    window.open(txtType);
                } else {
                    alert(" Book  not available");
                }
            } else if(txtType !== undefined){
                window.open(txtType);
            } else {
                alert("Book  not available");
            }
        }
            return(
                <div className = "bookcard">
                    <div className = "cardbox">
                        <div className = "showbook">
                            <div className = "align">
                                <div onClick = {() => {checkBook(props.data.formats)}}>
                                    <img className = "cover" src = { image } alt = ""/>
                                </div>
                            </div>
                            <div className = "booktitle">
                                { props.data.title }
                            </div>
                            <div className = "author_name">
                                { props.data.authors[0].name }
                            </div>
                        </div>
                    </div>
                </div>
            );
    }

export default ShowBook;