import React, { useEffect, useState } from "react";
import "./menu.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = ({ cat, currPostId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like :</h1>
      {posts?.map((post) =>
        currPostId !== post.id ? (
          <div className="post" key={post.id}>
            <img className="img" src={post.img} alt="" />
            <Link className="link" to={`/posts/${post.id}`}>
              <h5 className="title">{post.title}</h5>
            </Link>
            <button>
              <Link className="link" to={`/posts/${post.id}`}>
              Read More
              </Link>
            </button>
          </div>
        ) : (
          null
        )
      )}
      </div>
  );
};

export default Menu;
