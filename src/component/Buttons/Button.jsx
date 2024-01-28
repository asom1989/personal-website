import "./Button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn ${props.className}`}
      type={props.type}
    >
      {props.name}
    </button>
  );
};

export default Button;
