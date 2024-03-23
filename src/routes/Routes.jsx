import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },

      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),

        children: [
          {
            index: true,
            element: <Content></Content>,
          },
          {
            path: "author",
            element: <Author></Author>,
          },
        ],
      },

      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);
