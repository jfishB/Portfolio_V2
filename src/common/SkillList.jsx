function SkillList({ className, src, skill }) {
  return (
      <div className={className}>
        <img src={src} alt={`${skill} logo`}/>
        <p>{skill}</p>
      </div>
  );
}

export default SkillList;
