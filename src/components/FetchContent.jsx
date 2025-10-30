"use client";
import Content from "./Content";
import { data } from "../app/actions";
const blogs = await data();

const FetchContent = () => {
  console.log(blogs[0].title);
  // const data = await fetch('https://dummyjson.com/products/1');
  // const product = await data.json();
  // return <Content data={product}/>;
};

export default FetchContent;
