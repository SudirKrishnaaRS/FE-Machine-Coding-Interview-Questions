import { useState } from "react";
import { useEffect } from "react";
import "./InfiniteScroll.styles.css";

const InfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setData((prev) => [...prev, ...data]);
      console.log("Data: " + data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error("Error: " + err.message);
    }
  };

  const handleScroll = () => {
    // LOGIC EXPLAINATION - refer here : https://youtu.be/ahpbfQybX94?si=JjvWIeZCy2d2OcWC&t=151

    // console.log("Height:", scrollHeight);
    // console.log("Top:", scrollTop);
    // console.log("Window:", window.innerHeight);

    // REFER PINNED YT COMMENT
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData();

    // IMPORTANT is the dependency array
  }, [page]);

  return (
    <>
      <h1>Infinite Scroll Example</h1>

      <div className="container">
        {loading && <div>Loading</div>}
        {data &&
          data.map((post) => {
            return (
              <div className="card" key={post.id}>
                {post.title}
              </div>
            );
          })}
        {error && <div>Error</div>}
      </div>
    </>
  );
};

export default InfiniteScroll;
