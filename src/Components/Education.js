import "../Styles/Education.css";
import useAddClasses from "../Custom Hooks/useAddClasses";

export default function Education() {
  useAddClasses("education-h1");
  useAddClasses("education-h3");

  return (
    <div className="eduction">
      <h1 id="education-h1" className="floaty">
        Education
      </h1>
      <h3 id="education-h3" className="floaty">
        My eventful education journey.
      </h3>

      <div className="education-container">
        Five years of Civil Engineering taught me one key lesson: I’d much
        rather debug code than deal with construction plans. Now I’m building
        websites instead of bridges! I hold a Bachelor's degree in Civil
        Engineering from Cairo University, it all started with a C++ course
        which made me interested in the coding world. The mathematical
        foundation from various courses facilitated a smooth transition into
        problem-solving in programming. I decided to dive into frontend
        development, I became a self-taught developer through lots of tutorials,
        courses, and experimenting. I also completed the Meta Front-End
        Developer Certificate on Coursera, to polish my frontend skills. Today,
        I blend my engineering background with my coding skills to craft digital
        experiences and solve problems creatively.
      </div>
    </div>
  );
}
