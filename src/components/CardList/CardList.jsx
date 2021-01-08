import React, { Component } from "react";
import "./CardList.css";

class CardList extends Component {
  render() {
    return (
      <div>
        <section className="card-list">
          <header>
            <h3>Título</h3>
          </header>
          <p>Escreva sua nota.</p>
        </section>
      </div>
    );
  }
}

export default CardList;
