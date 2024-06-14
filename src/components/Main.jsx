import { posts } from "../../postsCarousel";
import Card from "./utils/Card";
import { useState } from "react";

const Main = () => {
  const [currentPost, setCurrentPost] = useState(0);

  const prevPost = () => {
    setCurrentPost((currentPost) =>
      currentPost === 0 ? posts.length - 1 : currentPost - 1
    );
  };

  const nextPost = () => {
    setCurrentPost((currentPost) =>
      currentPost === posts.length - 1 ? 0 : currentPost + 1
    );
  };

  return (
    <Card post={posts[currentPost]} prevPost={prevPost} nextPost={nextPost} />
  );
};

export default Main;
