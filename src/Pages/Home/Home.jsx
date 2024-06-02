import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.scss";
import axios from "axios";
import ReactQuill from "react-quill";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {loading ? <Loader length={'50vh'}/> : posts.length!==0 ? posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <ReactQuill className="quill-desc" value={post.desc} readOnly={true} theme="bubble"/>
              <button><Link className="link" to={`/posts/${post.id}`}>Read More</Link></button>
            </div>
          </div>
        )) : <div className="emptyContainer">No Related Posts!!</div>}
      </div>
    </div>
  );
};

export default Home;
