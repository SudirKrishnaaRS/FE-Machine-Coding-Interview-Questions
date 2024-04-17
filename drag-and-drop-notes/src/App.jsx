import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Hare Krishna",
    },
    {
      id: 2,
      text: "Hare Rama",
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
