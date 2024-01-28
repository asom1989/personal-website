import "./Header.css";
import { Link } from "react-router-dom";
const LiHeader = (props) => {
  return (
    <li>
      <Link
        to={props.link}
        className={props.className}
        onClick={props.onClick}
        target={props.target}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default LiHeader;
