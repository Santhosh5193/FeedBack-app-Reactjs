import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackItem({ item }) {
  const { deleteItem, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteItem(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit colur="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default FeedBackItem;
