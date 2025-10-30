import ClientComponent from "./ClientComponent";

const ServerComponent = async () => {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return <ClientComponent data={posts} />;
};

export default ServerComponent;
