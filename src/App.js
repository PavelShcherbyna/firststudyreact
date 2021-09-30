import  React,{Component} from 'react';
// components
import HelloYa from "./Components/HelloYa";
import HelloError from "./Components/HelloError";
import ErrorBoundary from "./Components/ErrorBoundary";

class App extends Component{
  render() {
    return (
        <>
            <ErrorBoundary>
                <HelloYa/>
                <HelloError />
            </ErrorBoundary>

        </>
    )
  }

}

export default App;
