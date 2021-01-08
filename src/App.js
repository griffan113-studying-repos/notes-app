import React from "react";
import NotesList from "./components/NotesList.jsx";

export default function App() {
  return (
    <div>
      <form>
        <input type="text" />
        <textarea placeholder="Escreva sua nota"></textarea>
        <button>Criar Nota</button>
      </form>
      <NotesList />
    </div>
  );
}
