import  React,{Component} from 'react';
// components
import HelloYa from "./Components/HelloYa";
import HelloError from "./Components/HelloError";

class App extends Component{
  render() {
    return (
        <>
          <HelloYa/>
           <HelloError />
        </>
    )
  }

}

export default App;
