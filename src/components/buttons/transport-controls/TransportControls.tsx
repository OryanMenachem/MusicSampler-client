import { PlayToggleBtn, LoopToggleBtn, RestartBtn, ResetBtn } from "./index";

export default function TransportControlsLayout(): React.JSX.Element {
  return (
    <div className="transport-controls-layout">
      <PlayToggleBtn />
      <LoopToggleBtn />
      <RestartBtn />
      <ResetBtn />
    </div>
  );
}
