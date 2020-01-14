import React from "react";
import { inject, observer } from "mobx-react";
import Article from "./Article";

export default inject("board")(
  observer(({ board }) => {
    const articles = board.articles.map(article => {
      // eslint-disable-next-line no-param-reassign
      article.content = <h3>{article.title}</h3>;
      return article;
    });
    return (
      <div>
        {articles &&
          articles.map(article => (
            <Article {...article} />
          ))}
      </div>
    );
  })
);
