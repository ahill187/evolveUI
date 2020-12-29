import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './routes/history';
import SubjectCard from './components/SubjectCard/SubjectCard';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/Search/SearchBar";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
            <NavBar />
          <div class="container bg-white">
              <div class="row">
                <div class="container h-100">
                    <SearchBar />
                </div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <SubjectCard title="Biology"/>
                    <SubjectCard title="Chemistry"/>
                </div>
                <div class="col-4">
                    <SubjectCard title="Physics"/>
                    <SubjectCard title="Mathematics"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
