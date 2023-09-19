/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

// receiving single post data from all Posts component and making single post component
const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "5px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}> 
      <h4>Post of Id: {id} </h4>
      <p>{title}</p>

      {/* creating link to single post details route */}
      {/* <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link> */}
      <button onClick={handleShowDetail}>Click to show details</button>
    </div>
  );
};

export default Post;
