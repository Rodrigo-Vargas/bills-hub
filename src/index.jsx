import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/form.jsx";

import "./scss/main.scss";

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Bills Hub</h1>
            <Form />
         </div>  
      );
   }
}

ReactDOM.render(<App />, document.getElementById("root"));