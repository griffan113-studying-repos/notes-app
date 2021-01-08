import React, { Component } from "react";
import CardList from "./CardList";

export default class NotesList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <CardList />
          </li>
        </ul>
      </div>
    );
  }
}
