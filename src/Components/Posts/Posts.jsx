import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    // loading all post data
  const posts = useLoaderData();
  return (
    <div>
      <h2>Posts:{posts.length} </h2>
      <div className='users'>
        {/* mapping single post data to send to single post component*/}
        {posts.map((post) => (
            // calling single post component and sending single post data through 'post' props
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
