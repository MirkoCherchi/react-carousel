import { posts } from "../../postsCarousel";
import Card from "./utils/Card";
const Main = () => {
  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};

export default Main;
