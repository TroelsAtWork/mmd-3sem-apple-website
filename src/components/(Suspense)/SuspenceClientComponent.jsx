"use client";
import { use } from "react";

const SuspenseClientComponent = ({ data }) => {
  const posts = use(data);
  return (
    <ul>
      <li>test</li>
      {posts.map((post) => {
        return <li key={post.title}>{post.title}</li>;
      })}
    </ul>
  );
};

export default SuspenseClientComponent;
