import AppProviders from "./contexts/AppProviders";
import NotesGrid from "./components/notes-grid/NotesGrid";
import ControlsPanel from "./components/ControlsPanel";
function App() {
  return (
    <>
      <AppProviders>
        <NotesGrid />
        <ControlsPanel />
      </AppProviders>
    </>
  );
}

export default App;
