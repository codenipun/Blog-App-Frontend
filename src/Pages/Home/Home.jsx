import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.scss";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  const [loading, setLoading] = useState(false);

  const handleConvertToPlainText = (quillData) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = quillData;
    const fullText = tempElement.textContent || tempElement.innerText || '';

    const lines = fullText.split('\n').filter(line => line.trim() !== '');
    let truncatedText = lines.slice(0, 4).join('\n');
    if (lines.length > 4) {
      truncatedText += '...';
    }
    return truncatedText;
  };

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
        {loading ? <Loader length={'50vh'}/> : posts?.length!==0 ? posts?.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{handleConvertToPlainText(post.desc)}</p>
            </div>
          </div>
        )) : <div className="emptyContainer">No Related Posts!!</div>}
      </div>
    </div>
  );
};

export default Home;
