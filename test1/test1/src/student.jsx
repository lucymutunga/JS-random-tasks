//propTypes = a mechanism that ensures that the passedvalue is f the correct datatype.

//default props = a mechanism that allows you to set default values for props.
import PropTypes from "prop-types";
function Student(props) {
  return (
    <div className="text-lg p-2 border-2 border-black">
      <p className="m-0">Name:{props.name}</p>
      <p className="m-0">Age:{props.age}</p>
      <p className="m-0">Student:{props.isStudent ? "Yes" : "Nope"}</p>
    </div>
  );
}
Stuent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
