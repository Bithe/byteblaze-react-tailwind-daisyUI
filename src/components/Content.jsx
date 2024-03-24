import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import notFoundImg from "../assets/images/404.jpg";

import rehypeRaw from "rehype-raw";


const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, published_at, tags, body_html } =
    blog;
  return (
    <div
      rel="noopener noreferrer"
      className="mx-auto group hover:no-underline focus:no-underline border-2 border-primary p-2 w-full  border-opacity-30 overflow-hidden "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || notFoundImg}
      />

      {/* HASHTAGS */}
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
      {/*  */}

      <div className=" space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">
          {new Date(published_at).toLocaleDateString()}{" "}
        </span>

        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>

      </div>
    </div>
  );
};

export default Content;
