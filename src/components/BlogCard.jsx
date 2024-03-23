import { Link } from "react-router-dom";

import notFoundImg from "../assets/images/404.jpg";

const BlogCard = ({ blog }) => {
  const { id, cover_image, title, description, published_at } = blog;

  return (
    <Link
    to={`/blog/${id}`}
      rel="noopener noreferrer"
    
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 border-2 border-primary p-4 transition hover:scale-105 hover:border-secondary hover:border-4 border-opacity-30"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || notFoundImg}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400"> {new Date(published_at).toLocaleDateString()} </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
