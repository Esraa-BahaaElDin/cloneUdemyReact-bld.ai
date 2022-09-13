import style from "../CourseContent/style.module.css";
import MyAccordion from "../MyAccordion";
const CourseContent = (props) => {
  return (
    <>
      <div className={style.container}>
        <h2>Course Content</h2>
        <MyAccordion
          lectures={props.course.current.lectures}
          content={props.course.current.content}
        />
      </div>
    </>
  );
};
export default CourseContent;
