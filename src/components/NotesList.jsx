import React, { Component } from "react";

export default class NotesList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <section>
              <header>
                <h3>Título</h3>
                <p>Escreva sua nota.</p>
              </header>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}
