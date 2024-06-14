import { useState } from "react";
import { posts } from "../../postsCarousel";
import Card from "./utils/Card";

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

  const clickPost = (index) => {
    setCurrentPost(index);
  };

  return (
    <div className="carousel-container">
      <Card
        post={posts[currentPost]}
        prevPost={prevPost}
        nextPost={nextPost}
        posts={posts}
        currentPost={currentPost}
        clickPost={clickPost}
      />
    </div>
  );
};

export default Main;
