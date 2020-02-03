import React, { Component } from 'react';
import { debounce } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchBook from "./SearchBook.js";
import ShowBook from "./ShowBook.js";


import Back from "./icons/Back.svg";
import "./css/Books.css";
 

const  URL = "http://skunkworks.ignitesol.com:8000";

class Books extends Component {
    constructor() {
        super() 
        this.state = {
            keyword : "",
            searchBox : null, 
            rawresults : [],
            results : [],
            results2 : [],
            isLoading : false,
            isLoading2 : false
        };
        
    }
    componentDidMount () {
        const keyword  = this.props.match.params.keyword;  console.log( this.props.match.params.keyword);
        

        this.setState({
            keyword : keyword
        })

        fetch(`${URL}/books?topic=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then((firstData) => {
                console.log(firstData);
                this.setState({
                    isLoading : true,
                    rawresults : firstData,
                    results : firstData.results
                });
            })
            .catch((error) => console.log(error));

            window.onscroll = debounce(() => {
                if(this.state.isLoading) {
                    if ( window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                        if(this.state.rawresults.next !== null) {
                            var next = this.state.rawresults.next;
                            console.log(next);
                            fetch(`${next}`)
                                .then(res => {
                                    return res.json();
                                })
                                .then((secondData) => {
                                    this.setState({
                                        isLoading2 : true,
                                        rawresults : secondData,
                                        results2 : secondData.results
                                    });

                                    if(this.state.isLoading2) {

                                        this.setState({
                                            results : this.state.results.concat(this.state.results2)
                                        });
                                    }
                                })
                        }
                    }
                }
              }, 300);
    }

    onSearchChange = debounce((searchBox) => {
        this.setState({ searchBox });

        fetch(`${URL}/books?search=${this.state.searchBox}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                results : data.results
            })
        });
    }, 500)

    render() {
        if(!this.state.isLoading) {
            return(
                <div className = "load">
                </div>
            )
        
        } else {
            return ( 
                <div>
                    <div className = "position">
                        <div className = "container tagcontainer">
                            <div className = "back" onClick = { () => { this.props.history.push("/") } } >
                                <img className = "backarrow" src = { Back } alt = "Back"/>
                            </div>
                            <div className = "sectionname">
                                { this.state.keyword.toUpperCase() }
                            </div>
                        </div>
                        <div className = "container">
                            <SearchBook bookSearch = {event => this.onSearchChange(event.target.value) }/>
                        </div>
                    </div>
                    <div className = "bookbackground">
                        <div className = "container loading">
                            {
                                this.state.results.map((book, index) => {
                                    return (
                                        <div key = {index}>
                                                <ShowBook  data = { book }/>
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}
 
export default Books;