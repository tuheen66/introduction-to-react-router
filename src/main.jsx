/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

// 1st step
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Components/Users/Users.jsx";
import UserDetails from "./Components/UserDetails/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetails from "./Components/PostDetails/PostDetails.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

// 2nd step
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    // error page component
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },

      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      // fetching all the data to load on all posts route
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      // fetching single post data to load on single post component
      {
        // dynamically access post id
        path: "post/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 3rd step - replace App.jsx  */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
