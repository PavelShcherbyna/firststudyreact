import  React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
// components:
import Nav from './Components/Nav'
import HelloYa from "./Components/HelloYa";
import HelloError from "./Components/HelloError";
import ErrorBoundary from "./Components/ErrorBoundary";


class App extends Component{
  render() {
    return (
        <Router>
            <div className='App'>
                <ErrorBoundary>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/HelloYa' component={HelloYa} />
                        <Route path='/HelloError' component={HelloError} />
                    </Switch>
                </ErrorBoundary>
            </div>
        </Router>
    )

  }

}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);

export default App;
