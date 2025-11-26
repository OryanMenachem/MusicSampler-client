import TransportControls from "./buttons/transport-controls/TransportControls";
import ColumnControls from "./buttons/column-controls/ColumnControls";
import InstrumentSelectorBtn from "./buttons/instrument-selector/InstrumentSelectorBtn";
import "./buttons/button.style.css";

export default function ControlsPanel(): React.JSX.Element {
  return (
    <div className="controls-panel">
      <TransportControls />
      <ColumnControls />
      <InstrumentSelectorBtn />
    </div>
  );
}
