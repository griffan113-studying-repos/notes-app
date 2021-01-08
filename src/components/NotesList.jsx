import React, { Component } from "react";
import CardList from "./CardList/CardList";

export default class NotesList extends Component {
  render() {
    return (
      <div>
        <ul>
          {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
            return (
              <li key={index}>
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
