import React from 'react';
import Helmet from 'react-helmet';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configStore from './store';

const { store, persistor } = configStore();

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>TODO App</title>
                </Helmet>

                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </PersistGate>
    </Provider>
)

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;