import { useContext } from "react";
import CoursesContext from "../../../../CoursesContext";
import style from "../../CoursesCategory/CoursesInfoCategory/style.module.css";
import CoursesCategoryLayout from "../CoursesCategoryLayout";
import CoursesList from "../CoursesList";
const CoursesInfoCategory = (props) => {
  const courses = useContext(CoursesContext);
  return (
    <>
      <section className={`${style.courses} ${style.paddedSection}`}>
        <CoursesCategoryLayout>
          <CoursesList />
        </CoursesCategoryLayout>
      </section>
    </>
  );
};
export default CoursesInfoCategory;
