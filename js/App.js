import { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './Header';
import {Home} from './Home.jsx';
import {About} from './About.jsx';
import {Contact} from './Contact.jsx';
import {Footer} from './Footer';


export class App extends Component {
    render() {
        return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Footer />
            </div>
        </Router>
        );
    }
}