import React, { Component } from "react";
import history from '../../routes/history';
import NavBar from "../NavBar/NavBar";
import "./Page.css";

export default class Page extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
            <NavBar />
          <div class="container bg-white">

          </div>
        </div>
      </div>
    );
  }
}
