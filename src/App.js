import "./styles.css";
import { Tile } from "./Tile";

export default function App() {
  return (
    <div className="App">
      <Tile countDownSeconds={10} />
    </div>
  );
}
