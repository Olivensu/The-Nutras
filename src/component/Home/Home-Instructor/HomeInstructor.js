import React from "react";
import "./Home-Instructor.css";

const HomeInstructor = () => {
  return (
    <div>
      <div className="row m-2 HomeInstructor">
        <div className="instructor-left col-12 col-md-5">
          <div className="meet-instructor">
            <button className="btn rounded-pill px-5 py-3">
              Meet Instructor
            </button>
          </div>
        </div>
        <div className="instructor-right col-12 col-md-6 text-start align-self-center">
          <p>25+ YEARS OF EXPERIENCE</p>
          <h1>We have expert instructor for help our students.</h1>
          <p>
            <span>
              An expert nutrition instructor should have a deep understanding of
              human nutrition and its role in health and disease. They should
              have experience designing and implementing nutrition education
              programs, as well as the ability to effectively communicate
              complex nutrition concepts to students. Strong interpersonal
              skills, a passion for teaching, and a commitment to staying
              up-to-date with the latest research are also important qualities
              for an expert nutrition instructor.
            </span>
          </p>
          <h2>100+ Courses</h2>
          <p>
            <span>
              Nutrition courses typically cover the basic principles of human
              nutrition, including macronutrients (carbohydrates, proteins, and
              fats) and micronutrients (vitamins and minerals). Students learn
              about how the body processes nutrients, how to evaluate diets and
              nutritional status, and how to develop personalized nutrition
              plans.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeInstructor;
