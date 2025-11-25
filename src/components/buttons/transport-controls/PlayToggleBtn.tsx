import { useState, useContext, useRef } from "react";
import { notesContext } from "../../../contexts/Notes.context";
import type { NotesContext } from "../../../types/types";
import { handlePlayToggle } from "../button.service";
export default function PlayToggleBtn(): React.JSX.Element {
  const [play, setPlay] = useState(false);
  const { notes } = useContext(notesContext) as NotesContext;
  const abortedRef = useRef({ aborted: false });

  //   useEffect(() => {}, [play, notes]);

  return (
    <button
      className="btn play-toggle--btn"
      onClick={() => handlePlayToggle({ notes, abortedRef })}
    >
      Play
    </button>
  );
}
