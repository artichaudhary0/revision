import React, { useEffect, useState } from "react";

const Fetch_button = () => {
  const [data, setData] = useState(null); // response store
  const [loading, setLoading] = useState(false); // async
  const [error, setError] = useState(null); // if error occured

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Network error");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Click</button>

      {loading && <p>Loading....</p>}
      {error && <p>Error {error}</p>}

      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Fetch_button;
