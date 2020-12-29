
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import SearchPage from "../components/Search/SearchPage";
import Home from "../Home";
import UploadPage from "../components/Upload/UploadPage";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/searchPage" component={SearchPage} />
                    <Route path="/upload" component={UploadPage} />
                </Switch>
            </Router>
        )
    }
}
