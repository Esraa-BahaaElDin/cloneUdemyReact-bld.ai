import { useRoutes } from "react-router-dom";
import CourseDetailsPage from "../../pages/CoursePage/index";
import HomePage from "../../pages/HomePage/index";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/course/:courseId",
      element: <CourseDetailsPage />,
    },
  ]);
  return element;
}
