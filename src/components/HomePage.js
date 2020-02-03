import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Icon from "./Icon.js";

import "./css/HomePage.css";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      Data: [
        { index: 1, title: "Fiction", value: "fiction" },
        { index: 2, title: "Philosophy", value: "philosophy" },
        { index: 3, title: "Drama", value: "drama" },
        { index: 4, title: "History", value: "history" },
        { index: 5, title: "Humour", value: "humour" },
        { index: 6, title: "Adventure", value: "adventure" },
        { index: 7, title: "Politics", value: "politics" }
      ]
    };
  }
  render() {
    return (
      <div className="homepagecontainer">
        <div className="subcontainer">
          <div>
            <div className="container">
              <h1 className="heading">Gutenberg Project</h1>
              <p className="subheading">
                A social cataloging website that allows you to freely search its
                database of books, annotations, and reviews.
              </p>
            </div>
          </div>
        </div>
        <div className="backgroundtag">
          <div className="container homepagetags">
            {this.state.Data.map(data => {
              return (
                <div key={data.index}>
                  <Icon
                    title={data.title}
                    value={data.value}
                    history={this.props.history}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
