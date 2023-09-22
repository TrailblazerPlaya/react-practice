import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import course from "../data/courses";
import Style from "./Courses.module.css";
const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      {course.map((course) => (
        <div key={course.id}>
          <NavLink className={Style.CourseLink} to={`/courses/${course.slug}`}>
            {course.title}
          </NavLink>
        </div>
      ))}
      <Outlet />
    </div>
  );
};
export default Courses;
