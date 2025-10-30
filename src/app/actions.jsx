"use server";
export async function data() {
  "use server";
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return posts;
}
