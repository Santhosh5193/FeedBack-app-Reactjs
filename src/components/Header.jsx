import PropTypes from "prop-types";

function Header({
  text = "Feedback UI",
  bgColor = "rgba(0,0,0,9)",
  textColor = "white",
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="conatiner">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Header.defaultProps = {
//   text: "Feedback UI",
//   bgColor = "rgba(0,0,0,9)",
//   textColor = "white",
// };

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
