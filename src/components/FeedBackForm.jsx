import { useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./Button";
import Rating from "./Rating";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackForm() {
  const { addFeedback, feedbackEdit, updatedFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisplayed, setBtnDisplayed] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisplayed(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setMessage(null);
      setBtnDisplayed(true);
    } else if (inputValue !== "" && inputValue.length < 10) {
      setMessage("It must have above 10 characters");
      setBtnDisplayed(true);
    } else {
      setMessage(null);
      setBtnDisplayed(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updatedFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
      setRating("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Rating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisplayed}>
            Submit
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
