import Page from '../Page/Page'
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../routes/history';
import PaperSearchItem from '../Paper/PaperSearchItem';
import NavBar from "../NavBar/NavBar";
import SearchBar from "../Search/SearchBar";
import { db } from "../../firebase";

export default class UploadPage extends Page {
  render() {
    return (
      <div className="UploadPage">
        <div className="lander">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>

            <NavBar />
          <div class="container search-container bg-white">
            <div class="row">
                <div class="col-3"></div>
              <div class="col-6">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="A Really Cool Study!"></input>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Study Type</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Randomized Controlled Study</option>
                      <option>MetaAnalysis</option>
                      <option>Cohort Study</option>
                      <option>Case-Control Study</option>
                      <option>Qualitative Study</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
