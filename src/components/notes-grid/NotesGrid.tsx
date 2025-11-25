import { useGetContext } from "../../hooks";
import Note from "../note/Note";
import { NOTE_NAMES } from "../../utils/utils";
import type {
  ActiveColumnContext,
  ColumnsContext,
  InstrumentContext,
} from "../../types/types";
import "./notesGrid.style.css";

export default function NotesGrid() {
  const { instrument } = useGetContext(
    "instrumentContext"
  ) as InstrumentContext;
  const { columns } = useGetContext("columnsContext") as ColumnsContext;
  const { activeColumn } = useGetContext(
    "activeColumnContext"
  ) as ActiveColumnContext;
  return (
    <div className="notes-grid">
      {NOTE_NAMES.map((note) => (
        <div key={note} className="notes-grid-row">
          {Array(columns)
            .fill(note)
            .map((n, i) => (
              <Note
                key={`${note}-${i}`}
                noteId={`${note}-${i}`}
                instrument={instrument}
                noteName={n}
                column={i + 1}
                isActive={activeColumn === i + 1}
              />
            ))}
        </div>
      ))}
    </div>
  );
}
