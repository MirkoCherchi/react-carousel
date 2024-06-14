import {
  IoArrowBackCircle as Back,
  IoArrowForwardCircle as Next,
} from "react-icons/io5";
import {
  FaCircle as CircleFull,
  FaRegCircle as CircleEmpty,
} from "react-icons/fa";

const Card = ({ post, prevPost, nextPost, posts, currentPost, clickPost }) => {
  return (
    <div className="flexColumn">
      <div className="flex">
        <Back className="icon" onClick={prevPost} />
        <div>
          <img src={post.image || "https://placehold.co/600x400"} alt="Post" />
          <h2 className="title">{post.title}</h2>
        </div>
        <Next className="icon" onClick={nextPost} />
      </div>
      <div className="flex">
        {posts.map((_, index) => (
          <span key={index} onClick={() => clickPost(index)}>
            {index === currentPost ? <CircleFull /> : <CircleEmpty />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
