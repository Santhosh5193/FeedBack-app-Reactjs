import { useState } from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import Feedbackdata from "./data/FeedBackData";
function App() {
  const [feedback, setFeedBack] = useState(Feedbackdata);

  return (
    <>
      <Header />
      <div>
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
