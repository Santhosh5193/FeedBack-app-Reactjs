import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import Card from "./components/shared/Card";
import FeedBackStats from "./components/FeedBackStats";
import Feedbackdata from "./data/FeedBackData";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <FeedBackForm />
          <FeedBackStats />
          <FeedBackList />

          <Routes>
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </Card>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
