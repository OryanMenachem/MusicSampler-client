import type { TransportControlsContext } from "../../../contexts/context/TransportControls.context";
import { useGetContext } from "../../../hooks";

export default function LoopToggleBtn(): React.JSX.Element {
  const { state, dispatch } = useGetContext(
    "transportControlsContext"
  ) as TransportControlsContext;

  const handleClick = () => {
    dispatch({ type: "TOGGLE_LOOP" });
  };
  return (
    <button
      className={`btn loop-toggle--btn ${state.isLooping && "loop-on"}`}
      onClick={handleClick}
    >
      {state.isLooping ? "Loop On" : "Loop Off"}
    </button>
  );
}
