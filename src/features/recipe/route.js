import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { RecipeHomePage } from './pages';

const newHistory = createBrowserHistory();

const HomePage = () => (
    <Router history={newHistory}>
        <Switch>
            <Route exact path="/" component={RecipeHomePage} />
        </Switch>
    </Router>
);

export default withRouter(HomePage);
