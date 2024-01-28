import "./ResumeCard.css";
import { FaArrowRight } from "react-icons/fa";
const ResumeCard = (props) => {
  return (
    // En artikel som representerar ett CV-kort
    <article className="card-resume ">
      <img src={props.img} alt={props.title} />
      <div className="box ">
        <h3 className="title">{props.univer} </h3>
        <h5 className="title">{props.title}</h5>
        <p className="sub-title">{props.desc}</p>
        <div className="d-flex icons">
          <p>{props.year}</p>
          <a className="d-flex more-link" href={props.moreLink} target="-blank">
            More
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ResumeCard;
