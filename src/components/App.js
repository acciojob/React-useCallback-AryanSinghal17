
import React, { useState, useCallback } from "react";

const SkillList = React.memo(({ skills, onDelete }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li
          key={skill}
          id={`skill-${index}`}
          onClick={() => onDelete(skill)}
          style={{ cursor: "pointer", margin: "10px 0" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

function UseCallbackComp() {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  const addSkill = useCallback(() => {
    const newSkill = skill.trim();

    if (!newSkill) return;

    if (skills.some(
      (item) => item.toLowerCase() === newSkill.toLowerCase()
    )) {
      return;
    }

    setSkills((prev) => [...prev, newSkill]);
    setSkill("");
  }, [skill, skills]);

  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prev) =>
      prev.filter((item) => item !== skillToDelete)
    );
  }, []);

  return (
    <div>
      <h2 id="heading">Skills</h2>

      <input
        id="skill-input"
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter skill"
      />

      <button
        id="skill-add-btn"
        onClick={addSkill}
      >
        Add Skill
      </button>

      <SkillList
        skills={skills}
        onDelete={deleteSkill}
      />
    </div>
  );
}

export default UseCallbackComp;
