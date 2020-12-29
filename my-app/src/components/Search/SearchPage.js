import './SearchBar.css';
import Page from '../Page/Page'
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../../routes/history';
import PaperSearchItem from '../Paper/PaperSearchItem';
import NavBar from "../NavBar/NavBar";
import SearchBar from "../Search/SearchBar";
import { db } from "../../firebase";

export default class SearchPage extends Page {
    componentDidMount() {
                // get the whole collection
        db.collection("papers").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    }
  render() {
    return (
      <div className="SearchPage">
        <div className="lander">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"/>

            <NavBar />
          <div class="container search-container bg-white">
              <div class="row">
                <div class="container h-100">
                    <SearchBar />
                </div>
              </div>
            <div class="row">
              <div class="col-3">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
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
              <div class="col-6">
                <PaperSearchItem
                    title="Concerning an Heuristic Point of View Toward the Emission and Transformation of Light."
                    author="Einstein, Albert"
                    journal="Annalen der Physik 17: 132-148."
                    year="1905"
                />
                <PaperSearchItem
                    title="Conclusions Drawn from the Phenomena of Capillarity"
                    author="Einstein, Albert"
                    journal="Annalen der Physik 4, 513–523"
                    year="1901"
                />
                <PaperSearchItem
                    title="On the Thermodynamic Theory of the Difference in Potentials between Metals and \
                        Fully Dissociated Solutions of Their Salts and on an Electrical Method for \
                        Investigating Molecular Forces"
                    author="Einstein, Albert"
                    journal="Annalen der Physik 8, 798–814"
                    year="1902"
                />
                <PaperSearchItem
                    title="Kinetic Theory of Thermal Equilibrium and of the Second Law of Thermodynamics"
                    author="Einstein, Albert"
                    journal="Annalen der Physik (ser. 4), 9, 417–433"
                    year="1902"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
