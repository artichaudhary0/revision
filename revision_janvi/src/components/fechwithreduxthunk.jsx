import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slice/postsSlice";

const Fechwithreduxthunk = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}...</p>;

  return (
    <div>
      <h1>fetch data</h1>
      <ul>
        {data.map((i) => (
          <li key={i.id}>{i.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fechwithreduxthunk;
