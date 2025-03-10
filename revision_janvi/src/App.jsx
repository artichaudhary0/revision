import { Provider } from "react-redux";
import "./App.css";

import Fetch_button from "./components/Fetch_button";
import store from "./store/store";
import Fechwithreduxthunk from "./components/fechwithreduxthunk";

function App() {
  return (
    <Provider store={store}>
      <Fechwithreduxthunk />
    </Provider>
  );
}

export default App;
