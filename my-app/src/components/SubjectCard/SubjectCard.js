import React from 'react';
import './SubjectCard.css';
import { Link } from "react-router-dom";


export default class SubjectCard extends React.Component {
  render() {
    return (
        <div class="card subject-card">
          <div class="card-body">
            <h5 class="card-title text-primary">
                <i class="fas fa-microscope"></i>
                &nbsp;&nbsp;&nbsp;
                <Link to="/searchPage" class="card-link">{this.props.title}</Link>
            </h5>

            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
    )
  }
}
