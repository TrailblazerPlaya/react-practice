import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import queryString from "query-string";
import course from "../data/courses";
import Style from "./Courses.module.css";

const SORT_KEYS = ["title", "id", "slug"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(course, sortKey)
  );
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey(undefined);
      setSortedCourses([...course]);
    }
  }, [sortKey, navigate]);
  return (
    <div>
      <h1>{sortKey ? `Sorted by ${sortKey}` : "All Courses"}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <NavLink className={Style.CourseLink} to={`/courses/${course.slug}`}>
            {course.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default Courses;
