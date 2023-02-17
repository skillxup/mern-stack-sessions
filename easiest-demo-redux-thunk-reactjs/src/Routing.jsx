import { Redirect } from "react-router-dom";
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import TabContainer from './components/tab-container/TabContainer';
import MovieList  from './components/movie-list/MovieList.jsx';

export class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/moviedb" />
                )} />
                <Route exact path="/moviedb" component={MovieList} />
                <Route exact path='/tabs' component={TabContainer} />
            </Switch>
        )
    }
}
