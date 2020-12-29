import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";


export default class NavBar extends React.Component {
  render() {
    return (
        <div>
<nav class="navbar navbar-dark blurry-beach-inverse">
</nav>

<nav class="navbar navbar-expand-lg navbar-dark blurry-beach-inverse">
  <button class="btn btn-white" id="menu-toggle"><span class="navbar-toggler-icon"></span></button>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
            <Link to="/upload" class="nav-link">Upload</Link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="coming-soon.html">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="coming-soon.html">Login</a>
        </li>
    </ul>

  </div>
</nav>
</div>
    )
  }
}
