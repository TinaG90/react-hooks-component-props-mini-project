import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const newPost = posts.map((p) => (
    <Article key={p.id} title={p.title} date={p.date} preview={p.preview} />
  ));
  return <main>{newPost}</main>;
}
export default ArticleList;
