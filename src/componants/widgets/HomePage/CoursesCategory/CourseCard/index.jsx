import { Link } from "react-router-dom";
import Rating from "../../../Rating/index";
import style from "../CourseCard/style.module.css";
const CourseCard = (props) => {
  return (
    <>
      <Link className={style.courseTemplate} to={`/course/${props.course.id}`}>
        <img src={props.course.image} alt={props.course.title} />
        <div className={style.courseDescription}>
          <h4>{props.course.title}</h4>
          <div className={style.author}>{props.course.author}</div>
          <Rating rating={props.course.rating} />({props.course.ratingCount})
          <h4>E£{props.course.price}</h4>
        </div>
      </Link>
    </>
  );
};
export default CourseCard;
