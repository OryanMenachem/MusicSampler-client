import { useGetContext } from "../../../hooks";
import type { ControlsPlayerContext } from "../../../types/types";

export default function LoopToggleBtn(): React.JSX.Element {
  const { setIsLoop, setIsPlaying, isLoop } = useGetContext(
    "controlsPlayerContext"
  ) as ControlsPlayerContext;

  const handleClick = () => {
    setIsLoop((prev) => !prev);
    setIsPlaying((prev) => !prev);
  };
  return (
    <button
      className={`btn loop-toggle--btn ${isLoop && "loop-on"}`}
      onClick={handleClick}
    >
      {!isLoop && "Loop"}
    </button>
  );
}
