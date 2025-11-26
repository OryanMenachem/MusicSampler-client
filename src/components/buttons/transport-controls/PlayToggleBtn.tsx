import { useGetContext, usePlayer } from "../../../hooks";
import type { ControlsPlayerContext, NotesContext } from "../../../types/types";

export default function PlayToggleBtn(): React.JSX.Element {
  const {
    isPlaying: isPlay,
    setIsPlaying: setIsPlay,
    isLoop,
  } = useGetContext("controlsPlayerContext") as ControlsPlayerContext;
  const { notes } = useGetContext("notesContext") as NotesContext;
  usePlayer({ notes, isPlaying: isPlay, isLoop });
  const className = `btn play-toggle--btn ${isPlay ? "play" : "stop"}`;
  const handleClick = () => {
    setIsPlay((prev) => !prev);
    console.log(isPlay);
  };
  return <button className={className} onClick={handleClick}></button>;
}
