import { useContext } from "react";
import Note from "../note/Note";
import { NOTE_NAMES } from "../../utils/utils";
import type { ColumnsContext, InstrumentContext } from "../../types/types";
import { columnsContext } from "../../contexts/Columns.context";
import { instrumentContext } from "../../contexts/Instrument.context";
import "./notesGrid.style.css";

export default function NotesGrid() {
  const { instrument } = useContext(instrumentContext) as InstrumentContext;
  const { columns } = useContext(columnsContext) as ColumnsContext;
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
              />
            ))}
        </div>
      ))}
    </div>
  );
}
