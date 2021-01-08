import React, { Component } from "react";
import NotesList from "./components/NotesList.jsx";
import Form from "./components/Form.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <NotesList />
      </div>
    );
  }
}
