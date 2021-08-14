import Context from "./data/ObjectContext";
import {Home} from "./pages/Home/Home"

function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}

export default App;
