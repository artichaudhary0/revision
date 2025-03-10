import { useEffect, useState } from "react";
import "./App.css";

/*
post : server new data bhej rahe ho
get : getting data from server
delete : server sata remove
put : update (block)
patch : update (short - length)

url : https://jsonplaceholder.typicode.com/posts

*/
function App() {
  const [data, setData] = useState(null); // response store
  const [loading, setLoading] = useState(null); // async
  const [error, setError] = useState(null); // if error occured

  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
  }, []);

  return <div></div>;
}

export default App;
