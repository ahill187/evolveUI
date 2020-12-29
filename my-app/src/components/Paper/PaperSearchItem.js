import React from 'react';
import './PaperSearchItem.css';
import { Link } from "react-router-dom";


export default class PaperSearchItem extends React.Component {
  render() {
    return (
        <div class="card paper-search-item">
          <div class="card-body">
            <h5 class="card-title text-primary">
                <a href="#" class="card-link">{this.props.title}</a>

            </h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.props.author}</h6>
            <p class="card-text">{this.props.journal}</p>
            <p class="card-text font-italic">{this.props.year}</p>

              <div class="float-right text-primary">
                      <a href="#" class="share-panel fa-lg"><i class="fas fa-share-alt"></i></a>
                  <a href="#" class="share-panel fa-lg"><i class="far fa-star"></i></a>
              </div>
          </div>
        </div>
    )
  }
}
