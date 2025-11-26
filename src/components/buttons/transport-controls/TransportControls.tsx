import { PlayToggleBtn, LoopToggleBtn, RestartBtn, ResetBtn } from "./index";

export default function TransportControls(): React.JSX.Element {
  return (
    <div className="transport-controls">
      <PlayToggleBtn />
      <LoopToggleBtn />
      <RestartBtn />
      <ResetBtn />
    </div>
  );
}
