import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContent from "../../componants/widgets/CoursePage/CourseContent/index";
import HeaderPage from "../../componants/widgets/CoursePage/HeaderPage/index";
import Requirements from "../../componants/widgets/CoursePage/Requirements/index";
import SideCourseCard from "../../componants/widgets/CoursePage/SideCourseCard";
import WhatWillLearn from "../../componants/widgets/CoursePage/WhatWillLearn";
import Footer from "../../componants/widgets/Footer";
import courses_data from "../../componants/widgets/HomePage/CoursesCategory/courses.json";
import LoadingSpinner from "../../componants/widgets/LoadingSpinner";
import NavigationBar from "../../componants/widgets/NavigationBar";
const CoursePage = (props) => {
  const { courseId } = useParams();
  const course = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const courses = courses_data;

  useEffect(() => {
    if (courses && courses.length > 0) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id == courseId) {
          course.current = courses[i];
          break;
        }
      }
      setIsLoading(false);
    }
  }, [courses]);
  return (
    <>
      <NavigationBar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SideCourseCard course={course} />
          <HeaderPage course={course} />
          <WhatWillLearn course={course} />
          <CourseContent course={course} />
          <Requirements course={course} />
        </>
      )}
      <Footer></Footer>
    </>
  );
};
export default CoursePage;
