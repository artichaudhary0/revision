import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
// import FetchData from "./FetchData";
import PostList from "./PostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
}

export default App;
