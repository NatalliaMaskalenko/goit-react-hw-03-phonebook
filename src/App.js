import { Component } from "react";
import Form from './components/Form';


class App extends Component{
state = {
  contacts: [],
}
 
  
  render() {
    return (
     <Form/>

   );
 }

}

export default App;
