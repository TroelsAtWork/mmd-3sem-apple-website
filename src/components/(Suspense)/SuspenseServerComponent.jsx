import { Suspense } from "react";
import SuspenseClientComponent from "./SuspenceClientComponent";

const SuspenseServerComponent = async () => {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = data.json();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspenseClientComponent data={posts} />
    </Suspense>
  );
};

export default SuspenseServerComponent;
