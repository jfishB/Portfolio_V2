function SkillList({ src, skill }) {
  return (
      <div>
        <img src={src} alt={`${skill} logo`}/>
        <p>{skill}</p>
      </div>
  );
}

export default SkillList;
