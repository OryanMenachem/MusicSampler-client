import type { TransportControlsContext } from "../../../types/types";
import { useGetContext, usePlayer } from "../../../hooks";

export default function PlayToggleBtn(): React.JSX.Element {
  const { state, dispatch } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;
  usePlayer();
  const className = `btn play-toggle--btn ${state.isPlaying ? "stop" : "play"}`;

  return (
    <button
      className={className}
      onClick={() => {
        dispatch({ type: "TOGGLE_PLAY" });
      }}
    ></button>
  );
}
