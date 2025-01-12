import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h2 className='sectionDescription'>Here are a some tools I'm familar with.</h2>
        <h3 className='sectionTitle'>Skills</h3>
        <div className={styles.skillList}>
            <SkillList className={styles.skillCard} src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
            <SkillList src={checkMarkIcon} skill='React'/>
            <SkillList src={checkMarkIcon} skill='Python'/>
            <SkillList src={checkMarkIcon} skill='Java'/>
        </div>
        {/* <hr /> */}
    </section>
  )
}

export default Skills