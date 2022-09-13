import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CoursesContext from "../../../../CoursesContext/index";
import LoadingSpinner from "../../../LoadingSpinner";
import CourseCard from "../CourseCard";
import courses_data from "../courses.json";
import style from "../CoursesList/style.module.css";
const CoursesList = () => {
  const courses = useContext(CoursesContext);
  const [search] = useSearchParams();
  const [selectedCourses, setSelectedCourses] = useState([]);
  let searchValue = search.get("SearchValue");

  useEffect(() => {
    if (searchValue) {
      let searchResult = courses.filter((course) =>
        course.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSelectedCourses(searchResult);
    } else {
      setSelectedCourses(courses);
    }
  }, [searchValue, courses]);

  useEffect(() => {
    console.log(courses_data);
    setSelectedCourses(courses_data);
  }, []);

  return (
    <>
      <ul className={style.coursesList}>
        {selectedCourses.length === 0 ? (
          <LoadingSpinner />
        ) : (
          selectedCourses.map((course) => {
            return <CourseCard key={course.id} course={course}></CourseCard>;
          })
        )}
      </ul>
    </>
  );
};
export default CoursesList;
