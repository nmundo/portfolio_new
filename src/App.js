import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#76ffff',
            main: '#18ffff',
            dark: '#00cbcc',
            contrastText: '#000',
        },
    },
    typography: {
        headline: {
            color: '#fff',
        },
    },
});

const PageShell = Page => {
    return props => (
        <div className="main-content">
            <Page {...props} />
        </div>
    )
};

class App extends Component {
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <MuiThemeProvider theme={theme}>
                            <div className="App">
                                <MenuBar/>
                                <div className="main-content">
                                    <TransitionGroup>
                                        <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                            <Switch location={location}>
                                                <Route exact path="/" component={Home}/>
                                                <Route path="/about" component={About}/>
                                                <Route path="/projects" component={Projects}/>
                                                <Route path="/contact" component={Contact}/>
                                                <Route render={() => <div>Not Found</div>} />
                                            </Switch>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </div>
                            </div>
                        </MuiThemeProvider>
                    )}/>
            </Router>
        );
    }
}

export default App;
