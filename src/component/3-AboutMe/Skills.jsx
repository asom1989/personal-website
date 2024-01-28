import "./AboutMe.css";

const Skills = (props) => {
  return (
    <>
      <div className="skills-warrper d-flex">
        <label htmlFor={props.for}>{props.name}</label>
        <meter id={props.for} min="0" max="100" value={props.value}></meter>
      </div>
    </>
  );
};

export default Skills;
