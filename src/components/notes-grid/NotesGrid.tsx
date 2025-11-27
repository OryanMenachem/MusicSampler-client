import { useGetContext } from "../../hooks";
import Note from "../note/Note";
import { NOTE_NAMES } from "../../utils/utils";
import type {
  ColumnsContext,
  InstrumentContext,
} from "../../types/types";
import "./notesGrid.style.css";
import type { TransportControlsContext } from "../../contexts/context/TransportControls.context";

export default function NotesGrid() {
  const { instrument } = useGetContext(
    "instrumentContext"
  ) as InstrumentContext;
  const { columnCount } = useGetContext("columnCountContext") as ColumnsContext;
  const { state } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;
  return (
    <div className="notes-grid">
      {NOTE_NAMES.map((note) => (
        <div key={note} className="notes-grid-row">
          {Array(columnCount)
            .fill(note)
            .map((n, i) => (
              <Note
                key={`${note}-${i}`}
                noteId={`${note}-${i}`}
                instrument={instrument}
                noteName={n}
                columnCount={i + 1}
                isActive={state.activeColumnIndex === i + 1}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
