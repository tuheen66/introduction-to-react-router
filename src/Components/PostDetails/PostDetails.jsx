/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    //  to fetch data from database
  const post = useLoaderData();

//   to get parameter from a component
  const { postId } = useParams();

  //   to navigate to different route
  const navigate = useNavigate();

  const { id, title, body } = post;

  //   event handler function to go back to Home page
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Post details about: {id} :</h2>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
      {/* used a event handler button to go back to Home page */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
