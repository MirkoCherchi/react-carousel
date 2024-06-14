import {
  IoArrowBackCircle as Back,
  IoArrowForwardCircle as Next,
} from "react-icons/io5";

const Card = ({ post, prevPost, nextPost }) => {
  return (
    <>
      <div className="flex">
        <Back className="icon" onClick={prevPost} />
        <div>
          <img src={post.image || "https://placehold.co/600x400"} alt="Post" />
          <h2 className="title">{post.title}</h2>
        </div>
        <Next className="icon" onClick={nextPost} />
        {console.log(post)}
      </div>
    </>
  );
};

export default Card;
