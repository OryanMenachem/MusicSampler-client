import { AppProviders } from "./contexts/Contexts";
import NotesGrid from "./components/notes-grid/NotesGrid";
function App() {
  return (
    <>
      <AppProviders>
        <NotesGrid />
      </AppProviders>
    </>
  );
}

export default App;
