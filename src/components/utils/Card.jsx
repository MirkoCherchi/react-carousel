import {
  IoArrowBackCircle as Back,
  IoArrowForwardCircle as Next,
} from "react-icons/io5";

const Card = ({ post }) => {
  return (
    <>
      <div className="flex">
        <Back className="icon" />
        <div>
          <img src={post.image || "https://placehold.co/600x400"} alt="" />
          <h2 className="title">{post.title}</h2>
        </div>
        <Next className="icon" />
      </div>
    </>
  );
};

export default Card;
