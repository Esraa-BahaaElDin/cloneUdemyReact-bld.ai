import Footer from "../../componants/widgets/Footer/index";
import CoursesInfoCategory from "../../componants/widgets/HomePage/CoursesCategory/CoursesInfoCategory";
import LandingCard from "../../componants/widgets/HomePage/LandingCard";
import NavigationBar from "../../componants/widgets/NavigationBar";

const HomePage = (props) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <LandingCard></LandingCard>
      <CoursesInfoCategory></CoursesInfoCategory>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
