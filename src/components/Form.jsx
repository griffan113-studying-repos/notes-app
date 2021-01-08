import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <textarea placeholder="Escreva sua nota"></textarea>
          <button>Criar Nota</button>
        </form>
      </div>
    );
  }
}
