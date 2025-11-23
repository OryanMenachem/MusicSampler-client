import { NotesProvider } from "./contexts/Notes.context";
import Note from "./components/note/Note";
function App() {
  return (
    <>
      <NotesProvider>
        <Note noteId="1" instruments="PIANO" musicalNote="DO" />
        <Note noteId="2" instruments="PIANO" musicalNote="RE" />
        <Note noteId="3" instruments="PIANO" musicalNote="MI" />
        <Note noteId="4" instruments="PIANO" musicalNote="FA" />
        <Note noteId="5" instruments="PIANO" musicalNote="SOL" />
        <Note noteId="6" instruments="PIANO" musicalNote="LA" />
        <Note noteId="7" instruments="PIANO" musicalNote="TI" />
      </NotesProvider>
    </>
  );
}

export default App;
