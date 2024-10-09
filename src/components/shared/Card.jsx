import PropTypes from "prop-types";

function Card({ children, reverse = false }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

const propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

// Card.defaultProps = {
//   reverse: false,
// };

export default Card;
