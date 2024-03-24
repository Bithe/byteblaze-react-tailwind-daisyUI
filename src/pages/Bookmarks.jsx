import { useState } from "react";
import { getBlogs } from "../utility";
import BlogCard from "../components/BlogCard";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useState(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  return (
    <div>
      {/* BLOG POSTS CARD */}
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-8 text-white min-h-[calc(100vh-133px)]">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
      {/*  */}
    </div>
  );
};

export default Bookmarks;
