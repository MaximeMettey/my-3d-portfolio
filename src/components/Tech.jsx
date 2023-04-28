import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const SkillCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-full w-[150px]">
      <motion.div
        // variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[150px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[12px] font-bold text-center">{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div
      // variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-7 mt-3">
        {technologies.map((technology, index) => (
          <SkillCard
            key={`skill-${index}`}
            index={index}
            {...technology}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")