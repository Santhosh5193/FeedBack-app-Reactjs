import { useState } from "react";

function FeedBackItem() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("Example of FeedBack Item");

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedBackItem;
