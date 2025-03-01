import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import {
  fetchPosts,
  setSearchTerm,
  setCurrentPage,
  setfilter,
  clearFilter,
} from "./SliceFetchPost";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function PostList() {
  const dispatch = useDispatch();
  //   const navigate = useNavigate()

  const {
    items,
    currectPost,
    status,
    error,
    searchTerm,
    currentPage,
    totalPost,
    postPerPage,
    filters,
  } = useSelector((state) => state.posts);

  // fetch data
  useEffect(() => {
    dispatch(fetchPosts({ page: currentPage, limit: 100 }));
  }, [dispatch, currentPage, postPerPage]);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleUserFilter = (userId) => {
    dispatch(setfilter({ userId }));
  };
  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  //   const handlePostClick = (postId) => {
  //     navigate(`/post/${postId}`);
  //   };

  if (status === "loading") {
    <Loading />;
  }

  if (status === "failed") {
    <div>
      <h2>Error</h2>
      <h1>{error}</h1>
      <button
        onClick={() => dispatch(fetchPosts({ page: 1, limit: postPerPage }))}
      >
        Try Again
      </button>
    </div>;
  }

  const filteredPosts = items.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesUser = !filters.userId || post.userId === filters.userId;

    return matchesSearch && matchesUser;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search post"
        value={searchTerm}
        onChange={handleSearch}
      />

      {searchTerm && (
        <button onClick={() => dispatch(setSearchTerm(""))}>X</button>
      )}

      <div>
        <select
          value={filters.userId || ""}
          onChange={(e) =>
            handleUserFilter(e.target.value ? Number(e.target.value) : null)
          }
        >
          <option value="">All users</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              User : {i + 1}
            </option>
          ))}
        </select>

        {(filters.userId || searchTerm) && (
          <button onClick={handleClearFilter}>Clear filter </button>
        )}
      </div>

      <div>
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            // onClick={()=>handlePostClick}
          >
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            <h5>{post.userId}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
