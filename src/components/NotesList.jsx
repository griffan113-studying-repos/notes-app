import React, { Component } from "react";
import CardList from "./CardList";

export default class NotesList extends Component {
  render() {
    return (
      <div>
        <ul>
          {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
            return (
              <li>
                <div>{categoria}</div>
                <CardList />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
