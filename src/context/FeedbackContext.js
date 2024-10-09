import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([
    {
      id: 1,
      text: "this item is from context - 1",
      rating: 8,
    },
    {
      id: 2,
      text: "this item is from context - 2",
      rating: 10,
    },
    {
      id: 3,
      text: "this item is from context - 3",
      rating: 6,
    },
  ]);

  const [feedbackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
  };

  const deleteItem = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };

  const updatedFeedback = (id, updItem) => {
    setFeedBack(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updatedFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
