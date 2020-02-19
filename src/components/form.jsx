import React from "react";

class Form extends React.Component {
   render() {
      return (
          <form action="">
              <div>
                <input type="text" placeholder="Descrição"/>
              </div>
              
              <div>
                <input type="text" placeholder="Valor"/>
              </div>

              <button>Salvar</button>
          </form>
      );
   }
}

export default Form;