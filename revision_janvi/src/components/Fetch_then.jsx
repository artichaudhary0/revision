import React from "react";

const Fetch_then = () => {
  const [data, setData] = useState(null); // response store
  const [loading, setLoading] = useState(true); // async
  const [error, setError] = useState(null); // if error occured

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("network request not okay");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
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

export default Fetch_then;
