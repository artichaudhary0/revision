import React, { useEffect, useState } from "react";

const Fetch_async_await = () => {
  const [data, setData] = useState(null); // response store
  const [loading, setLoading] = useState(true); // async
  const [error, setError] = useState(null); // if error occured

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Loading....</p>;

  return (
    <div>
      <h2>Fetched data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch_async_await;
