import AppProviders from "./contexts/AppProviders";
import NotesGrid from "./components/notes-grid/NotesGrid";
import PlayerControlsLayout from "./components/PlayerControlsLayout";
function App() {
  return (
    <>
      <AppProviders>
        <NotesGrid />
        <PlayerControlsLayout />
      </AppProviders>
    </>
  );
}

export default App;
