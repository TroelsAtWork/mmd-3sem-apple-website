"use client";
const ClientComponent = ({ data }) => {
  return (
    <ul>
      {data.map((post) => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  );
};

export default ClientComponent;
