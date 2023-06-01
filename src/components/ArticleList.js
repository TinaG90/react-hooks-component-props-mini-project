import React from "react";
import Article from "./Article";

function ArticleList({ post }) {
  return post.map((p) => (
    <main key={p.id}>
      <Article title={p.title} date={p.date} preview={p.preview} />
    </main>
  ));
}
export default ArticleList;
